const HOSTS = new Set(["www.failennaselta.com", "failennaselta.com"]);

/**
 * Point scraped Framer links at this Next.js site where paths match.
 */
export function rewriteSiteHref(href: string | undefined): string | undefined {
  if (!href || href.startsWith("/") || href.startsWith("#") || href.startsWith("mailto:")) {
    return href;
  }
  try {
    const url = new URL(href);
    if (!HOSTS.has(url.hostname)) return href;
    const next = url.pathname + url.search + url.hash;
    return next.length ? next : "/";
  } catch {
    return href;
  }
}
