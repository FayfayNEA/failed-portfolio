/**
 * Whether fixed home chrome (designer bio, nav subtitle) should show.
 * Hidden while scrolling through the product design gallery; returns for retro computer.
 */
export function shouldShowHomeAside(): boolean {
  const section = document.getElementById("product-design-section");
  if (!section) return true;

  const breadcrumb = document.getElementById("product-design");
  const retro = document.getElementById("retro-computer");
  const vh = window.innerHeight;

  const crumbTop = breadcrumb?.getBoundingClientRect().top ?? section.getBoundingClientRect().top;
  const sectionBottom = section.getBoundingClientRect().bottom;
  const retroTop = retro?.getBoundingClientRect().top ?? Infinity;

  const enteredProductDesign = crumbTop < vh - 96;
  const leftProductDesign = sectionBottom < 120;
  const inRetroComputer =
    retro != null && retroTop < vh * 0.45 && sectionBottom < 200;

  return !enteredProductDesign || leftProductDesign || inRetroComputer;
}
