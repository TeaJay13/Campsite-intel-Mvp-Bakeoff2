const API_BASE_URL =
  import.meta.env.PUBLIC_API_BASE_URL ?? "http://localhost:4000";

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

export async function apiRequest(path, options = {}) {
  const token =
    typeof localStorage !== "undefined" ? localStorage.getItem("accessToken") : null;
  const hasBody = options.body !== undefined && options.body !== null;

  const response = await fetch(`${API_BASE_URL}${path}`, {
    credentials: "include",
    headers: {
      ...(hasBody ? { "Content-Type": "application/json" } : {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers ?? {})
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

export { API_BASE_URL };
