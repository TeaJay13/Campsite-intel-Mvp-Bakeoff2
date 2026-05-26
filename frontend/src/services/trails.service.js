import { apiRequest } from "./api-client.js";

export async function fetchTrails({ q = "", page = 1, limit = 20 } = {}) {
  const params = new URLSearchParams();
  if (q) {
    params.set("q", q);
  }
  params.set("page", String(page));
  params.set("limit", String(limit));

  const query = params.toString();
  return apiRequest(`/api/v1/trails${query ? `?${query}` : ""}`);
}

export async function fetchTrailById(trailId) {
  return apiRequest(`/api/v1/trails/${trailId}`);
}
