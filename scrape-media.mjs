/**
 * scrape-media.mjs
 *
 * Re-scrapes every portfolio page with HTML format to extract:
 *   - Videos (Framer assets, YouTube, Vimeo, Google Drive)
 *   - Carousel / gallery image groups (ordered as they appear on screen)
 *
 * Patches the existing cleaned MDX files in src/content/ with what it finds.
 * Run:  node scrape-media.mjs
 */

import FirecrawlApp from '@mendable/firecrawl-js';
import fs from 'fs/promises';
import path from 'path';
import { load } from 'cheerio';
import 'dotenv/config';

const app = new FirecrawlApp({ apiKey: process.env.FIRECRAWL_API_KEY });

const PAGES = [
  { url: 'https://www.failennaselta.com/buddy',        slug: 'buddy' },
  { url: 'https://www.failennaselta.com/eidolon',      slug: 'eidolon' },
  { url: 'https://www.failennaselta.com/etrade',       slug: 'etrade' },
  { url: 'https://www.failennaselta.com/jahn',         slug: 'jahn' },
  { url: 'https://www.failennaselta.com/nightterrors', slug: 'nightterrors' },
  { url: 'https://www.failennaselta.com/lighthouse',   slug: 'lighthouse' },
  { url: 'https://www.failennaselta.com/spiral',       slug: 'spiral' },
  { url: 'https://www.failennaselta.com/cool',         slug: 'cool' },
  { url: 'https://www.failennaselta.com/venice',       slug: 'venice' },
  { url: 'https://www.failennaselta.com/the-other',    slug: 'the-other' },
  { url: 'https://www.failennaselta.com/tiny-home',    slug: 'tiny-home' },
  { url: 'https://www.failennaselta.com/mindful-path', slug: 'mindful-path' },
  { url: 'https://www.failennaselta.com/buddhist',     slug: 'buddhist' },
  { url: 'https://www.failennaselta.com/villain-home', slug: 'villain-home' },
  { url: 'https://www.failennaselta.com/vagabond',     slug: 'vagabond' },
  { url: 'https://www.failennaselta.com/bonemachine',  slug: 'bonemachine' },
];

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content');

// ---------------------------------------------------------------------------
// Extraction helpers
// ---------------------------------------------------------------------------

/** Extract all video sources from parsed HTML. Returns array of { type, src, title? } */
function extractVideos($) {
  const videos = [];

  // 1. Native <video> elements
  $('video').each((_, el) => {
    const src = $(el).attr('src');
    if (src) videos.push({ type: 'video', src });
    $(el).find('source').each((__, s) => {
      const ssrc = $(s).attr('src');
      if (ssrc) videos.push({ type: 'video', src: ssrc });
    });
  });

  // 2. Framer asset videos referenced in src/poster attributes or data attrs
  $('[src]').each((_, el) => {
    const src = $(el).attr('src') ?? '';
    if (/framerusercontent\.com\/assets\/.+\.(mp4|webm|mov)/i.test(src)) {
      videos.push({ type: 'video', src });
    }
  });

  // 3. iframes — YouTube / Vimeo / Google Drive
  $('iframe').each((_, el) => {
    const src = $(el).attr('src') ?? '';
    if (/youtube\.com\/embed\/|youtu\.be\//i.test(src)) {
      videos.push({ type: 'youtube', src });
    } else if (/player\.vimeo\.com\/video\//i.test(src)) {
      videos.push({ type: 'vimeo', src });
    } else if (/drive\.google\.com\/file\//i.test(src)) {
      videos.push({ type: 'gdrive', src });
    } else if (/loom\.com\/embed\//i.test(src)) {
      videos.push({ type: 'loom', src });
    }
  });

  // 4. Anchor links pointing to video files or Framer asset videos
  $('a[href]').each((_, el) => {
    const href = $(el).attr('href') ?? '';
    if (/framerusercontent\.com\/assets\/.+\.(mp4|webm|mov)/i.test(href)) {
      videos.push({ type: 'video', src: href });
    }
  });

  // Deduplicate by src
  const seen = new Set();
  return videos.filter(v => {
    if (seen.has(v.src)) return false;
    seen.add(v.src);
    return true;
  });
}

/**
 * Extract carousel / gallery groups from Framer HTML.
 *
 * Strategy: Walk every div/section/ul. Collect framerusercontent images at
 * up to 3 levels deep. Any container with ≥2 unique Framer images that aren't
 * already fully covered by a larger ancestor group = a carousel candidate.
 */
function extractCarousels($) {
  const candidates = [];

  $('div, section, ul, ol').each((_, container) => {
    // Collect all framerusercontent images up to 3 levels deep
    const imgs = [];
    const seen = new Set();

    function collect(el, depth) {
      if (depth > 3) return;
      $(el).children().each((__, child) => {
        if (child.tagName === 'img') {
          const src = $(child).attr('src') ?? '';
          if (/framerusercontent\.com/i.test(src) && !seen.has(src)) {
            seen.add(src);
            imgs.push(src);
          }
        } else {
          // Check if child itself is an img wrapped in a link or div
          const childImg = $(child).find('img').first();
          if (childImg.length) {
            const src = childImg.attr('src') ?? '';
            if (/framerusercontent\.com/i.test(src) && !seen.has(src)) {
              seen.add(src);
              imgs.push(src);
            }
          }
          collect(child, depth + 1);
        }
      });
    }

    collect(container, 0);

    // Filter out SVG icon images (decorative arrows, pills, etc.)
    const realImgs = imgs.filter(src => !/\.svg(\?|$)/i.test(src));

    if (realImgs.length >= 2) {
      candidates.push(realImgs);
    }
  });

  if (candidates.length === 0) return [];

  // Sort largest first, then deduplicate — keep a group only if it isn't
  // fully contained within an already-kept larger group.
  candidates.sort((a, b) => b.length - a.length);

  const kept = [];
  for (const group of candidates) {
    const groupSet = new Set(group);
    const coveredByKept = kept.some(larger =>
      group.every(img => new Set(larger).has(img))
    );
    if (!coveredByKept) kept.push(group);
  }

  // Filter out the "whole page" group (anything with > 30 images is likely
  // the full page image list, not a specific carousel)
  return kept.filter(g => g.length <= 30);
}

// ---------------------------------------------------------------------------
// MDX patching
// ---------------------------------------------------------------------------

/** Render a video as raw HTML (works in next-mdx-remote format:'md' mode via rehype) */
function videoToMdx(video) {
  const wrapStyle = 'position:relative;width:100%;padding-bottom:56.25%;margin:2rem 0;border-radius:0.75rem;overflow:hidden;box-shadow:0 4px 24px -6px rgba(0,0,0,0.15)';
  const iframeStyle = 'position:absolute;top:0;left:0;width:100%;height:100%;border:0';

  if (video.type === 'video') {
    return `<video controls playsinline style="width:100%;border-radius:0.75rem;margin:1.5rem 0;box-shadow:0 4px 24px -6px rgba(0,0,0,0.15)" src="${video.src}"></video>`;
  }
  if (video.type === 'youtube' || video.type === 'vimeo' || video.type === 'loom') {
    return `<div style="${wrapStyle}"><iframe src="${video.src}" style="${iframeStyle}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`;
  }
  if (video.type === 'gdrive') {
    const embedSrc = video.src.replace('/view', '/preview');
    return `<div style="${wrapStyle}"><iframe src="${embedSrc}" style="${iframeStyle}" allow="autoplay" allowfullscreen></iframe></div>`;
  }
  return '';
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Render a carousel as a markdown image list (the gallery renderer picks it up) */
function carouselToMdx(images) {
  return images.map(src => `- ![](${src})`).join('\n');
}

/**
 * Patch an MDX string:
 * - Append video blocks before the final `</article>` / at end of body
 * - Append any NEW carousel groups that aren't already represented
 */
function patchMdx(original, videos, carousels) {
  let body = original;

  // --- Videos ---
  const videoBlocks = videos.map(videoToMdx).filter(Boolean);
  if (videoBlocks.length > 0) {
    const section = `\n\n## Video\n\n${videoBlocks.join('\n\n')}`;
    // Only append if no video section already exists
    if (!/^##\s+video/im.test(body)) {
      body = body.trimEnd() + section + '\n';
    }
  }

  // --- Carousels ---
  // Take the largest carousel found (most likely the main project gallery)
  // and replace any existing loose images that match with a proper grouped list.
  if (carousels.length > 0) {
    const main = carousels[0]; // already sorted largest-first

    // Check if these images are already in the file as a list block
    const alreadyGrouped = main.length >= 2 &&
      body.includes(`- ![](${main[0]})`) &&
      body.includes(`- ![](${main[1]})`);

    if (!alreadyGrouped) {
      // Remove any loose instances of these images scattered in the body,
      // then append them as a gallery block.
      let cleaned = body;
      for (const src of main) {
        // Remove standalone image lines (not already in a list)
        cleaned = cleaned.replace(new RegExp(`^!\\[\\]\\(${escapeRegex(src)}[^)]*\\)\\s*$`, 'gm'), '');
      }
      cleaned = cleaned.replace(/\n{3,}/g, '\n\n');

      const galleryBlock = `\n\n## Gallery\n\n${carouselToMdx(main)}\n`;
      body = cleaned.trimEnd() + galleryBlock;
    }
  }

  return body;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function run() {
  console.log(`\nScraping ${PAGES.length} pages for videos and carousels...\n`);

  for (const { url, slug } of PAGES) {
    try {
      console.log(`⏳  ${slug}…`);

      const result = await app.scrape(url, { formats: ['html'] });

      if (!result?.html) {
        console.warn(`   ⚠️  No HTML returned — skipping`);
        continue;
      }

      const $ = load(result.html);
      const videos = extractVideos($);
      const carousels = extractCarousels($);

      console.log(`   🎬  ${videos.length} video(s)  📸  ${carousels.length} carousel(s)`);

      if (videos.length === 0 && carousels.length === 0) continue;

      // Read existing MDX
      const mdxPath = path.join(CONTENT_DIR, `${slug}.mdx`);
      let mdxContent;
      try {
        mdxContent = await fs.readFile(mdxPath, 'utf-8');
      } catch {
        console.warn(`   ⚠️  ${slug}.mdx not found — skipping`);
        continue;
      }

      const patched = patchMdx(mdxContent, videos, carousels);

      if (patched === mdxContent) {
        console.log(`   ✅  No new media to add`);
        continue;
      }

      await fs.writeFile(mdxPath, patched);
      console.log(`   ✅  Patched ${slug}.mdx`);

    } catch (err) {
      console.error(`   ❌  ${slug}: ${err.message}`);
    }
  }

  console.log('\nDone.\n');
}

run();
