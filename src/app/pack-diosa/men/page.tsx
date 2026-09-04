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

const menProducts = [
  { name: "Men T-Shirt", price: 250, desc: "Mixed styles men's t-shirts. Casual and streetwear options with brand variety. Great for retail resale.", features: ["Mixed brands", "Casual & streetwear", "Assorted sizes", "High turnover item"] },
  { name: "Mix Brands Outlet", price: 450, desc: "Brand-name outlet mix — premium quality men's clothing from recognized brands. Higher margins for resellers.", features: ["Brand-name items", "Outlet quality", "Premium selection", "Higher resale value"] },
];

export default function MenPage() {
  const hero = useScrollReveal();

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0066CC] via-[#004d99] to-[#002d5a]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div ref={hero.ref} style={hero.style} className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
          <Link href="/pack-diosa" className="mb-6 inline-flex items-center gap-2 text-xs font-medium text-white/50 transition-colors hover:text-white/80">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Back to catalog
          </Link>
          <h1 className="font-[family-name:var(--font-barlow)] text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Men&apos;s Collection</h1>
          <p className="mt-4 max-w-lg text-lg text-blue-100/60">T-shirts and brand outlet mix — from $250 to $450.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80">2 Options</span>
            <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80">$250 – $450</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {menProducts.map((p, i) => {
            const reveal = useScrollReveal(i * 120);
            return (
              <div key={p.name} ref={reveal.ref} style={reveal.style} className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/5">
                <div className="h-1.5 w-full bg-gradient-to-r from-[#0066CC] to-[#7B5FFF]" />
                <div className="p-8">
                  <div className="flex items-start justify-between">
                    <h3 className="font-[family-name:var(--font-barlow)] text-2xl font-bold text-[#1A1A1A]">{p.name}</h3>
                    <p className="font-[family-name:var(--font-barlow)] text-3xl font-extrabold text-[#0066CC]">${p.price}</p>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-gray-400">{p.desc}</p>
                  <div className="mt-6">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-gray-300">Includes</p>
                    <div className="grid grid-cols-2 gap-2">
                      {p.features.map((f) => (
                        <span key={f} className="flex items-center gap-1.5 text-xs text-gray-500">
                          <span className="h-1 w-1 rounded-full bg-[#0066CC]" />{f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link href="/pack-diosa/contact" className="mt-6 inline-block rounded-lg bg-[#FF6B35] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:bg-[#e55a2a] hover:shadow-md hover:shadow-orange-500/20">
                    Inquire Now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 rounded-xl border border-[#0066CC]/10 bg-[#0066CC]/5 p-6 text-center">
          <p className="font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-wider text-[#0066CC]">Need bulk ordering?</p>
          <p className="mt-2 text-sm text-gray-400">Contact us for volume discounts and custom selections.</p>
          <Link href="/pack-diosa/contact" className="mt-4 inline-block text-sm font-semibold text-[#FF6B35] transition-colors hover:text-[#e55a2a]">Get a Quote →</Link>
        </div>
      </section>
    </div>
  );
}
