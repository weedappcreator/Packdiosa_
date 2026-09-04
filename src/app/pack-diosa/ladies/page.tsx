"use client";

import Link from "next/link";
import { useState } from "react";
import { useScrollReveal } from "../hooks";
import { ProductCard } from "../components";

type PriceFilter = "all" | "under200" | "200to350" | "above350";

const ladiesCategories = [
  { name: "#1 Current", price: 300, priceLabel: "$300", badge: "Current Season", tier: "200to350" as const },
  { name: "#1 Juvenile", price: 350, priceLabel: "$350", badge: "Junior Sizes", tier: "200to350" as const },
  { name: "Tops", price: 150, priceLabel: "$150", badge: "Tops", tier: "under200" as const },
  { name: "Shorts", price: 150, priceLabel: "$150", badge: "Shorts", tier: "under200" as const },
  { name: "Shoes #1", price: 1.5, priceLabel: "$1.50/LB", badge: "By Weight", tier: "under200" as const },
  { name: "Dress Fashion", price: 300, priceLabel: "$300", badge: "Fashion", tier: "200to350" as const },
  { name: "Dress Cotton", price: 200, priceLabel: "$200", badge: "Cotton", tier: "200to350" as const },
  { name: "Mini Dress", price: 200, priceLabel: "$200", badge: "Mini", tier: "200to350" as const },
  { name: "Bra #1", price: 300, priceLabel: "$300", badge: "Premium", tier: "200to350" as const },
  { name: "Bra #2", price: 150, priceLabel: "$150", badge: "Standard", tier: "under200" as const },
  { name: "Jumpsuits", price: 450, priceLabel: "$450", badge: "Jumpsuits", tier: "above350" as const },
  { name: "Jeans", price: 280, priceLabel: "$280", badge: "Denim", tier: "200to350" as const },
];

const filters: { key: PriceFilter; label: string }[] = [
  { key: "all", label: "All (12)" },
  { key: "under200", label: "Under $200" },
  { key: "200to350", label: "$200 – $350" },
  { key: "above350", label: "$350+" },
];

export default function LadiesPage() {
  const [filter, setFilter] = useState<PriceFilter>("all");
  const hero = useScrollReveal();
  const filtered = filter === "all" ? ladiesCategories : ladiesCategories.filter((c) => c.tier === filter);

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-[#1a2b3c]">
        <div className="absolute inset-0"><img src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1600&q=80" alt="" className="h-full w-full object-cover opacity-20" /></div>
        <div ref={hero.ref} style={hero.style} className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
          <Link href="/pack-diosa" className="mb-6 inline-flex items-center gap-2 text-xs font-medium text-white/50 hover:text-white/80">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Back to catalog
          </Link>
          <h1 className="font-[family-name:var(--font-barlow)] text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Ladies Collection</h1>
          <p className="mt-4 max-w-lg text-lg text-white/50">Our largest selection — 12 sub-categories from $150 to $450.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80">12 Categories</span>
            <span className="rounded-full bg-[#c8aa6e]/20 px-4 py-1.5 text-xs font-medium text-[#c8aa6e]">Most Popular</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="mb-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button key={f.key} onClick={() => setFilter(f.key)} className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all duration-200 ${filter === f.key ? "bg-[#1a2b3c] text-white shadow-md" : "border border-gray-200 bg-white text-gray-500 hover:border-[#1a2b3c]/30 hover:text-[#1a2b3c]"}`}>{f.label}</button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((cat, i) => (
            <ProductCard key={cat.name} delay={i * 60} className="group overflow-hidden rounded-xl border border-gray-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#c8aa6e]/20 hover:shadow-xl">
              <div className="flex items-start justify-between">
                <div>
                  <span className="inline-block rounded-md bg-[#1a2b3c]/5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#1a2b3c]">{cat.badge}</span>
                  <h3 className="mt-2 font-[family-name:var(--font-barlow)] text-lg font-bold text-[#1a2b3c]">{cat.name}</h3>
                </div>
                <p className="font-[family-name:var(--font-barlow)] text-xl font-extrabold text-[#1a2b3c]">{cat.priceLabel}</p>
              </div>
              <Link href="/pack-diosa/contact" className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-[#c8aa6e]/10 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#c8aa6e] transition-all duration-200 hover:bg-[#c8aa6e] hover:text-[#0f1a24]">Inquire Now</Link>
            </ProductCard>
          ))}
        </div>
      </section>
    </div>
  );
}
