"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { api, setToken } from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const form = new FormData(e.currentTarget);
    try {
      const { token } = await api.post<{ token: string }>("/api/auth/login", {
        email: form.get("email"),
        password: form.get("password"),
      });
      setToken(token);
      router.push("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign in failed.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
        <h1 className="font-display text-2xl font-bold text-ink">Matchids Admin</h1>
        <p className="mt-1 text-sm text-ink/60">Sign in with an admin account.</p>
        <div className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-ink">Email</label>
            <input id="email" name="email" type="email" required className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 text-sm" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-ink">Password</label>
            <input id="password" name="password" type="password" required className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 text-sm" />
          </div>
        </div>
        {error && <p className="mt-4 text-sm text-coral-dark">{error}</p>}
        <button type="submit" className="mt-6 w-full rounded-full bg-ink py-3 text-sm font-semibold text-cream hover:bg-ink/90">
          Sign in
        </button>
        <p className="mt-4 text-xs text-ink/40">
          Only accounts with the ADMIN role can access this dashboard —
          matchids-backend rejects everyone else at the API level.
        </p>
      </form>
    </div>
  );
}
