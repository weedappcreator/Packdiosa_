"use client";

import Link from "next/link";
import { useScrollReveal } from "../hooks";
import { ProductCard } from "../components";

const babyProducts = [
  { name: "Baby Modern", price: 350, desc: "Current-season baby clothing, newborn to 24 months. Includes bodysuits, outfit sets, and seasonal pieces. Good variety for boutique-style display.", who: "Children's boutiques, baby store owners" },
  { name: "Baby Light", price: 300, desc: "Lightweight baby clothing — breathable cotton and blends for warm climates or year-round basics. Everyday onesies, tees, and shorts.", who: "Market vendors, warm-climate retailers" },
  { name: "Children Light", price: 300, desc: "Lightweight children's clothing for ages 2 through 10. Casual play-ready pieces, assorted sizes. Separate from baby sizing.", who: "Children's clothing retailers, flea market vendors" },
  { name: "Baby #2 (Gwo Bal)", price: 700, subtitle: "Gwo Bal", desc: "Large bundle — highest quantity baby lot we carry. If you move volume and need to restock fast, this is the one. More items per dollar than any other baby option.", who: "High-volume resellers, established baby clothing vendors" },
];

export default function BabyPage() {
  const hero = useScrollReveal();

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-[#1a2b3c]">
        <div className="absolute inset-0"><img src="https://images.unsplash.com/photo-1522771930-78848d9293e8?w=1600&q=80" alt="" className="h-full w-full object-cover opacity-20" /></div>
        <div ref={hero.ref} style={hero.style} className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
          <Link href="/pack-diosa" className="mb-6 inline-flex items-center gap-2 text-xs font-medium text-white/50 hover:text-white/80">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Back to catalog
          </Link>
          <h1 className="font-[family-name:var(--font-barlow)] text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Baby &amp; Children</h1>
          <p className="mt-4 max-w-lg text-lg text-white/50">4 lot options from $300 to $700. Newborn through age 10, sorted by type.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {babyProducts.map((p, i) => (
            <ProductCard key={p.name} delay={i * 100} className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className={`h-1.5 w-full ${p.subtitle ? "bg-gradient-to-r from-[#c8aa6e] to-[#a08a55]" : "bg-gradient-to-r from-[#1a2b3c] to-[#2d4a63]"}`} />
              <div className="p-7">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-[family-name:var(--font-barlow)] text-xl font-bold text-[#1a2b3c]">{p.name}</h3>
                    {p.subtitle && (
                      <span className="mt-1 inline-block rounded-md bg-[#c8aa6e]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#c8aa6e]">{p.subtitle}</span>
                    )}
                  </div>
                  <p className="font-[family-name:var(--font-barlow)] text-2xl font-extrabold text-[#1a2b3c]">${p.price}<span className="ml-1 text-sm font-medium text-gray-300">/lot</span></p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{p.desc}</p>
                <p className="mt-3 rounded-lg bg-gray-50 px-3 py-2 text-xs text-gray-500">
                  <span className="font-semibold text-[#c8aa6e]">Best for:</span> {p.who}
                </p>
                <Link href="/pack-diosa/contact" className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-[#c8aa6e]/10 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#c8aa6e] transition-all duration-200 hover:bg-[#c8aa6e] hover:text-[#0f1a24]">
                  Inquire Now
                </Link>
              </div>
            </ProductCard>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4">
          <div className="rounded-xl border border-gray-100 p-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#1a2b3c]">Standard Lots</p>
            <p className="mt-1 font-[family-name:var(--font-barlow)] text-xl font-bold text-[#1a2b3c]">$300 – $350</p>
            <p className="mt-1 text-xs text-gray-400">Baby Modern, Baby Light, Children Light</p>
          </div>
          <div className="rounded-xl border border-gray-100 p-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#c8aa6e]">Large Bundle</p>
            <p className="mt-1 font-[family-name:var(--font-barlow)] text-xl font-bold text-[#1a2b3c]">$700</p>
            <p className="mt-1 text-xs text-gray-400">Baby #2 (Gwo Bal) — max quantity per dollar</p>
          </div>
        </div>
      </section>
    </div>
  );
}
