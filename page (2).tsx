"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

interface Overview {
  bookCount: number;
  userCount: number;
  pendingDonations: number;
  paidOrders: number;
}

export default function OverviewPage() {
  const [data, setData] = useState<Overview | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .get<Overview>("/api/admin/overview")
      .then(setData)
      .catch((err) => setError(err instanceof Error ? err.message : "Failed to load."));
  }, []);

  const cards = data
    ? [
        { label: "Books", value: data.bookCount },
        { label: "Users", value: data.userCount },
        { label: "Pending donations", value: data.pendingDonations },
        { label: "Paid orders", value: data.paidOrders },
      ]
    : [];

  return (
    <div className="p-8">
      <h1 className="font-display text-2xl font-bold text-ink">Overview</h1>
      <p className="mt-1 text-sm text-ink/60">
        Numbers below come straight from matchids-backend — nothing here is estimated.
      </p>

      {error && (
        <p className="mt-6 rounded-xl bg-coral/10 p-4 text-sm text-coral-dark">
          Couldn&apos;t reach matchids-backend: {error}. Sign in again, or make sure
          the API is running.
        </p>
      )}

      {data && (
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {cards.map((c) => (
            <div key={c.label} className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
              <p className="text-3xl font-bold text-ink">{c.value}</p>
              <p className="mt-1 text-sm text-ink/60">{c.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
