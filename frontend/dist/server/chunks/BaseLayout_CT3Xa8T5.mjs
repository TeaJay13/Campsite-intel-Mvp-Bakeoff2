import { a2 as createComponent, aa as maybeRenderHead, al as renderTemplate, af as renderHead, ad as renderComponent, aj as renderSlot, a1 as createAstro } from './astro/server_Usdhawli.mjs';
import 'piccolore';
import 'clsx';
/* empty css                             */

const $$NavBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="nav" data-astro-cid-ymhdp2rl> <a href="/" class="brand" data-astro-cid-ymhdp2rl>Trail App</a> <ul class="nav-links" data-astro-cid-ymhdp2rl> <li data-astro-cid-ymhdp2rl><a href="/" class="nav-btn" data-astro-cid-ymhdp2rl>Home</a></li> <li data-astro-cid-ymhdp2rl><a href="/trails" class="nav-btn" data-astro-cid-ymhdp2rl>Trails</a></li> <li data-astro-cid-ymhdp2rl><a href="/favorites" class="nav-btn" data-astro-cid-ymhdp2rl>Favorites</a></li> <li data-astro-cid-ymhdp2rl><a href="/login" class="nav-btn nav-btn-primary" data-astro-cid-ymhdp2rl>Log in</a></li> </ul> </nav> `;
}, "C:/Users/thoma/OneDrive/Documents/School/Full Stack Development/Bakeoff2/spec-kit-template-copilot-ps-v0.0.90/frontend/src/components/NavBar.astro", void 0);

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title = "Hiking Trail MVP" } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-37fxchfa> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title>${renderHead()}</head> <body data-astro-cid-37fxchfa> <picture class="hero-image" data-astro-cid-37fxchfa> <source media="(max-width: 767px)" srcset="/images/Sunset-Hero-Sml.webp" data-astro-cid-37fxchfa> <source media="(min-width: 768px)" srcset="/images/Sunset-Hero.webp" data-astro-cid-37fxchfa> <img src="/images/Sunset-Hero-Sml.webp" alt="Trail hero" data-astro-cid-37fxchfa> </picture> ${renderComponent($$result, "NavBar", $$NavBar, { "data-astro-cid-37fxchfa": true })} <main data-astro-cid-37fxchfa> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/Users/thoma/OneDrive/Documents/School/Full Stack Development/Bakeoff2/spec-kit-template-copilot-ps-v0.0.90/frontend/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
