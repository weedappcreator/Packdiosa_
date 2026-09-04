"use client";

import Link from "next/link";
import { useScrollReveal } from "../hooks";
import { ProductCard } from "../components";

const sheets = [
  { name: "Sheets #1", price: 225, desc: "Standard quality sheet sets at the lowest price point. Good entry option if you're testing the bedding market or stocking a new store.", tier: "Standard", who: "New resellers, market vendors testing bedding" },
  { name: "Sheets Premium", price: 300, desc: "Higher thread count, better materials, better condition. These are the sheet sets that sell well in retail stores and online where customers care about quality.", tier: "Premium", who: "Retail stores, online resellers, boutique home goods" },
  { name: "Sheets Color", price: 1800, desc: "Bulk quantity colored sheet lot. This is a high-volume purchase for resellers who already have an established bedding business and need to restock fast.", tier: "Bulk Lot", who: "Established resellers with high inventory turnover" },
];

export default function SheetsPage() {
  const hero = useScrollReveal();

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-[#1a2b3c]">
        <div className="absolute inset-0"><img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600&q=80" alt="" className="h-full w-full object-cover opacity-20" /></div>
        <div ref={hero.ref} style={hero.style} className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12">
          <Link href="/pack-diosa" className="mb-6 inline-flex items-center gap-2 text-xs font-medium text-white/50 hover:text-white/80">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Back to catalog
          </Link>
          <h1 className="font-[family-name:var(--font-barlow)] text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Sheets &amp; Bedding</h1>
          <p className="mt-4 max-w-lg text-lg text-white/50">Three options from $225 to $1,800. Standard, premium, and bulk.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {sheets.map((s, i) => (
            <ProductCard key={s.name} delay={i * 100} className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className={`h-1.5 w-full ${s.tier === "Premium" || s.tier === "Bulk Lot" ? "bg-gradient-to-r from-[#c8aa6e] to-[#a08a55]" : "bg-gradient-to-r from-[#1a2b3c] to-[#2d4a63]"}`} />
              <div className="p-7">
                <span className={`inline-block rounded-full px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider ${s.tier === "Premium" || s.tier === "Bulk Lot" ? "bg-[#c8aa6e]/10 text-[#c8aa6e]" : "bg-[#1a2b3c]/5 text-[#1a2b3c]"}`}>{s.tier}</span>
                <h3 className="mt-3 font-[family-name:var(--font-barlow)] text-xl font-bold text-[#1a2b3c]">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{s.desc}</p>
                <p className="mt-3 rounded-lg bg-gray-50 px-3 py-2 text-xs text-gray-500">
                  <span className="font-semibold text-[#c8aa6e]">Best for:</span> {s.who}
                </p>
                <p className="mt-5 font-[family-name:var(--font-barlow)] text-2xl font-extrabold text-[#1a2b3c]">${s.price.toLocaleString()}<span className="ml-1 text-sm font-medium text-gray-300">/lot</span></p>
                <Link href="/pack-diosa/contact" className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-[#c8aa6e]/10 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#c8aa6e] transition-all duration-200 hover:bg-[#c8aa6e] hover:text-[#0f1a24]">
                  Inquire Now
                </Link>
              </div>
            </ProductCard>
          ))}
        </div>

        <div className="mt-14 rounded-xl border border-[#c8aa6e]/20 bg-[#c8aa6e]/5 p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-[#c8aa6e]">Note on Sheets Color</p>
          <p className="mt-1 text-sm text-gray-500">The $1,800 Sheets Color lot is a bulk purchase designed for resellers who move high volume. If you&apos;re new to bedding, start with Sheets #1 at $225.</p>
        </div>
      </section>
    </div>
  );
}
