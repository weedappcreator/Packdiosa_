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

const sheets = [
  { name: "Sheets Premium", price: 300, desc: "Premium quality sheets — higher thread count, better materials, excellent condition.", tier: "Premium" },
  { name: "Sheets Color", price: 1800, desc: "Large colored sheets lot — bulk quantity for maximum inventory. Best for established resellers.", tier: "Bulk Lot" },
  { name: "Sheets #1", price: 225, desc: "Standard quality sheets at the most accessible price point. Great entry-level option.", tier: "Standard" },
];

export default function SheetsPage() {
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
          <h1 className="font-[family-name:var(--font-barlow)] text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Sheets &amp; Bedding</h1>
          <p className="mt-4 max-w-lg text-lg text-blue-100/60">Quality bedding from $225 to $1,800 — standard to bulk lots.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {sheets.map((s, i) => {
            const reveal = useScrollReveal(i * 100);
            return (
              <div key={s.name} ref={reveal.ref} style={reveal.style} className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/5">
                <div className="h-1.5 w-full bg-gradient-to-r from-[#0066CC] to-[#7B5FFF]" />
                <div className="p-7">
                  <span className="inline-block rounded-full bg-[#0066CC]/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#0066CC]">{s.tier}</span>
                  <h3 className="mt-3 font-[family-name:var(--font-barlow)] text-xl font-bold text-[#1A1A1A]">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">{s.desc}</p>
                  <p className="mt-5 font-[family-name:var(--font-barlow)] text-2xl font-extrabold text-[#0066CC]">${s.price.toLocaleString()}</p>
                  <Link href="/pack-diosa/contact" className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-[#FF6B35]/10 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#FF6B35] transition-all duration-200 hover:bg-[#FF6B35] hover:text-white">
                    Inquire Now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 rounded-xl border border-amber-200/50 bg-amber-50/50 p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-700">Note</p>
          <p className="mt-1 text-sm text-amber-600/80">Sheets Color ($1,800) is a bulk lot — ideal for established resellers with high inventory turnover.</p>
        </div>
      </section>
    </div>
  );
}
