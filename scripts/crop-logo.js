const fs = require('fs');
const zlib = require('zlib');

function cropPNG(inputPath, outputPath) {
  const buf = fs.readFileSync(inputPath);
  
  // Parse PNG chunks
  let pos = 8; // skip PNG signature
  let width = 0, height = 0, bitDepth = 0, colorType = 0;
  const idatChunks = [];

  while (pos < buf.length) {
    const len = buf.readUInt32BE(pos);
    const type = buf.toString('ascii', pos + 4, pos + 8);
    if (type === 'IHDR') {
      width = buf.readUInt32BE(pos + 8);
      height = buf.readUInt32BE(pos + 12);
      bitDepth = buf[pos + 16];
      colorType = buf[pos + 17];
    } else if (type === 'IDAT') {
      idatChunks.push(buf.slice(pos + 8, pos + 8 + len));
    }
    pos += 12 + len;
  }

  console.log(`Original dimensions: ${width}x${height}, colorType: ${colorType}, bitDepth: ${bitDepth}`);

  const compressed = Buffer.concat(idatChunks);
  const decompressed = zlib.inflateSync(compressed);

  // Determine bytes per pixel based on color type
  // ColorType 2 = RGB (3 bytes), ColorType 6 = RGBA (4 bytes), ColorType 0 = Grayscale (1 byte), ColorType 3 = Palette
  let bpp = 3;
  if (colorType === 6) bpp = 4;
  else if (colorType === 2) bpp = 3;
  else if (colorType === 0) bpp = 1;

  const stride = 1 + width * bpp; // 1 filter byte + pixels

  // Un-filter scanlines (assuming sub/up/average/paeth filter or none)
  // For standard PNGs, let's reconstruct raw pixel rows
  const rawRows = [];
  let prevRow = new Uint8Array(width * bpp);

  for (let y = 0; y < height; y++) {
    const rowStart = y * stride;
    const filterType = decompressed[rowStart];
    const currentRow = new Uint8Array(width * bpp);
    const lineData = decompressed.slice(rowStart + 1, rowStart + stride);

    for (let i = 0; i < lineData.length; i++) {
      const raw = lineData[i];
      const left = i >= bpp ? currentRow[i - bpp] : 0;
      const up = prevRow[i];
      const leftUp = i >= bpp ? prevRow[i - bpp] : 0;

      let val = raw;
      if (filterType === 1) { // Sub
        val = (raw + left) & 0xff;
      } else if (filterType === 2) { // Up
        val = (raw + up) & 0xff;
      } else if (filterType === 3) { // Average
        val = (raw + Math.floor((left + up) / 2)) & 0xff;
      } else if (filterType === 4) { // Paeth
        const p = left + up - leftUp;
        const pa = Math.abs(p - left);
        const pb = Math.abs(p - up);
        const pc = Math.abs(p - leftUp);
        let pr = leftUp;
        if (pa <= pb && pa <= pc) pr = left;
        else if (pb <= pc) pr = up;
        val = (raw + pr) & 0xff;
      }
      currentRow[i] = val;
    }
    rawRows.push(currentRow);
    prevRow = currentRow;
  }

  // Find bounding box of non-white content
  let minY = height, maxY = 0, minX = width, maxX = 0;

  for (let y = 0; y < height; y++) {
    const row = rawRows[y];
    for (let x = 0; x < width; x++) {
      const idx = x * bpp;
      const r = row[idx];
      const g = row[idx + 1];
      const b = row[idx + 2];
      const a = bpp === 4 ? row[idx + 3] : 255;

      // Check if pixel is NOT white/transparent (threshold: r < 240 or g < 240 or b < 240, and a > 20)
      if ((r < 240 || g < 240 || b < 240) && a > 20) {
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
      }
    }
  }

  // Add padding around crop
  const padding = 15;
  minY = Math.max(0, minY - padding);
  maxY = Math.min(height - 1, maxY + padding);
  minX = Math.max(0, minX - padding);
  maxX = Math.min(width - 1, maxX + padding);

  const cropWidth = maxX - minX + 1;
  const cropHeight = maxY - minY + 1;

  console.log(`Cropped bounding box: (${minX}, ${minY}) to (${maxX}, ${maxY}) => ${cropWidth}x${cropHeight}`);

  // Construct new decompressed buffer with filterType = 0 (None)
  const newStride = 1 + cropWidth * bpp;
  const newDecompressed = Buffer.alloc(cropHeight * newStride);

  for (let cy = 0; cy < cropHeight; cy++) {
    const sy = minY + cy;
    const srcRow = rawRows[sy];
    const dstOffset = cy * newStride;
    newDecompressed[dstOffset] = 0; // Filter None

    for (let cx = 0; cx < cropWidth; cx++) {
      const sx = minX + cx;
      for (let b = 0; b < bpp; b++) {
        newDecompressed[dstOffset + 1 + cx * bpp + b] = srcRow[sx * bpp + b];
      }
    }
  }

  // Re-compress IDAT
  const newCompressed = zlib.deflateSync(newDecompressed);

  // Helper CRC32
  function crc32(buf) {
    let c = 0xffffffff;
    const table = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
      let k = n;
      for (let i = 0; i < 8; i++) {
        k = (k & 1) ? (0xedb88320 ^ (k >>> 1)) : (k >>> 1);
      }
      table[n] = k;
    }
    for (let i = 0; i < buf.length; i++) {
      c = table[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
    }
    return (c ^ 0xffffffff) >>> 0;
  }

  function makeChunk(type, data) {
    const lenBuf = Buffer.alloc(4);
    lenBuf.writeUInt32BE(data.length, 0);
    const typeBuf = Buffer.from(type, 'ascii');
    const crcBuf = Buffer.alloc(4);
    const typeAndData = Buffer.concat([typeBuf, data]);
    crcBuf.writeUInt32BE(crc32(typeAndData), 0);
    return Buffer.concat([lenBuf, typeAndData, crcBuf]);
  }

  // Make new IHDR
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(cropWidth, 0);
  ihdrData.writeUInt32BE(cropHeight, 4);
  ihdrData[8] = bitDepth;
  ihdrData[9] = colorType;
  ihdrData[10] = 0; // Compression
  ihdrData[11] = 0; // Filter
  ihdrData[12] = 0; // Interlace

  const pngSig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdrChunk = makeChunk('IHDR', ihdrData);
  const idatChunk = makeChunk('IDAT', newCompressed);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  const outBuf = Buffer.concat([pngSig, ihdrChunk, idatChunk, iendChunk]);
  fs.writeFileSync(outputPath, outBuf);
  console.log(`Saved cropped logo to ${outputPath}`);
}

cropPNG('./src/assets/logo.png', './src/assets/logo.png');
cropPNG('./src/assets/logo.png', './public/logo.png');
