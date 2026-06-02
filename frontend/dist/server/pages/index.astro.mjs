import { a2 as createComponent, ad as renderComponent, al as renderTemplate, aa as maybeRenderHead } from '../chunks/astro/server_Usdhawli.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C4HyKXgh.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Trail App", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="panel hero" data-astro-cid-j7pv25f6> <p class="eyebrow" data-astro-cid-j7pv25f6>Discover the Outdoors</p> <h1 data-astro-cid-j7pv25f6>Find your next trail</h1> <p class="lead" data-astro-cid-j7pv25f6>Browse routes, check conditions, and read recent reviews.</p> <div class="hero-actions" data-astro-cid-j7pv25f6> <a href="/trails" class="btn btn-primary" data-astro-cid-j7pv25f6>Browse Trails</a> <a href="/favorites" class="btn btn-ghost" data-astro-cid-j7pv25f6>My Favorites</a> </div> <div class="quick-start" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Quick Start</h2> <div class="quick-buttons" data-astro-cid-j7pv25f6> <a href="/trails?difficulty=easy" class="btn btn-ghost" data-astro-cid-j7pv25f6>Easy Trails</a> <a href="/trails?difficulty=moderate" class="btn btn-ghost" data-astro-cid-j7pv25f6>Moderate Trails</a> <a href="/trails?difficulty=hard" class="btn btn-ghost" data-astro-cid-j7pv25f6>Hard Trails</a> </div> </div> </section> ` })} `;
}, "C:/Users/thoma/OneDrive/Documents/School/Full Stack Development/Bakeoff2/spec-kit-template-copilot-ps-v0.0.90/frontend/src/pages/index.astro", void 0);

const $$file = "C:/Users/thoma/OneDrive/Documents/School/Full Stack Development/Bakeoff2/spec-kit-template-copilot-ps-v0.0.90/frontend/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
