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

const premiumItems = [
  { name: "Baby Premium", price: 500, desc: "Premium baby clothing — hand-picked quality pieces, modern styles, excellent condition.", icon: "🍼" },
  { name: "Ladies Premium", price: 500, desc: "Premium ladies selection — curated fashion pieces, trending styles, top-tier quality.", icon: "👗" },
  { name: "Men Premium", price: 500, desc: "Premium men's collection — quality casual and formal wear, brand-name selections.", icon: "👔" },
];

const benefits = [
  { title: "Hand-Picked Quality", desc: "Every premium item is individually inspected and selected for quality and condition." },
  { title: "Best Value at $500", desc: "One transparent price point. No hidden fees, no variable pricing — just $500 per premium lot." },
  { title: "Three Categories", desc: "Baby, Ladies, and Men — each curated to maximize resale potential and customer satisfaction." },
];

export default function PremiumPage() {
  const hero = useScrollReveal();

  return (
    <div className="bg-white">
      {/* Hero — purple-accented for premium */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a1030] via-[#2d1b69] to-[#0a0a0a]">
        <div className="absolute inset-0">
          <div className="absolute -left-20 top-1/3 h-[400px] w-[400px] rounded-full bg-[#7B5FFF]/15 blur-[120px]" />
          <div className="absolute -bottom-20 right-0 h-[300px] w-[300px] rounded-full bg-[#FF6B35]/10 blur-[80px]" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div ref={hero.ref} style={hero.style} className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
          <Link href="/pack-diosa" className="mb-6 inline-flex items-center gap-2 text-xs font-medium text-white/50 transition-colors hover:text-white/80">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Back to catalog
          </Link>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#7B5FFF]/30 bg-[#7B5FFF]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#7B5FFF]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7B5FFF] animate-pulse" />
            Premium Collection
          </div>
          <h1 className="mt-6 font-[family-name:var(--font-barlow)] text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Premium Items
          </h1>
          <p className="mt-4 max-w-lg text-lg text-purple-100/50">
            Curated quality selections — all at one transparent price point.
          </p>
          <p className="mt-6 font-[family-name:var(--font-barlow)] text-5xl font-extrabold text-[#7B5FFF] sm:text-6xl">
            $500<span className="ml-2 text-lg font-medium text-white/30">each</span>
          </p>
        </div>
      </section>

      {/* Premium Items Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {premiumItems.map((item, i) => {
            const reveal = useScrollReveal(i * 120);
            return (
              <div
                key={item.name}
                ref={reveal.ref}
                style={reveal.style}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-500/5"
              >
                <div className="h-1.5 w-full bg-gradient-to-r from-[#7B5FFF] to-[#a78bfa]" />
                <div className="absolute right-4 top-6 overflow-hidden rounded-full border border-[#7B5FFF]/20 bg-gradient-to-r from-[#7B5FFF]/10 to-[#a78bfa]/10 px-3 py-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#7B5FFF]">Premium</span>
                </div>
                <div className="p-8">
                  <span className="text-4xl">{item.icon}</span>
                  <h3 className="mt-5 font-[family-name:var(--font-barlow)] text-2xl font-bold text-[#1A1A1A]">{item.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">{item.desc}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-[family-name:var(--font-barlow)] text-3xl font-extrabold text-[#7B5FFF]">${item.price}</span>
                    <span className="text-xs text-gray-300">per lot</span>
                  </div>
                  <Link
                    href="/pack-diosa/contact"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-[#7B5FFF] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:bg-[#6a4fef] hover:shadow-lg hover:shadow-purple-500/20"
                  >
                    Inquire Now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Premium */}
      <section className="bg-[#FAFAFA]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7B5FFF]">Why Premium</p>
            <h2 className="mt-3 font-[family-name:var(--font-barlow)] text-3xl font-bold text-[#1A1A1A]">Quality at One Price</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {benefits.map((b, i) => {
              const reveal = useScrollReveal(i * 100);
              return (
                <div key={b.title} ref={reveal.ref} style={reveal.style} className="rounded-xl border border-gray-100 bg-white p-7">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#7B5FFF]/10 font-[family-name:var(--font-barlow)] text-lg font-bold text-[#7B5FFF]">{i + 1}</div>
                  <h3 className="font-[family-name:var(--font-barlow)] text-lg font-bold text-[#1A1A1A]">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#7B5FFF] to-[#5b3fd4]">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center sm:px-8 lg:px-12">
          <h2 className="font-[family-name:var(--font-barlow)] text-3xl font-bold text-white">All Premium Items — $500</h2>
          <p className="mt-3 text-purple-100/60">Baby, Ladies, and Men. One price, maximum quality.</p>
          <Link href="/pack-diosa/contact" className="mt-8 inline-block rounded-lg bg-white px-10 py-3.5 font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-wider text-[#7B5FFF] transition-all duration-200 hover:shadow-lg">
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
