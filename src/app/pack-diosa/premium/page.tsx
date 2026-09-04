"use client";

import Link from "next/link";
import { useScrollReveal } from "../hooks";
import { ProductCard } from "../components";

const premiumItems = [
  { name: "Baby Premium", price: 500, desc: "Hand-inspected baby clothing — modern pieces in excellent condition. Higher quality, higher resale margins.", img: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400&q=80" },
  { name: "Ladies Premium", price: 500, desc: "Curated ladies fashion — trending styles, name-brand pieces, top-tier condition. For boutique resellers.", img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&q=80" },
  { name: "Men Premium", price: 500, desc: "Quality men's casual and formal wear. Brand-name selections inspected individually.", img: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&q=80" },
];

export default function PremiumPage() {
  const hero = useScrollReveal();

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-[#0f1a24]">
        <div className="absolute inset-0"><img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80" alt="" className="h-full w-full object-cover opacity-15" /></div>
        <div ref={hero.ref} style={hero.style} className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
          <Link href="/pack-diosa" className="mb-6 inline-flex items-center gap-2 text-xs font-medium text-white/50 hover:text-white/80">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Back to catalog
          </Link>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#c8aa6e]/30 bg-[#c8aa6e]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#c8aa6e]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c8aa6e]" /> Premium Collection
          </div>
          <h1 className="mt-6 font-[family-name:var(--font-barlow)] text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Premium Items</h1>
          <p className="mt-4 max-w-lg text-lg text-white/50">Hand-inspected lots at one transparent price.</p>
          <p className="mt-6 font-[family-name:var(--font-barlow)] text-5xl font-extrabold text-[#c8aa6e] sm:text-6xl">$500<span className="ml-2 text-lg font-medium text-white/30">each</span></p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {premiumItems.map((item, i) => (
            <ProductCard key={item.name} delay={i * 120} className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
              <img src={item.img} alt={item.name} className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="p-7">
                <h3 className="font-[family-name:var(--font-barlow)] text-2xl font-bold text-[#1a2b3c]">{item.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{item.desc}</p>
                <p className="mt-6 font-[family-name:var(--font-barlow)] text-3xl font-extrabold text-[#1a2b3c]">${item.price} <span className="text-xs font-normal text-gray-300">per lot</span></p>
                <Link href="/pack-diosa/contact" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-[#c8aa6e] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#0f1a24] transition-all hover:bg-[#d4ba82] hover:shadow-lg">Inquire Now</Link>
              </div>
            </ProductCard>
          ))}
        </div>
      </section>

      <section className="bg-[#1a2b3c]">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center sm:px-8 lg:px-12">
          <h2 className="font-[family-name:var(--font-barlow)] text-3xl font-bold text-white">All Premium Items — $500</h2>
          <p className="mt-3 text-white/40">Baby, Ladies, and Men. One price, maximum quality.</p>
          <Link href="/pack-diosa/contact" className="mt-8 inline-block rounded-lg bg-[#c8aa6e] px-10 py-3.5 font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-wider text-[#0f1a24] hover:bg-[#d4ba82] hover:shadow-lg">Get a Quote</Link>
        </div>
      </section>
    </div>
  );
}
