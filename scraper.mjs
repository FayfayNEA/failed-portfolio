import FirecrawlApp from '@mendable/firecrawl-js';
import fs from 'fs/promises';
import path from 'path';
import 'dotenv/config';

// Initialize the Firecrawl Engine
const app = new FirecrawlApp({ apiKey: process.env.FIRECRAWL_API_KEY });

// Drop your 19 Framer URLs here
const projectUrls = [
  'https://www.failennaselta.com/buddy',

  'https://www.failennaselta.com/about',

  'https://www.failennaselta.com/contact',

  'https://www.failennaselta.com/work',

  'https://www.failennaselta.com/vagabond',

  'https://www.failennaselta.com/etrade',

  'https://www.failennaselta.com/eidolon',

  'https://www.failennaselta.com/jahn',

  'https://www.failennaselta.com/nightterrors',

  'https://www.failennaselta.com/lighthouse',

  'https://www.failennaselta.com/spiral',

  'https://www.failennaselta.com/cool',

  'https://www.failennaselta.com/bonemachine',

  'https://www.failennaselta.com/venice',

  'https://www.failennaselta.com/the-other',

  'https://www.failennaselta.com/tiny-home',

  'https://www.failennaselta.com/mindful-path',

  'https://www.failennaselta.com/buddhist',

  'https://www.failennaselta.com/villain-home',
];

async function extractPages() {
  console.log(`Starting extraction for ${projectUrls.length} pages...`);

  const contentDir = path.join(process.cwd(), 'src', 'content');
  await fs.mkdir(contentDir, { recursive: true });

  for (const url of projectUrls) {
    try {
      console.log(`Scraping: ${url}...`);
      
      // The new SDK returns the document directly
      const result = await app.scrape(url, { formats: ['markdown'] });
      
      // Safety check in case the page is entirely blank
      if (!result || !result.markdown) {
        console.error(`⚠️ No markdown returned for ${url}`);
        continue;
      }

      // Extract metadata
      const title = result.metadata?.title || 'Untitled Project';
      const slug = url.split('/').filter(Boolean).pop();
      
      // Construct the MDX file
      const mdxContent = `---
title: "${title}"
slug: "${slug}"
roles: []
tools: []
---

${result.markdown}
`;

      const filePath = path.join(contentDir, `${slug}.mdx`);
      await fs.writeFile(filePath, mdxContent);
      
      console.log(`✅ Saved: ${slug}.mdx`);
      
    } catch (error) {
      // The new SDK throws errors directly to the catch block
      console.error(`❌ Error processing ${url}:`, error.message);
    }
  }
  
  console.log('\nExtraction complete. Your data is now local.');
}

extractPages();