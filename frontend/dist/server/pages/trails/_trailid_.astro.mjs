import { a2 as createComponent, ad as renderComponent, ai as renderScript, al as renderTemplate, aa as maybeRenderHead } from '../../chunks/astro/server_Usdhawli.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_C4HyKXgh.mjs';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const $$trailId = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Trail Detail", "data-astro-cid-oidpg4rk": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="panel" id="loading-state" data-astro-cid-oidpg4rk> <p class="muted" data-astro-cid-oidpg4rk>Loading trail...</p> </section> <section class="panel" id="trail-content" hidden data-astro-cid-oidpg4rk> <a href="/trails" class="back-link" data-astro-cid-oidpg4rk>Back to trails</a> <div class="trail-overview" data-astro-cid-oidpg4rk> <div class="trail-image-wrap" data-astro-cid-oidpg4rk> <picture id="trail-picture" class="trail-picture" hidden data-astro-cid-oidpg4rk> <source id="trail-image-large-source" media="(min-width: 768px)" srcset="" data-astro-cid-oidpg4rk> <img id="trail-image" src="" alt="Trail image" loading="lazy" data-astro-cid-oidpg4rk> </picture> </div> <div class="trail-text-wrap" data-astro-cid-oidpg4rk> <h1 id="trail-name" data-astro-cid-oidpg4rk></h1> <p class="meta" id="trail-location" data-astro-cid-oidpg4rk></p> <p class="meta" id="trail-stats" data-astro-cid-oidpg4rk></p> <p id="trail-description" data-astro-cid-oidpg4rk></p> <div class="trail-actions" id="trail-actions" hidden data-astro-cid-oidpg4rk> <button id="favorite-action-btn" class="action-btn" type="button" data-astro-cid-oidpg4rk></button> <p id="favorite-action-msg" class="action-msg" hidden data-astro-cid-oidpg4rk></p> </div> </div> </div> <h2 data-astro-cid-oidpg4rk>Trail Reviews</h2> <p id="review-auth-msg" class="muted" hidden data-astro-cid-oidpg4rk>
To see or post a review, you need to sign/log in.
</p> <section id="review-auth-content" hidden data-astro-cid-oidpg4rk> <div class="review-layout" data-astro-cid-oidpg4rk> <div class="review-editor" data-astro-cid-oidpg4rk> <div id="review-actions" class="review-actions" hidden data-astro-cid-oidpg4rk> <button id="post-review-btn" class="action-btn" type="button" hidden data-astro-cid-oidpg4rk>Post a Review</button> <button id="update-review-btn" class="action-btn" type="button" hidden data-astro-cid-oidpg4rk>Update Review</button> <button id="delete-review-btn" class="action-btn action-btn-danger" type="button" hidden data-astro-cid-oidpg4rk>
Delete Review
</button> </div> <p id="review-user-msg" class="action-msg" hidden data-astro-cid-oidpg4rk></p> <form id="review-form" class="review-form" hidden data-astro-cid-oidpg4rk> <label for="review-rating" data-astro-cid-oidpg4rk>Rating</label> <select id="review-rating" required data-astro-cid-oidpg4rk> <option value="5" data-astro-cid-oidpg4rk>5 - Excellent</option> <option value="4" data-astro-cid-oidpg4rk>4 - Good</option> <option value="3" data-astro-cid-oidpg4rk>3 - Okay</option> <option value="2" data-astro-cid-oidpg4rk>2 - Poor</option> <option value="1" data-astro-cid-oidpg4rk>1 - Bad</option> </select> <label for="review-comment" data-astro-cid-oidpg4rk>Comment</label> <textarea id="review-comment" rows="4" maxlength="2000" required placeholder="Share your experience on this trail" data-astro-cid-oidpg4rk></textarea> <button id="submit-review-btn" class="action-btn" type="submit" data-astro-cid-oidpg4rk>Submit Review</button> </form> </div> <div class="review-scroll-panel" data-astro-cid-oidpg4rk> <ul class="review-list" id="review-list" data-astro-cid-oidpg4rk></ul> <p id="no-reviews" hidden data-astro-cid-oidpg4rk>No reviews yet for this trail.</p> </div> </div> </section> </section> <section class="panel" id="error-state" hidden data-astro-cid-oidpg4rk> <a href="/trails" class="back-link" data-astro-cid-oidpg4rk>Back to trails</a> <p class="error" id="error-msg" data-astro-cid-oidpg4rk>Trail not found.</p> </section> ` })} ${renderScript($$result, "C:/Users/thoma/OneDrive/Documents/School/Full Stack Development/Bakeoff2/spec-kit-template-copilot-ps-v0.0.90/frontend/src/pages/trails/[trailId].astro?astro&type=script&index=0&lang.ts")} `;
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
