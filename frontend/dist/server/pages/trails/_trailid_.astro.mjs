import { a2 as createComponent, ad as renderComponent, ai as renderScript, al as renderTemplate, aa as maybeRenderHead } from '../../chunks/astro/server_Usdhawli.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CT3Xa8T5.mjs';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const $$trailId = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Trail Detail", "data-astro-cid-oidpg4rk": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="panel" id="loading-state" data-astro-cid-oidpg4rk> <p class="muted" data-astro-cid-oidpg4rk>Loading trail…</p> </section> <section class="panel" id="trail-content" hidden data-astro-cid-oidpg4rk> <a href="/trails" class="back-link" data-astro-cid-oidpg4rk>Back to trails</a> <h1 id="trail-name" data-astro-cid-oidpg4rk></h1> <p class="meta" id="trail-location" data-astro-cid-oidpg4rk></p> <p class="meta" id="trail-stats" data-astro-cid-oidpg4rk></p> <p id="trail-description" data-astro-cid-oidpg4rk></p> <h2 data-astro-cid-oidpg4rk>Recent Reviews</h2> <ul class="review-list" id="review-list" data-astro-cid-oidpg4rk></ul> <p id="no-reviews" hidden data-astro-cid-oidpg4rk>No reviews yet for this trail.</p> </section> <section class="panel" id="error-state" hidden data-astro-cid-oidpg4rk> <a href="/trails" class="back-link" data-astro-cid-oidpg4rk>Back to trails</a> <p class="error" id="error-msg" data-astro-cid-oidpg4rk>Trail not found.</p> </section> ` })} ${renderScript($$result, "C:/Users/thoma/OneDrive/Documents/School/Full Stack Development/Bakeoff2/spec-kit-template-copilot-ps-v0.0.90/frontend/src/pages/trails/[trailId].astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/thoma/OneDrive/Documents/School/Full Stack Development/Bakeoff2/spec-kit-template-copilot-ps-v0.0.90/frontend/src/pages/trails/[trailId].astro", void 0);

const $$file = "C:/Users/thoma/OneDrive/Documents/School/Full Stack Development/Bakeoff2/spec-kit-template-copilot-ps-v0.0.90/frontend/src/pages/trails/[trailId].astro";
const $$url = "/trails/[trailId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$trailId,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
