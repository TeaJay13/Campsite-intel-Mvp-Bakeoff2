import { a2 as createComponent, ad as renderComponent, ai as renderScript, al as renderTemplate, aa as maybeRenderHead } from '../chunks/astro/server_Usdhawli.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C4HyKXgh.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Favorites = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "My Favorites" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="panel" id="loading-state"> <p class="muted">Loading…</p> </section> <section class="panel" id="favorites-content" hidden> <h1>My Favorites</h1> <p class="subhead">Your saved trails in one place.</p> <ul class="trail-list" id="favorites-list"></ul> <p class="status-msg" id="status-msg" hidden></p> <p class="empty-state" id="empty-state" hidden>
You have no favorites yet. <a href="/trails">Browse trails</a> to add some.
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
