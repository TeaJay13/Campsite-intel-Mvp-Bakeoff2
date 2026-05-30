import { a2 as createComponent, ad as renderComponent, ai as renderScript, al as renderTemplate, aa as maybeRenderHead } from '../chunks/astro/server_Usdhawli.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CT3Xa8T5.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Favorites = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "My Favorites", "data-astro-cid-hy2k5nxk": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="panel" id="loading-state" data-astro-cid-hy2k5nxk> <p class="muted" data-astro-cid-hy2k5nxk>Loading…</p> </section> <section class="panel" id="favorites-content" hidden data-astro-cid-hy2k5nxk> <h1 data-astro-cid-hy2k5nxk>My Favorites</h1> <ul class="trail-list" id="favorites-list" data-astro-cid-hy2k5nxk></ul> <p class="empty-state" id="empty-state" hidden data-astro-cid-hy2k5nxk>
You have no favorites yet. <a href="/trails" data-astro-cid-hy2k5nxk>Browse trails</a> to add some.
</p> </section> ` })} ${renderScript($$result, "C:/Users/thoma/OneDrive/Documents/School/Full Stack Development/Bakeoff2/spec-kit-template-copilot-ps-v0.0.90/frontend/src/pages/favorites.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/thoma/OneDrive/Documents/School/Full Stack Development/Bakeoff2/spec-kit-template-copilot-ps-v0.0.90/frontend/src/pages/favorites.astro", void 0);

const $$file = "C:/Users/thoma/OneDrive/Documents/School/Full Stack Development/Bakeoff2/spec-kit-template-copilot-ps-v0.0.90/frontend/src/pages/favorites.astro";
const $$url = "/favorites";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Favorites,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
