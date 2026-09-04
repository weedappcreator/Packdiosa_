"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function useScrollReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, style: { opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(28px)", transition: `all 0.6s ease-out ${delay}ms` } };
}

type PriceFilter = "all" | "under200" | "200to350" | "above350";

const ladiesCategories = [
  { name: "#1 Current", price: 300, priceLabel: "$300", badge: "Current", tier: "200to350" as const },
  { name: "#1 Juvenile", price: 350, priceLabel: "$350", badge: "Juvenile", tier: "200to350" as const },
  { name: "Tops", price: 150, priceLabel: "$150", badge: "Tops", tier: "under200" as const },
  { name: "Shorts", price: 150, priceLabel: "$150", badge: "Shorts", tier: "under200" as const },
  { name: "Shoes #1", price: 1.5, priceLabel: "$1.50/LB", badge: "Shoes", tier: "under200" as const },
  { name: "Dress Fashion", price: 300, priceLabel: "$300", badge: "Fashion", tier: "200to350" as const },
  { name: "Dress Cotton", price: 200, priceLabel: "$200", badge: "Cotton", tier: "200to350" as const },
  { name: "Mini Dress", price: 200, priceLabel: "$200", badge: "Mini", tier: "200to350" as const },
  { name: "Bra #1", price: 300, priceLabel: "$300", badge: "Bra", tier: "200to350" as const },
  { name: "Bra #2", price: 150, priceLabel: "$150", badge: "Bra", tier: "under200" as const },
  { name: "Jumpsuits", price: 450, priceLabel: "$450", badge: "Jumpsuits", tier: "above350" as const },
  { name: "Jeans", price: 280, priceLabel: "$280", badge: "Jeans", tier: "200to350" as const },
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

  const filtered = filter === "all"
    ? ladiesCategories
    : ladiesCategories.filter((c) => c.tier === filter);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0066CC] via-[#004d99] to-[#002d5a]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute -right-20 bottom-0 h-[300px] w-[300px] rounded-full bg-[#FF6B35]/10 blur-[100px]" />
        <div ref={hero.ref} style={hero.style} className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
          <Link href="/pack-diosa" className="mb-6 inline-flex items-center gap-2 text-xs font-medium text-white/50 transition-colors hover:text-white/80">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Back to catalog
          </Link>
          <h1 className="font-[family-name:var(--font-barlow)] text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Ladies Collection</h1>
          <p className="mt-4 max-w-lg text-lg text-blue-100/60">Complete inventory with 12 sub-categories — from $150 to $450.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">12 Categories</span>
            <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">$150 – $450</span>
            <span className="rounded-full bg-[#FF6B35]/20 px-4 py-1.5 text-xs font-medium text-[#FF6B35]">Most Popular</span>
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="mb-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all duration-200 ${
                filter === f.key
                  ? "bg-[#0066CC] text-white shadow-md shadow-blue-500/20"
                  : "border border-gray-200 bg-white text-gray-500 hover:border-[#0066CC]/30 hover:text-[#0066CC]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((cat, i) => {
            const reveal = useScrollReveal(i * 60);
            return (
              <div
                key={cat.name}
                ref={reveal.ref}
                style={reveal.style}
                className="group relative overflow-hidden rounded-xl border border-gray-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0066CC]/20 hover:shadow-xl hover:shadow-blue-500/5"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block rounded-md bg-[#0066CC]/8 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#0066CC]">{cat.badge}</span>
                    <h3 className="mt-2 font-[family-name:var(--font-barlow)] text-lg font-bold text-[#1A1A1A]">{cat.name}</h3>
                  </div>
                  <p className="font-[family-name:var(--font-barlow)] text-xl font-extrabold text-[#0066CC]">{cat.priceLabel}</p>
                </div>
                <Link
                  href="/pack-diosa/contact"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-[#FF6B35]/10 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#FF6B35] transition-all duration-200 hover:bg-[#FF6B35] hover:text-white"
                >
                  Inquire Now
                </Link>
              </div>
            );
          })}
        </div>

        {/* Price Summary */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { range: "$150", label: "Budget Friendly", desc: "Tops, Shorts, Bra #2, Shoes", color: "#0066CC" },
            { range: "$200 – $350", label: "Mid Range", desc: "Dresses, Bra #1, Jeans, Current, Juvenile", color: "#7B5FFF" },
            { range: "$450", label: "Premium", desc: "Jumpsuits", color: "#FF6B35" },
          ].map((tier) => (
            <div key={tier.label} className="rounded-xl border border-gray-100 p-5">
              <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: tier.color }}>{tier.label}</p>
              <p className="mt-1 font-[family-name:var(--font-barlow)] text-xl font-bold text-[#1A1A1A]">{tier.range}</p>
              <p className="mt-1 text-xs text-gray-400">{tier.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
