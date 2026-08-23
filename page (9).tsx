"use client";

/**
 * GET /api/donations/campaigns returns active campaigns; create/edit endpoints are an integration point.
 */
export default function CampaignsPage() {
  return (
    <div className="p-8">
      <h1 className="font-display text-2xl font-bold text-ink">Donation Campaigns</h1>
      <p className="mt-2 max-w-xl text-sm text-ink/60">GET /api/donations/campaigns returns active campaigns; create/edit endpoints are an integration point.</p>
    </div>
  );
}
