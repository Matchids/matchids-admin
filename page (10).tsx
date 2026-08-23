"use client";

/**
 * GET /api/books exists in matchids-backend today; POST/PUT/DELETE for admin management are integration points to add there.
 */
export default function BooksPage() {
  return (
    <div className="p-8">
      <h1 className="font-display text-2xl font-bold text-ink">Books</h1>
      <p className="mt-2 max-w-xl text-sm text-ink/60">GET /api/books exists in matchids-backend today; POST/PUT/DELETE for admin management are integration points to add there.</p>
    </div>
  );
}
