"use client";

import Link from "next/link";
import { useScrollReveal } from "../hooks";
import { ProductCard } from "../components";

const jogwear = [
  { name: "Jogging Pants — Standard", price: 300, desc: "Classic-fit jogging pants in assorted sizes and colors. Comfortable everyday wear with elastic waistbands. Solid seller at markets and retail stores year-round.", tag: "Standard", who: "Market vendors, casual clothing retailers" },
  { name: "Jogging Pants — Skinny Fit", price: 450, desc: "Slim/skinny-fit joggers with tapered legs. These are the styles that move faster with younger buyers. Better materials, better fit, higher resale price per unit.", tag: "Slim Fit", who: "Streetwear retailers, online resellers, boutiques" },
];

export default function JogwearPage() {
  const hero = useScrollReveal();

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-[#1a2b3c]">
        <div className="absolute inset-0"><img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&q=80" alt="" className="h-full w-full object-cover opacity-20" /></div>
        <div ref={hero.ref} style={hero.style} className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
          <Link href="/pack-diosa" className="mb-6 inline-flex items-center gap-2 text-xs font-medium text-white/50 hover:text-white/80">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Back to catalog
          </Link>
          <h1 className="font-[family-name:var(--font-barlow)] text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Jogwear</h1>
          <p className="mt-4 max-w-lg text-lg text-white/50">Two styles: standard fit at $300 and skinny fit at $450 per lot. Assorted sizes in each.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {jogwear.map((j, i) => (
            <ProductCard key={j.name} delay={i * 120} className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className={`h-1.5 w-full ${j.tag === "Slim Fit" ? "bg-gradient-to-r from-[#c8aa6e] to-[#a08a55]" : "bg-gradient-to-r from-[#1a2b3c] to-[#2d4a63]"}`} />
              <div className="p-8">
                <span className={`inline-block rounded-full px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider ${j.tag === "Slim Fit" ? "bg-[#c8aa6e]/10 text-[#c8aa6e]" : "bg-[#1a2b3c]/5 text-[#1a2b3c]"}`}>{j.tag}</span>
                <h3 className="mt-3 font-[family-name:var(--font-barlow)] text-2xl font-bold text-[#1a2b3c]">{j.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{j.desc}</p>
                <p className="mt-3 rounded-lg bg-gray-50 px-3 py-2 text-xs text-gray-500">
                  <span className="font-semibold text-[#c8aa6e]">Best for:</span> {j.who}
                </p>
                <p className="mt-5 font-[family-name:var(--font-barlow)] text-3xl font-extrabold text-[#1a2b3c]">${j.price}<span className="ml-1 text-sm font-medium text-gray-300">/lot</span></p>
                <Link href="/pack-diosa/contact" className="mt-6 inline-block rounded-lg bg-[#c8aa6e] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0f1a24] hover:bg-[#d4ba82] hover:shadow-md">
                  Inquire Now
                </Link>
              </div>
            </ProductCard>
          ))}
        </div>

        <div className="mt-14 rounded-xl border border-gray-100 bg-gray-50 p-6 text-center">
          <p className="text-sm text-gray-400">
            Related categories:
            <Link href="/pack-diosa/men" className="ml-2 text-[#c8aa6e] hover:underline">Men&apos;s Apparel</Link> &bull;
            <Link href="/pack-diosa/ladies" className="ml-1 text-[#c8aa6e] hover:underline">Ladies Apparel</Link> &bull;
            <Link href="/pack-diosa/undergarments" className="ml-1 text-[#c8aa6e] hover:underline">Undergarments</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
