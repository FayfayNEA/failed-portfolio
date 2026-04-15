import FirecrawlApp from '@mendable/firecrawl-js';
import { load } from 'cheerio';
import 'dotenv/config';

const app = new FirecrawlApp({ apiKey: process.env.FIRECRAWL_API_KEY });

const pages = ['etrade', 'nightterrors', 'jahn'];

for (const slug of pages) {
  const url = `https://www.failennaselta.com/${slug}`;
  console.log(`\n\n========== ${slug.toUpperCase()} ==========`);
  const result = await app.scrape(url, { formats: ['html', 'markdown'] });

  // Print markdown
  console.log('\n--- MARKDOWN ---');
  console.log(result.markdown ?? '(none)');

  // Extract all framerusercontent image/video URLs
  const htmlStr = result.html ?? '';
  const imgRe = /https:\/\/framerusercontent\.com\/images\/[A-Za-z0-9_\-]+\.[a-z]+(?:\?[^"'\s)]*)?/gi;
  const vidRe = /https:\/\/framerusercontent\.com\/assets\/[A-Za-z0-9_\-]+\.[a-z]+(?:\?[^"'\s)]*)?/gi;

  const imgs = [...new Set([...htmlStr.matchAll(imgRe)].map(m => m[0]))];
  const vids = [...new Set([...htmlStr.matchAll(vidRe)].map(m => m[0]))];

  console.log('\n--- IMAGES ---');
  imgs.forEach(u => console.log(u));
  console.log('\n--- VIDEOS ---');
  vids.forEach(u => console.log(u));
}
