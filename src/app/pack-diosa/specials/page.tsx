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

const specials = [
  { name: "Mix Pepe", price: 550, desc: "Mixed pepe selection — variety lot with diverse merchandise. Popular choice for market vendors.", icon: "🎁" },
  { name: "Baby #2", price: 700, desc: "Large baby bundle (gwo bal) — maximum quantity baby items for high-volume sellers.", icon: "🍼" },
  { name: "Zaza", price: 450, desc: "Zaza special selection — curated items at an accessible price point. Great entry into specials.", icon: "⭐" },
];

export default function SpecialsPage() {
  const hero = useScrollReveal();

  return (
    <div className="bg-white">
      {/* Hero with special accent */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a1030] to-[#0a0a0a]">
        <div className="absolute inset-0">
          <div className="absolute left-1/4 top-0 h-[300px] w-[300px] rounded-full bg-[#FF6B35]/15 blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 h-[200px] w-[200px] rounded-full bg-[#7B5FFF]/10 blur-[80px]" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div ref={hero.ref} style={hero.style} className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
          <Link href="/pack-diosa" className="mb-6 inline-flex items-center gap-2 text-xs font-medium text-white/50 transition-colors hover:text-white/80">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Back to catalog
          </Link>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF6B35]/30 bg-[#FF6B35]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FF6B35]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B35] animate-pulse" />
            Special Deals
          </div>
          <h1 className="mt-6 font-[family-name:var(--font-barlow)] text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Specials — Bal P&eacute;p&egrave;
          </h1>
          <p className="mt-4 max-w-lg text-lg text-white/40">
            Special selections and mixed lots — $450 to $700.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {specials.map((s, i) => {
            const reveal = useScrollReveal(i * 100);
            return (
              <div key={s.name} ref={reveal.ref} style={reveal.style} className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-orange-500/5">
                <div className="h-1.5 w-full bg-gradient-to-r from-[#FF6B35] to-[#ff8f66]" />
                <div className="absolute right-4 top-6 rounded-full border border-[#FF6B35]/20 bg-[#FF6B35]/10 px-3 py-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF6B35]">Special</span>
                </div>
                <div className="p-8">
                  <span className="text-4xl">{s.icon}</span>
                  <h3 className="mt-5 font-[family-name:var(--font-barlow)] text-2xl font-bold text-[#1A1A1A]">{s.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">{s.desc}</p>
                  <p className="mt-5 font-[family-name:var(--font-barlow)] text-3xl font-extrabold text-[#FF6B35]">${s.price}</p>
                  <Link href="/pack-diosa/contact" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-[#FF6B35] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:bg-[#e55a2a] hover:shadow-lg hover:shadow-orange-500/20">
                    Inquire Now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-xl bg-gradient-to-r from-[#FF6B35] to-[#e55a2a] p-8 text-center text-white">
          <h2 className="font-[family-name:var(--font-barlow)] text-2xl font-bold">Looking for something specific?</h2>
          <p className="mt-2 text-sm text-orange-100/70">We can help you find the right special for your business needs.</p>
          <Link href="/pack-diosa/contact" className="mt-6 inline-block rounded-lg bg-white px-8 py-3 text-xs font-bold uppercase tracking-wider text-[#FF6B35] transition-all duration-200 hover:shadow-lg">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
