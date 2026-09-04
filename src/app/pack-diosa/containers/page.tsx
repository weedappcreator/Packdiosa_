"use client";

import Link from "next/link";
import { useScrollReveal } from "../hooks";
import { ProductCard } from "../components";

const containers = [
  { name: "Ladies Target", price: 1500, desc: "Entry-level container for retail startups and small resellers. Curated ladies merchandise — inspect before purchase at our Jesup warehouse.", badge: null, tier: "entry" },
  { name: "Zaza Container", price: 12000, desc: "High-demand Zaza selection. Limited availability each season — reserve early. Walk-in inspection available Tue–Fri.", badge: "Limited", tier: "premium" },
  { name: "Georgia Container", price: 15000, desc: "Standard quality Georgia selection. Consistent inventory for established resellers with proven sales channels.", badge: null, tier: "premium" },
  { name: "Special Kalite Container", price: 18500, desc: "Our highest-grade curation. Every item hand-selected for condition and resale value. For buyers who demand the best.", badge: "Limited", tier: "premium" },
  { name: "Mix Shoes Container", price: 16000, desc: "Diverse footwear across brands, styles, and sizes. Men's and women's mixed — maximum variety per container.", badge: null, tier: "premium" },
];

export default function ContainersPage() {
  const hero = useScrollReveal();

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-[#1a2b3c]">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80" alt="" className="h-full w-full object-cover opacity-20" />
        </div>
        <div ref={hero.ref} style={hero.style} className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
          <Link href="/pack-diosa" className="mb-6 inline-flex items-center gap-2 text-xs font-medium text-white/50 transition-colors hover:text-white/80">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Back to catalog
          </Link>
          <h1 className="font-[family-name:var(--font-barlow)] text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Container Services</h1>
          <p className="mt-4 max-w-lg text-lg text-white/50">From $1,500 to $18,500 — full containers for wholesale distribution. Walk in and inspect at our Jesup warehouse.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">5 Container Types</span>
            <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">Wholesale Pricing</span>
            <span className="rounded-full bg-[#c8aa6e]/20 px-4 py-1.5 text-xs font-medium text-[#c8aa6e]">2 Limited Availability</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {containers.map((c, i) => (
            <ProductCard key={c.name} delay={i * 80} className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gray-200/50">
              <div className={`h-1.5 w-full ${c.tier === "premium" ? "bg-gradient-to-r from-[#c8aa6e] to-[#a08a55]" : "bg-gradient-to-r from-[#1a2b3c] to-[#2d4a63]"}`} />
              <div className="p-7">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-[family-name:var(--font-barlow)] text-xl font-bold text-[#1a2b3c]">{c.name}</h3>
                    {c.badge && <span className="mt-1 inline-block rounded-full bg-[#c8aa6e]/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#c8aa6e]">{c.badge}</span>}
                  </div>
                  <p className="font-[family-name:var(--font-barlow)] text-2xl font-extrabold text-[#1a2b3c]">${c.price.toLocaleString()}</p>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-400">{c.desc}</p>
                <div className="mt-6 flex items-center gap-3">
                  <Link href="/pack-diosa/contact" className="rounded-lg bg-[#c8aa6e] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0f1a24] transition-all duration-200 hover:bg-[#d4ba82] hover:shadow-md">Inquire Now</Link>
                  <span className="text-xs text-gray-300">{c.tier === "premium" ? "Premium tier" : "Entry level"}</span>
                </div>
              </div>
            </ProductCard>
          ))}
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {[
            { label: "Entry Level", range: "$1,500", items: "Ladies Target", color: "#1a2b3c" },
            { label: "Premium Tier", range: "$12,000 – $18,500", items: "Zaza, Georgia, Special Kalite, Mix Shoes", color: "#c8aa6e" },
          ].map((tier) => (
            <div key={tier.label} className="rounded-xl border border-gray-100 p-6">
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: tier.color }}>{tier.label}</p>
              <p className="mt-2 font-[family-name:var(--font-barlow)] text-2xl font-bold text-[#1a2b3c]">{tier.range}</p>
              <p className="mt-2 text-sm text-gray-400">{tier.items}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
