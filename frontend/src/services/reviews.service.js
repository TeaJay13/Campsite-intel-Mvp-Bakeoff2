import { apiRequest } from "./api-client.js";

export async function getTrailReviews(trailId) {
  return apiRequest(`/api/v1/reviews/trail/${trailId}`);
}

export async function createTrailReview(trailId, payload) {
  return apiRequest(`/api/v1/reviews/trail/${trailId}`, {
    method: "POST",
    body: JSON.stringify(payload)
  });
}

export async function updateTrailReview(trailId, payload) {
  return apiRequest(`/api/v1/reviews/trail/${trailId}`, {
    method: "PATCH",
    body: JSON.stringify(payload)
  });
}

export async function deleteTrailReview(trailId) {
  return apiRequest(`/api/v1/reviews/trail/${trailId}`, {
    method: "DELETE"
  });
}
