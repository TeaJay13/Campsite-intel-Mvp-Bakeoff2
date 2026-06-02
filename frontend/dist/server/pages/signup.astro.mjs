import { a2 as createComponent, ad as renderComponent, ai as renderScript, al as renderTemplate, aa as maybeRenderHead } from '../chunks/astro/server_Usdhawli.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C4HyKXgh.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Signup = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Sign Up", "data-astro-cid-sgjovbj7": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="panel auth-panel" data-astro-cid-sgjovbj7> <h1 data-astro-cid-sgjovbj7>Create an Account</h1> <p class="sub" data-astro-cid-sgjovbj7>Already have an account? <a href="/login" data-astro-cid-sgjovbj7>Log in</a></p> <form id="signup-form" data-astro-cid-sgjovbj7> <div class="field" data-astro-cid-sgjovbj7> <label for="displayName" data-astro-cid-sgjovbj7>Display Name</label> <input id="displayName" type="text" name="displayName" required minlength="2" maxlength="50" autocomplete="nickname" data-astro-cid-sgjovbj7> </div> <div class="field" data-astro-cid-sgjovbj7> <label for="email" data-astro-cid-sgjovbj7>Email</label> <input id="email" type="email" name="email" required autocomplete="email" data-astro-cid-sgjovbj7> </div> <div class="field" data-astro-cid-sgjovbj7> <label for="password" data-astro-cid-sgjovbj7>Password <span class="hint" data-astro-cid-sgjovbj7>(min 8 characters)</span></label> <input id="password" type="password" name="password" required minlength="8" autocomplete="new-password" data-astro-cid-sgjovbj7> </div> <p id="form-error" class="error" hidden data-astro-cid-sgjovbj7></p> <button type="submit" id="submit-btn" data-astro-cid-sgjovbj7>Sign Up</button> </form> </section> ` })} ${renderScript($$result, "C:/Users/thoma/OneDrive/Documents/School/Full Stack Development/Bakeoff2/spec-kit-template-copilot-ps-v0.0.90/frontend/src/pages/signup.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/thoma/OneDrive/Documents/School/Full Stack Development/Bakeoff2/spec-kit-template-copilot-ps-v0.0.90/frontend/src/pages/signup.astro", void 0);

const $$file = "C:/Users/thoma/OneDrive/Documents/School/Full Stack Development/Bakeoff2/spec-kit-template-copilot-ps-v0.0.90/frontend/src/pages/signup.astro";
const $$url = "/signup";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signup,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
