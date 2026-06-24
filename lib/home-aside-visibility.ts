/**
 * Whether fixed home chrome (designer bio, nav subtitle) should show.
 * Shown at the top of the page only; hidden once the product design gallery is
 * entered and stays hidden through the gallery and the retro computer section.
 */
export function shouldShowHomeAside(): boolean {
  const section = document.getElementById("product-design-section");
  if (!section) return true;

  const breadcrumb = document.getElementById("product-design");
  const vh = window.innerHeight;

  const crumbTop = breadcrumb?.getBoundingClientRect().top ?? section.getBoundingClientRect().top;

  const enteredProductDesign = crumbTop < vh * 0.3;

  return !enteredProductDesign;
}
