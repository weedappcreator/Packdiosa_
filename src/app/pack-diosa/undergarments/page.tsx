"use client";

import Link from "next/link";
import { useScrollReveal } from "../hooks";

export default function UndergarmentPage() {
  const hero = useScrollReveal();
  const card = useScrollReveal(100);

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-[#1a2b3c]">
        <div className="absolute inset-0"><img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80" alt="" className="h-full w-full object-cover opacity-15" /></div>
        <div ref={hero.ref} style={hero.style} className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
          <Link href="/pack-diosa" className="mb-6 inline-flex items-center gap-2 text-xs font-medium text-white/50 hover:text-white/80">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Back to catalog
          </Link>
          <h1 className="font-[family-name:var(--font-barlow)] text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Undergarments</h1>
          <p className="mt-4 max-w-lg text-lg text-white/50">Single lot option at $175. Mixed styles and sizes, ready for resale.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div ref={card.ref} style={card.style} className="mx-auto max-w-2xl">
          <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:shadow-2xl">
            <div className="h-1.5 w-full bg-gradient-to-r from-[#1a2b3c] to-[#2d4a63]" />
            <div className="p-10 text-center">
              <h3 className="mt-2 font-[family-name:var(--font-barlow)] text-3xl font-bold text-[#1a2b3c]">Mixed Undergarments Lot</h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-400">
                Assorted undergarments — men&apos;s and women&apos;s, mixed styles and sizes. Our lowest-priced lot, good for vendors who want to add basics to their inventory without a big upfront cost.
              </p>
              <p className="mt-6 font-[family-name:var(--font-barlow)] text-5xl font-extrabold text-[#1a2b3c]">$175</p>
              <p className="mt-1 text-xs text-gray-300">per lot</p>
              <Link
                href="/pack-diosa/contact"
                className="mt-8 inline-block rounded-lg bg-[#c8aa6e] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0f1a24] hover:bg-[#d4ba82] hover:shadow-lg"
              >
                Inquire Now
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 text-center">
          <p className="text-sm text-gray-400">
            Also see:
            <Link href="/pack-diosa/ladies" className="ml-2 text-[#c8aa6e] hover:underline">Ladies Apparel</Link> &bull;
            <Link href="/pack-diosa/men" className="ml-1 text-[#c8aa6e] hover:underline">Men&apos;s Apparel</Link> &bull;
            <Link href="/pack-diosa/baby" className="ml-1 text-[#c8aa6e] hover:underline">Baby &amp; Children</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
