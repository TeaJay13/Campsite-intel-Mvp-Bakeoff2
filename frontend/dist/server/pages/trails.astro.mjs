import { a2 as createComponent, ad as renderComponent, al as renderTemplate, a1 as createAstro, aa as maybeRenderHead, _ as addAttribute } from '../chunks/astro/server_Usdhawli.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C4HyKXgh.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const API_BASE_URL = "http://localhost:4000";
async function parseJsonSafe(response) {
  const text = await response.text();
  if (!text) {
    return null;
  }
  try {
    return JSON.parse(text);
  } catch {
    return { message: text };
  }
}
async function apiRequest(path, options = {}) {
  const token = typeof localStorage !== "undefined" ? localStorage.getItem("accessToken") : null;
  const hasBody = options.body !== void 0 && options.body !== null;
  const response = await fetch(`${API_BASE_URL}${path}`, {
    credentials: "include",
    headers: {
      ...hasBody ? { "Content-Type": "application/json" } : {},
      ...token ? { Authorization: `Bearer ${token}` } : {},
      ...options.headers ?? {}
    },
    ...options
  });
  const payload = await parseJsonSafe(response);
  if (!response.ok) {
    const error = new Error(payload?.message ?? "Request failed");
    error.status = response.status;
    error.code = payload?.error;
    error.details = payload?.details;
    throw error;
  }
  return payload;
}

async function fetchTrails({ q = "", difficulty = "", page = 1, limit = 20 } = {}) {
  const params = new URLSearchParams();
  if (q) {
    params.set("q", q);
  }
  if (difficulty) {
    params.set("difficulty", difficulty);
  }
  params.set("page", String(page));
  params.set("limit", String(limit));

  const query = params.toString();
  return apiRequest(`/api/v1/trails${query ? `?${query}` : ""}`);
}

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const searchQuery = Astro2.url.searchParams.get("q") ?? "";
  const selectedDifficulty = Astro2.url.searchParams.get("difficulty") ?? "";
  let data = { items: [], pagination: { page: 1, totalPages: 1, total: 0 } };
  let loadError = "";
  try {
    data = await fetchTrails({
      q: searchQuery,
      difficulty: selectedDifficulty,
      page: 1,
      limit: 20
    });
  } catch (error) {
    loadError = error.message ?? "Failed to load trails";
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Trails", "data-astro-cid-spah2gfa": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="panel" data-astro-cid-spah2gfa> <h1 data-astro-cid-spah2gfa>Browse Trails</h1> <form method="get" action="/trails" class="search-form" data-astro-cid-spah2gfa> <label for="q" data-astro-cid-spah2gfa>Search by name or location</label> <div class="field-row" data-astro-cid-spah2gfa> <input id="q" name="q"${addAttribute(searchQuery, "value")} placeholder="Try Pine or Cedar" data-astro-cid-spah2gfa> <select id="difficulty" name="difficulty" aria-label="Filter by difficulty" data-astro-cid-spah2gfa> <option value="" data-astro-cid-spah2gfa>All difficulties</option> <option value="easy"${addAttribute(selectedDifficulty === "easy", "selected")} data-astro-cid-spah2gfa>Easy</option> <option value="moderate"${addAttribute(selectedDifficulty === "moderate", "selected")} data-astro-cid-spah2gfa>Moderate</option> <option value="hard"${addAttribute(selectedDifficulty === "hard", "selected")} data-astro-cid-spah2gfa>Hard</option> </select> <button type="submit" data-astro-cid-spah2gfa>Search</button> </div> </form> ${loadError ? renderTemplate`<p class="error" data-astro-cid-spah2gfa>${loadError}</p>` : data.items.length === 0 ? renderTemplate`<div class="empty-state" data-astro-cid-spah2gfa> <p data-astro-cid-spah2gfa>No trails matched your filters.</p> <p data-astro-cid-spah2gfa>Try another search term or difficulty.</p> </div>` : renderTemplate`<ul class="trail-list" data-astro-cid-spah2gfa> ${data.items.map((trail) => renderTemplate`<li data-astro-cid-spah2gfa> <a${addAttribute(`/trails/${trail._id}`, "href")} data-astro-cid-spah2gfa> <h2 data-astro-cid-spah2gfa>${trail.name}</h2> <p data-astro-cid-spah2gfa>${trail.location}</p> <p data-astro-cid-spah2gfa> ${trail.difficulty} · ${trail.distanceKm} km · +${trail.elevationGainM} m
</p> </a> </li>`)} </ul>`} </section> ` })} `;
}, "C:/Users/thoma/OneDrive/Documents/School/Full Stack Development/Bakeoff2/spec-kit-template-copilot-ps-v0.0.90/frontend/src/pages/trails/index.astro", void 0);

const $$file = "C:/Users/thoma/OneDrive/Documents/School/Full Stack Development/Bakeoff2/spec-kit-template-copilot-ps-v0.0.90/frontend/src/pages/trails/index.astro";
const $$url = "/trails";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
