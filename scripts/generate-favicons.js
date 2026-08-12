const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

function readPNG(filePath) {
  const buf = fs.readFileSync(filePath);
  let pos = 8;
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

  const decompressed = zlib.inflateSync(Buffer.concat(idatChunks));
  let bpp = colorType === 6 ? 4 : colorType === 2 ? 3 : 1;
  const stride = 1 + width * bpp;

  const rawPixels = new Uint8Array(width * height * 4);
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
      if (filterType === 1) val = (raw + left) & 0xff;
      else if (filterType === 2) val = (raw + up) & 0xff;
      else if (filterType === 3) val = (raw + Math.floor((left + up) / 2)) & 0xff;
      else if (filterType === 4) {
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
    prevRow = currentRow;

    for (let x = 0; x < width; x++) {
      const srcIdx = x * bpp;
      const dstIdx = (y * width + x) * 4;
      if (colorType === 6) {
        rawPixels[dstIdx] = currentRow[srcIdx];
        rawPixels[dstIdx + 1] = currentRow[srcIdx + 1];
        rawPixels[dstIdx + 2] = currentRow[srcIdx + 2];
        rawPixels[dstIdx + 3] = currentRow[srcIdx + 3];
      } else if (colorType === 2) {
        rawPixels[dstIdx] = currentRow[srcIdx];
        rawPixels[dstIdx + 1] = currentRow[srcIdx + 1];
        rawPixels[dstIdx + 2] = currentRow[srcIdx + 2];
        rawPixels[dstIdx + 3] = 255;
      }
    }
  }

  return { width, height, data: rawPixels };
}

function encodePNG(width, height, rgbaBuffer) {
  const bpp = 4;
  const stride = 1 + width * bpp;
  const uncompressed = Buffer.alloc(height * stride);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * stride;
    uncompressed[rowOffset] = 0; // Filter None
    const srcOffset = y * width * 4;
    for (let x = 0; x < width * 4; x++) {
      uncompressed[rowOffset + 1 + x] = rgbaBuffer[srcOffset + x];
    }
  }

  const compressed = zlib.deflateSync(uncompressed, { level: 9 });

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

  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8;  // 8 bits
  ihdrData[9] = 6;  // RGBA
  ihdrData[10] = 0; // Deflate
  ihdrData[11] = 0; // Filter
  ihdrData[12] = 0; // No interlace

  const pngSig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdrChunk = makeChunk('IHDR', ihdrData);
  const idatChunk = makeChunk('IDAT', compressed);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([pngSig, ihdrChunk, idatChunk, iendChunk]);
}

// Resample RGBA buffer using Mitchell-Netravali or area averaging
function resizeRGBA(srcData, srcW, srcH, dstW, dstH) {
  const dstData = new Uint8Array(dstW * dstH * 4);
  const xRatio = srcW / dstW;
  const yRatio = srcH / dstH;

  for (let dy = 0; dy < dstH; dy++) {
    for (let dx = 0; dx < dstW; dx++) {
      // Source window
      const sx0 = dx * xRatio;
      const sx1 = (dx + 1) * xRatio;
      const sy0 = dy * yRatio;
      const sy1 = (dy + 1) * yRatio;

      let rSum = 0, gSum = 0, bSum = 0, aSum = 0, totalWeight = 0;

      const startY = Math.max(0, Math.floor(sy0));
      const endY = Math.min(srcH - 1, Math.ceil(sy1));
      const startX = Math.max(0, Math.floor(sx0));
      const endX = Math.min(srcW - 1, Math.ceil(sx1));

      for (let sy = startY; sy <= endY; sy++) {
        const yWeight = Math.max(0, Math.min(sy + 1, sy1) - Math.max(sy, sy0));
        if (yWeight <= 0) continue;

        for (let sx = startX; sx <= endX; sx++) {
          const xWeight = Math.max(0, Math.min(sx + 1, sx1) - Math.max(sx, sx0));
          if (xWeight <= 0) continue;

          const weight = xWeight * yWeight;
          const srcIdx = (sy * srcW + sx) * 4;
          const a = srcData[srcIdx + 3] / 255;

          // Premultiplied alpha weighting for smooth antialiased edges
          rSum += srcData[srcIdx] * a * weight;
          gSum += srcData[srcIdx + 1] * a * weight;
          bSum += srcData[srcIdx + 2] * a * weight;
          aSum += srcData[srcIdx + 3] * weight;
          totalWeight += weight;
        }
      }

      const dstIdx = (dy * dstW + dx) * 4;
      if (totalWeight > 0 && aSum > 0) {
        const finalA = aSum / totalWeight;
        const alphaScale = 255 / finalA;
        dstData[dstIdx] = Math.round(Math.min(255, Math.max(0, (rSum / totalWeight) * alphaScale)));
        dstData[dstIdx + 1] = Math.round(Math.min(255, Math.max(0, (gSum / totalWeight) * alphaScale)));
        dstData[dstIdx + 2] = Math.round(Math.min(255, Math.max(0, (bSum / totalWeight) * alphaScale)));
        dstData[dstIdx + 3] = Math.round(Math.min(255, Math.max(0, finalA)));
      } else {
        dstData[dstIdx] = 0;
        dstData[dstIdx + 1] = 0;
        dstData[dstIdx + 2] = 0;
        dstData[dstIdx + 3] = 0;
      }
    }
  }

  return dstData;
}

// Center crop and pad into a square
function createSquareMaster(src, paddingPercent = 0.12) {
  // Find tight bounding box of non-transparent content
  let minX = src.width, maxX = 0, minY = src.height, maxY = 0;
  for (let y = 0; y < src.height; y++) {
    for (let x = 0; x < src.width; x++) {
      const idx = (y * src.width + x) * 4;
      const a = src.data[idx + 3];
      if (a > 15) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  const contentW = maxX - minX + 1;
  const contentH = maxY - minY + 1;
  console.log(`Content bounding box: ${contentW}x${contentH} at (${minX}, ${minY})`);

  // Target square dimension with padding
  const maxDim = Math.max(contentW, contentH);
  const padding = Math.round(maxDim * paddingPercent);
  const squareSize = maxDim + padding * 2;

  const squareData = new Uint8Array(squareSize * squareSize * 4);

  // Center the content within the square
  const offsetX = Math.round((squareSize - contentW) / 2);
  const offsetY = Math.round((squareSize - contentH) / 2);

  for (let cy = 0; cy < contentH; cy++) {
    for (let cx = 0; cx < contentW; cx++) {
      const srcIdx = ((minY + cy) * src.width + (minX + cx)) * 4;
      const dstIdx = ((offsetY + cy) * squareSize + (offsetX + cx)) * 4;
      squareData[dstIdx] = src.data[srcIdx];
      squareData[dstIdx + 1] = src.data[srcIdx + 1];
      squareData[dstIdx + 2] = src.data[srcIdx + 2];
      squareData[dstIdx + 3] = src.data[srcIdx + 3];
    }
  }

  return { width: squareSize, height: squareSize, data: squareData };
}

// Generate ICO buffer from PNG buffers
function createICO(pngBuffers) {
  // ICO header: 6 bytes (Reserved 2, Type 1 for ICO, Count 2)
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1 = icon
  header.writeUInt16LE(count, 4);

  // Directory entries: 16 bytes each
  const dirEntries = [];
  let currentOffset = 6 + count * 16;

  for (let i = 0; i < count; i++) {
    const { width, height, buffer } = pngBuffers[i];
    const entry = Buffer.alloc(16);
    entry.writeUInt8(width >= 256 ? 0 : width, 0);
    entry.writeUInt8(height >= 256 ? 0 : height, 1);
    entry.writeUInt8(0, 2); // color palette count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(buffer.length, 8); // size of image data
    entry.writeUInt32LE(currentOffset, 12); // offset of image data
    dirEntries.push(entry);
    currentOffset += buffer.length;
  }

  return Buffer.concat([header, ...dirEntries, ...pngBuffers.map(p => p.buffer)]);
}

const inputPath = 'C:/Users/KITS/.gemini/antigravity-ide/brain/3a131d1d-cfce-4ff1-a9b3-d348ba71dcb9/media__1786532813985.png';
const src = readPNG(inputPath);
const master = createSquareMaster(src, 0.08); // 8% padding for clean favicon margin

console.log(`Master square created: ${master.width}x${master.height}`);

// Export multiple sizes
const sizes = [512, 192, 180, 64, 48, 32, 16];
const pngOutputs = {};

for (const s of sizes) {
  const resized = resizeRGBA(master.data, master.width, master.height, s, s);
  const pngBuf = encodePNG(s, s, resized);
  pngOutputs[s] = pngBuf;
}

// Write favicon files
fs.writeFileSync('./public/favicon.png', pngOutputs[32]);
fs.writeFileSync('./public/favicon-32x32.png', pngOutputs[32]);
fs.writeFileSync('./public/favicon-16x16.png', pngOutputs[16]);
fs.writeFileSync('./public/apple-touch-icon.png', pngOutputs[180]);
fs.writeFileSync('./public/site-icon-512.png', pngOutputs[512]);
fs.writeFileSync('./public/site-icon-192.png', pngOutputs[192]);

const icoBuf = createICO([
  { width: 16, height: 16, buffer: pngOutputs[16] },
  { width: 32, height: 32, buffer: pngOutputs[32] },
  { width: 48, height: 48, buffer: pngOutputs[48] }
]);
fs.writeFileSync('./public/favicon.ico', icoBuf);

// Generate public/favicon.svg
const base64_512 = pngOutputs[512].toString('base64');
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <image width="512" height="512" href="data:image/png;base64,${base64_512}" />
</svg>
`;
fs.writeFileSync('./public/favicon.svg', svgContent);

console.log('All favicon PNGs, ICO, and SVG generated successfully in public/');
