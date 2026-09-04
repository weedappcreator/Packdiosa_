"use client";

import Link from "next/link";
import { useScrollReveal } from "../hooks";
import { ProductCard } from "../components";

const menProducts = [
  { name: "Men T-Shirt", price: 250, desc: "Mixed styles — casual, streetwear, assorted brands. Sizes S-XXL. Fast-moving inventory for market vendors and online resellers.", features: ["Mixed brands & styles", "Sizes S-XXL", "Casual & streetwear", "High turnover item"], img: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&q=80" },
  { name: "Mix Brands Outlet", price: 450, desc: "Brand-name outlet pieces — recognizable labels, better condition, higher retail margins. For stores that sell on quality.", features: ["Name-brand items", "Outlet-grade quality", "Higher resale value", "Mixed casual & formal"], img: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600&q=80" },
];

export default function MenPage() {
  const hero = useScrollReveal();

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-[#1a2b3c]">
        <div className="absolute inset-0"><img src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=1600&q=80" alt="" className="h-full w-full object-cover opacity-20" /></div>
        <div ref={hero.ref} style={hero.style} className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
          <Link href="/pack-diosa" className="mb-6 inline-flex items-center gap-2 text-xs font-medium text-white/50 hover:text-white/80">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Back to catalog
          </Link>
          <h1 className="font-[family-name:var(--font-barlow)] text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Men&apos;s Collection</h1>
          <p className="mt-4 max-w-lg text-lg text-white/50">T-shirts and brand outlet mix — $250 to $450 per lot.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {menProducts.map((p, i) => (
            <ProductCard key={p.name} delay={i * 120} className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <img src={p.img} alt={p.name} className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="p-8">
                <div className="flex items-start justify-between">
                  <h3 className="font-[family-name:var(--font-barlow)] text-2xl font-bold text-[#1a2b3c]">{p.name}</h3>
                  <p className="font-[family-name:var(--font-barlow)] text-3xl font-extrabold text-[#1a2b3c]">${p.price}</p>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-400">{p.desc}</p>
                <div className="mt-6 grid grid-cols-2 gap-2">
                  {p.features.map((f) => (
                    <span key={f} className="flex items-center gap-1.5 text-xs text-gray-500"><span className="h-1 w-1 rounded-full bg-[#c8aa6e]" />{f}</span>
                  ))}
                </div>
                <Link href="/pack-diosa/contact" className="mt-6 inline-block rounded-lg bg-[#c8aa6e] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0f1a24] hover:bg-[#d4ba82] hover:shadow-md">Inquire Now</Link>
              </div>
            </ProductCard>
          ))}
        </div>
      </section>
    </div>
  );
}
