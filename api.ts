/**
 * Admin client for matchids-backend. Same idea as matchids-web's
 * src/lib/api.ts — this is the only place this app touches the network.
 * The admin token is attached automatically once a session exists.
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem("matchids_admin_token");
}

export function setToken(token: string) {
  window.localStorage.setItem("matchids_admin_token", token);
}

export function clearToken() {
  window.localStorage.removeItem("matchids_admin_token");
}

async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const token = getToken();
  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...init?.headers,
    },
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error ?? `Request failed with status ${res.status}`);
  }

  return res.json() as Promise<T>;
}

export const api = {
  get: <T>(path: string) => apiFetch<T>(path),
  post: <T>(path: string, body: unknown) => apiFetch<T>(path, { method: "POST", body: JSON.stringify(body) }),
};
