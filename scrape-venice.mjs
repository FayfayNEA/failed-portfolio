/**
 * scrape-venice.mjs
 * Scrapes https://www.failennaselta.com/venice with Firecrawl (HTML format)
 * and prints every unique framerusercontent.com image URL found.
 *
 * Run: node scrape-venice.mjs
 */

import FirecrawlApp from '@mendable/firecrawl-js';
import { load } from 'cheerio';
import 'dotenv/config';

const app = new FirecrawlApp({ apiKey: process.env.FIRECRAWL_API_KEY });

async function main() {
  console.log('Scraping https://www.failennaselta.com/venice …');

  const result = await app.scrape('https://www.failennaselta.com/venice', {
    formats: ['html'],
  });

  if (!result || !result.html) {
    console.error('No HTML returned — check your FIRECRAWL_API_KEY');
    process.exit(1);
  }

  const $ = load(result.html);
  const seen = new Set();
  const images = [];

  // Collect from src, srcset, data-src, style background-image
  $('img').each((_, el) => {
    const src = $(el).attr('src') ?? '';
    const srcset = $(el).attr('srcset') ?? '';
    const dataSrc = $(el).attr('data-src') ?? '';

    for (const raw of [src, dataSrc, ...srcset.split(',').map(s => s.trim().split(' ')[0])]) {
      const url = raw.split('?')[0]; // strip query params for dedup
      if (url && /framerusercontent\.com\/images\//i.test(url) && !seen.has(url)) {
        seen.add(url);
        // preserve original with query params
        images.push(raw.trim());
      }
    }
  });

  // Also catch any framer image URLs embedded in inline styles or data attrs
  const htmlStr = result.html;
  const re = /https:\/\/framerusercontent\.com\/images\/[A-Za-z0-9_\-]+\.[a-z]+(?:\?[^"'\s)]*)?/gi;
  let m;
  while ((m = re.exec(htmlStr)) !== null) {
    const url = m[0].split('?')[0];
    if (!seen.has(url)) {
      seen.add(url);
      images.push(m[0]);
    }
  }

  console.log(`\nFound ${images.length} unique Framer images:\n`);
  images.forEach((url, i) => console.log(`  [${i}] ${url}`));

  console.log('\n--- Copy-paste array ---');
  console.log('const GALLERY_IMAGES = [');
  images.forEach(url => console.log(`  "${url}",`));
  console.log('] as const;');
}

main().catch(err => { console.error(err); process.exit(1); });
