import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';

// Your live domain
const DOMAIN = 'https://scorpiisolutions.com';

// List all pages you want to include in the sitemap
const pages = [
  '/',
  '/service',
  '/about',
  '/contact',
];

// Generate the sitemap
(async () => {
  try {
    const sitemap = new SitemapStream({ hostname: DOMAIN });

    // Add all pages
    pages.forEach((page) => {
      sitemap.write({
        url: page,
        changefreq: 'weekly',
        priority: page === '/' ? 1.0 : 0.8,
      });
    });

    sitemap.end();

    // Convert stream to actual XML
    const data = await streamToPromise(sitemap);

    // Save sitemap to public folder
    const sitemapPath = resolve('./public/sitemap.xml');
    const writeStream = createWriteStream(sitemapPath);
    writeStream.write(data.toString());
    writeStream.end();

    console.log('✅ Dynamic sitemap generated successfully at public/sitemap.xml');
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
  }
})();
