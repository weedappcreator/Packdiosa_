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

const containers = [
  { name: "Ladies Target", price: 1500, desc: "Entry-level container — ideal for retail startups and small resellers. Curated ladies merchandise at accessible pricing.", badge: null, tier: "entry" },
  { name: "Zaza Container", price: 12000, desc: "Premium Zaza selection with high-demand items. Limited availability — reserve early for best selection.", badge: "Limited", tier: "premium" },
  { name: "Georgia Container", price: 15000, desc: "Standard quality Georgia selection. Reliable, consistent inventory for established resellers.", badge: null, tier: "premium" },
  { name: "Special Kalite Container", price: 18500, desc: "Highest quality curation available. Hand-selected premium merchandise for discerning wholesale buyers.", badge: "Limited", tier: "premium" },
  { name: "Mix Shoes Container", price: 16000, desc: "Diverse footwear selection across styles and sizes. Mixed brands, mixed categories — maximum variety.", badge: null, tier: "premium" },
];

export default function ContainersPage() {
  const hero = useScrollReveal();

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0066CC] via-[#004d99] to-[#002d5a]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-[#7B5FFF]/10 blur-[100px]" />
        <div ref={hero.ref} style={hero.style} className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
          <Link href="/pack-diosa" className="mb-6 inline-flex items-center gap-2 text-xs font-medium text-white/50 transition-colors hover:text-white/80">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Back to catalog
          </Link>
          <h1 className="font-[family-name:var(--font-barlow)] text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Container Services
          </h1>
          <p className="mt-4 max-w-lg text-lg text-blue-100/60">
            From $1,500 to $18,500 — full containers for wholesale distribution at every scale.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">5 Container Types</span>
            <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">Wholesale Pricing</span>
            <span className="rounded-full bg-[#FF6B35]/20 px-4 py-1.5 text-xs font-medium text-[#FF6B35]">2 Limited Availability</span>
          </div>
        </div>
      </section>

      {/* Container Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {containers.map((c, i) => {
            const reveal = useScrollReveal(i * 80);
            return (
              <div
                key={c.name}
                ref={reveal.ref}
                style={reveal.style}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/5"
              >
                {/* Top accent */}
                <div className={`h-1.5 w-full ${c.tier === "premium" ? "bg-gradient-to-r from-[#7B5FFF] to-[#0066CC]" : "bg-gradient-to-r from-[#0066CC] to-[#0099ff]"}`} />

                <div className="p-7">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-[family-name:var(--font-barlow)] text-xl font-bold text-[#1A1A1A]">
                        {c.name}
                      </h3>
                      {c.badge && (
                        <span className="mt-1 inline-block rounded-full bg-[#FF6B35]/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#FF6B35]">
                          {c.badge}
                        </span>
                      )}
                    </div>
                    <p className="font-[family-name:var(--font-barlow)] text-2xl font-extrabold text-[#0066CC]">
                      ${c.price.toLocaleString()}
                    </p>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-gray-400">{c.desc}</p>

                  <div className="mt-6 flex items-center gap-3">
                    <Link
                      href="/pack-diosa/contact"
                      className="rounded-lg bg-[#FF6B35] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:bg-[#e55a2a] hover:shadow-md hover:shadow-orange-500/20"
                    >
                      Inquire Now
                    </Link>
                    <span className="text-xs text-gray-300">
                      {c.tier === "premium" ? "Premium tier" : "Entry level"}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Price Comparison */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {[
            { label: "Entry Level", range: "$1,500", items: "Ladies Target", color: "#0066CC" },
            { label: "Premium Tier", range: "$12,000 – $18,500", items: "Zaza, Georgia, Special Kalite, Mix Shoes", color: "#7B5FFF" },
          ].map((tier) => (
            <div key={tier.label} className="rounded-xl border border-gray-100 p-6">
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: tier.color }}>{tier.label}</p>
              <p className="mt-2 font-[family-name:var(--font-barlow)] text-2xl font-bold text-[#1A1A1A]">{tier.range}</p>
              <p className="mt-2 text-sm text-gray-400">{tier.items}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
