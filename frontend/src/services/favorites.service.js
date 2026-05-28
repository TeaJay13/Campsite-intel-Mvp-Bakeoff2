import { apiRequest } from "./api-client.js";

export async function getFavorites() {
  return apiRequest("/api/v1/favorites");
}

export async function addFavorite(trailId) {
  return apiRequest(`/api/v1/favorites/${trailId}`, { method: "POST" });
}

export async function removeFavorite(trailId) {
  return apiRequest(`/api/v1/favorites/${trailId}`, { method: "DELETE" });
}
