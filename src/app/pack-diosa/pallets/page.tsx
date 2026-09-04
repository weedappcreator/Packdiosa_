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

const pallets = [
  { name: "Baby Pallet", price: 3300, desc: "Curated baby clothing and accessories. Mixed sizes, modern styles.", includes: ["Baby clothing", "Onesies & sets", "Accessories", "Mixed sizes"] },
  { name: "Shoes Pallet", price: 2300, desc: "Footwear variety across styles and sizes. Best value pallet option.", includes: ["Mixed footwear", "Multiple styles", "Assorted sizes", "Men & women"] },
  { name: "Accessories Pallet", price: 3000, desc: "Accessories and jewelry assortment. Fashion-forward selections.", includes: ["Jewelry", "Bags & purses", "Fashion accessories", "Mixed styles"] },
  { name: "Men Pallet", price: 2500, desc: "Men's clothing pallet with casual and formal options.", includes: ["T-shirts & polos", "Casual wear", "Mixed sizes", "Brand variety"] },
];

export default function PalletsPage() {
  const hero = useScrollReveal();

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0066CC] via-[#004d99] to-[#002d5a]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div ref={hero.ref} style={hero.style} className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
          <Link href="/pack-diosa" className="mb-6 inline-flex items-center gap-2 text-xs font-medium text-white/50 transition-colors hover:text-white/80">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Back to catalog
          </Link>
          <h1 className="font-[family-name:var(--font-barlow)] text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Pallet Goods
          </h1>
          <p className="mt-4 max-w-lg text-lg text-blue-100/60">
            Curated Target pallets from $2,300 to $3,300 — organized by category for easy selection.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">4 Pallet Types</span>
            <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">Target Merchandise</span>
          </div>
        </div>
      </section>

      {/* Pallet Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {pallets.map((p, i) => {
            const reveal = useScrollReveal(i * 100);
            return (
              <div
                key={p.name}
                ref={reveal.ref}
                style={reveal.style}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/5"
              >
                <div className="h-1.5 w-full bg-gradient-to-r from-[#0066CC] to-[#7B5FFF]" />
                <div className="p-7">
                  <div className="flex items-start justify-between">
                    <h3 className="font-[family-name:var(--font-barlow)] text-xl font-bold text-[#1A1A1A]">{p.name}</h3>
                    <p className="font-[family-name:var(--font-barlow)] text-2xl font-extrabold text-[#0066CC]">
                      ${p.price.toLocaleString()}
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">{p.desc}</p>

                  <div className="mt-5">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-gray-300">What&apos;s Included</p>
                    <div className="grid grid-cols-2 gap-1.5">
                      {p.includes.map((item) => (
                        <span key={item} className="flex items-center gap-1.5 text-xs text-gray-500">
                          <span className="h-1 w-1 rounded-full bg-[#0066CC]" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/pack-diosa/contact"
                    className="mt-6 inline-block rounded-lg bg-[#FF6B35] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:bg-[#e55a2a] hover:shadow-md hover:shadow-orange-500/20"
                  >
                    Inquire Now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 rounded-xl border border-[#0066CC]/10 bg-[#0066CC]/5 p-6 text-center">
          <p className="font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-wider text-[#0066CC]">
            All pallets include curated Target merchandise
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Price range: $2,300 (Shoes) – $3,300 (Baby). Contact us for current availability.
          </p>
        </div>
      </section>
    </div>
  );
}
