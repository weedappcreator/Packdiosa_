"use client";

import Link from "next/link";
import { useScrollReveal } from "../hooks";
import { ProductCard } from "../components";

const specials = [
  { name: "Mix Pepe", price: 550, desc: "Mixed pepe variety lot — diverse merchandise across categories. A staple for market vendors who sell assorted goods and want variety in one purchase." },
  { name: "Baby #2 (Gwo Bal)", price: 700, desc: "Large-bundle baby lot with maximum quantity per purchase. Same lot available on the Baby page. Listed here because it's one of our most requested specials." },
  { name: "Zaza Special", price: 450, desc: "Zaza selection at a lower entry point than the full Zaza Container ($12,000). Good way to test the Zaza product line before committing to a full container." },
];

export default function SpecialsPage() {
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
          <h1 className="mt-4 font-[family-name:var(--font-barlow)] text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Specials &mdash; Bal P&eacute;p&egrave;
          </h1>
          <p className="mt-4 max-w-lg text-lg text-white/50">
            Mixed lots and special selections, $450 to $700. The variety packs.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {specials.map((s, i) => (
            <ProductCard key={s.name} delay={i * 100} className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
              <div className="h-1.5 w-full bg-gradient-to-r from-[#c8aa6e] to-[#a08a55]" />
              <div className="p-8">
                <h3 className="font-[family-name:var(--font-barlow)] text-2xl font-bold text-[#1a2b3c]">{s.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{s.desc}</p>
                <p className="mt-5 font-[family-name:var(--font-barlow)] text-3xl font-extrabold text-[#1a2b3c]">${s.price}<span className="ml-1 text-sm font-medium text-gray-300">/lot</span></p>
                <Link href="/pack-diosa/contact" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-[#c8aa6e] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#0f1a24] transition-all duration-200 hover:bg-[#d4ba82] hover:shadow-lg">
                  Inquire Now
                </Link>
              </div>
            </ProductCard>
          ))}
        </div>

        <div className="mt-16 rounded-xl bg-[#1a2b3c] p-8 text-center text-white">
          <h2 className="font-[family-name:var(--font-barlow)] text-2xl font-bold">Not sure which lot is right for you?</h2>
          <p className="mt-2 text-sm text-white/40">Call or visit the warehouse. We&apos;ll walk you through what&apos;s in stock and help you pick the right mix for your customers.</p>
          <Link href="/pack-diosa/contact" className="mt-6 inline-block rounded-lg bg-[#c8aa6e] px-8 py-3 text-xs font-bold uppercase tracking-wider text-[#0f1a24] hover:bg-[#d4ba82] hover:shadow-lg">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
