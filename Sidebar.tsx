"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clearToken } from "@/lib/api";

const sections = [
  { href: "/", label: "Overview" },
  { href: "/books", label: "Books" },
  { href: "/categories", label: "Categories" },
  { href: "/kids-art", label: "Kids Art" },
  { href: "/users", label: "Users" },
  { href: "/orders", label: "Orders" },
  { href: "/payments", label: "Payments" },
  { href: "/donations", label: "Donations" },
  { href: "/campaigns", label: "Donation Campaigns" },
  { href: "/featured", label: "Featured Content" },
  { href: "/settings", label: "Platform Settings" },
];

export function Sidebar() {
  const pathname = usePathname();
  if (pathname === "/login") return null;

  return (
    <aside className="flex w-64 flex-col border-r border-black/5 bg-white px-4 py-6">
      <p className="px-2 font-display text-lg font-bold text-ink">Matchids Admin</p>
      <nav className="mt-6 flex flex-1 flex-col gap-1" aria-label="Admin">
        {sections.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
              pathname === s.href ? "bg-violet/10 text-violet-dark" : "text-ink/70 hover:bg-black/5"
            }`}
          >
            {s.label}
          </Link>
        ))}
      </nav>
      <button
        onClick={() => {
          clearToken();
          window.location.href = "/login";
        }}
        className="rounded-lg px-3 py-2 text-left text-sm font-semibold text-ink/50 hover:bg-black/5"
      >
        Sign out
      </button>
    </aside>
  );
}
