import { apiRequest } from "./api-client.js";

export async function register({ email, password, displayName }) {
  const data = await apiRequest("/api/v1/auth/register", {
    method: "POST",
    body: JSON.stringify({ email, password, displayName })
  });
  localStorage.setItem("accessToken", data.token);
  return data;
}

export async function login({ email, password }) {
  const data = await apiRequest("/api/v1/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password })
  });
  localStorage.setItem("accessToken", data.token);
  return data;
}

export async function logout() {
  await apiRequest("/api/v1/auth/logout", { method: "POST" });
  localStorage.removeItem("accessToken");
}

export async function getMe() {
  return apiRequest("/api/v1/auth/me");
}
