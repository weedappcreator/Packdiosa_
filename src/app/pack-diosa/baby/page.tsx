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

const babyProducts = [
  { name: "Baby Modern", price: 350, desc: "Modern baby clothing — contemporary styles, fresh designs, current trends.", subtitle: null, color: "#0066CC" },
  { name: "Baby Light", price: 300, desc: "Lightweight baby clothing — breathable fabrics, perfect for warm climate and everyday wear.", subtitle: null, color: "#0066CC" },
  { name: "Children Light", price: 300, desc: "Children's lightweight clothing — ages 2-10, casual and play-ready selections.", subtitle: null, color: "#7B5FFF" },
  { name: "Baby #2", price: 700, desc: "Large bundle baby selection — maximum quantity for high-volume resellers. Best value per item.", subtitle: "Gwo Bal", color: "#FF6B35" },
];

export default function BabyPage() {
  const hero = useScrollReveal();

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0066CC] via-[#004d99] to-[#002d5a]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute -right-20 bottom-0 h-[300px] w-[300px] rounded-full bg-[#7B5FFF]/10 blur-[100px]" />
        <div ref={hero.ref} style={hero.style} className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
          <Link href="/pack-diosa" className="mb-6 inline-flex items-center gap-2 text-xs font-medium text-white/50 transition-colors hover:text-white/80">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Back to catalog
          </Link>
          <h1 className="font-[family-name:var(--font-barlow)] text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Baby &amp; Children</h1>
          <p className="mt-4 max-w-lg text-lg text-blue-100/60">From modern baby to children&apos;s light — $300 to $700.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80">4 Options</span>
            <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80">$300 – $700</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {babyProducts.map((p, i) => {
            const reveal = useScrollReveal(i * 100);
            return (
              <div key={p.name} ref={reveal.ref} style={reveal.style} className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/5">
                <div className="h-1.5 w-full" style={{ background: `linear-gradient(to right, ${p.color}, ${p.color}88)` }} />
                <div className="p-7">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-[family-name:var(--font-barlow)] text-xl font-bold text-[#1A1A1A]">{p.name}</h3>
                      {p.subtitle && (
                        <span className="mt-1 inline-block rounded-md bg-[#FF6B35]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#FF6B35]">{p.subtitle}</span>
                      )}
                    </div>
                    <p className="font-[family-name:var(--font-barlow)] text-2xl font-extrabold" style={{ color: p.color }}>${p.price}</p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">{p.desc}</p>
                  <Link href="/pack-diosa/contact" className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-[#FF6B35]/10 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#FF6B35] transition-all duration-200 hover:bg-[#FF6B35] hover:text-white">
                    Inquire Now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4">
          <div className="rounded-xl border border-gray-100 p-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#0066CC]">Standard</p>
            <p className="mt-1 font-[family-name:var(--font-barlow)] text-xl font-bold text-[#1A1A1A]">$300 – $350</p>
            <p className="mt-1 text-xs text-gray-400">Baby Modern, Baby Light, Children Light</p>
          </div>
          <div className="rounded-xl border border-gray-100 p-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#FF6B35]">Bulk Bundle</p>
            <p className="mt-1 font-[family-name:var(--font-barlow)] text-xl font-bold text-[#1A1A1A]">$700</p>
            <p className="mt-1 text-xs text-gray-400">Baby #2 (Gwo Bal) — large bundle</p>
          </div>
        </div>
      </section>
    </div>
  );
}
