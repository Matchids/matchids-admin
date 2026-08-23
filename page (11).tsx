"use client";

/**
 * No featured-content model exists yet — decide where that flag lives (likely a boolean on Book/Artwork) before building this screen.
 */
export default function FeaturedPage() {
  return (
    <div className="p-8">
      <h1 className="font-display text-2xl font-bold text-ink">Featured Content</h1>
      <p className="mt-2 max-w-xl text-sm text-ink/60">No featured-content model exists yet — decide where that flag lives (likely a boolean on Book/Artwork) before building this screen.</p>
    </div>
  );
}
