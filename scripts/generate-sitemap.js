import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';

const DOMAIN = 'https://scorpiisolutions.com';

const pages = [
  '/', // only one real page for SPA
];

(async () => {
  try {
    const sitemap = new SitemapStream({ hostname: DOMAIN });

    pages.forEach((page) => {
      sitemap.write({
        url: page,
        changefreq: 'weekly',
        priority: 1.0
      });
    });

    sitemap.end();

    const data = await streamToPromise(sitemap);
    const sitemapPath = resolve('./public/sitemap.xml');
    const writeStream = createWriteStream(sitemapPath);
    writeStream.write(data.toString());
    writeStream.end();

    console.log('✅ Sitemap updated successfully for single-page site.');
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
  }
})();
