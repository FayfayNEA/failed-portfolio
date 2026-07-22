/** Session flag so home "show all" opens after visiting a hidden/archived project. */
export const GALLERY_SHOW_ALL_KEY = "gallery-product-design-show-all";

/** Routes whose home cards sit behind "show all". */
export const ARCHIVED_PRODUCT_DESIGN_PATHS = [
  "/nightterrors",
  "/iris-world",
  "/jahn",
  "/work/fither",
] as const;

export function isArchivedProductDesignPath(pathname: string): boolean {
  return ARCHIVED_PRODUCT_DESIGN_PATHS.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  );
}

export function markGalleryShowAll(): void {
  try {
    sessionStorage.setItem(GALLERY_SHOW_ALL_KEY, "1");
  } catch {
    /* private mode / blocked storage */
  }
}

export function clearGalleryShowAll(): void {
  try {
    sessionStorage.removeItem(GALLERY_SHOW_ALL_KEY);
  } catch {
    /* private mode / blocked storage */
  }
}

export function readGalleryShowAll(): boolean {
  try {
    return sessionStorage.getItem(GALLERY_SHOW_ALL_KEY) === "1";
  } catch {
    return false;
  }
}
