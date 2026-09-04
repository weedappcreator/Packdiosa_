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

export default function UndergarmentPage() {
  const hero = useScrollReveal();
  const card = useScrollReveal(100);

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0066CC] via-[#004d99] to-[#002d5a]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div ref={hero.ref} style={hero.style} className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
          <Link href="/pack-diosa" className="mb-6 inline-flex items-center gap-2 text-xs font-medium text-white/50 transition-colors hover:text-white/80">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Back to catalog
          </Link>
          <h1 className="font-[family-name:var(--font-barlow)] text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Undergarments</h1>
          <p className="mt-4 max-w-lg text-lg text-blue-100/60">Mixed undergarments lot at an accessible price point.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div ref={card.ref} style={card.style} className="mx-auto max-w-2xl">
          <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5">
            <div className="h-1.5 w-full bg-gradient-to-r from-[#0066CC] to-[#7B5FFF]" />
            <div className="p-10 text-center">
              <span className="inline-block rounded-full bg-[#0066CC]/10 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-[#0066CC]">Single Category</span>
              <h3 className="mt-4 font-[family-name:var(--font-barlow)] text-3xl font-bold text-[#1A1A1A]">Mixed Undergarments</h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-400">
                Mixed undergarments lot — assorted styles, sizes, and types. Accessible entry-level pricing for resellers.
              </p>
              <p className="mt-6 font-[family-name:var(--font-barlow)] text-5xl font-extrabold text-[#0066CC]">$175</p>
              <p className="mt-1 text-xs text-gray-300">per lot</p>
              <Link
                href="/pack-diosa/contact"
                className="mt-8 inline-block rounded-lg bg-[#FF6B35] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:bg-[#e55a2a] hover:shadow-lg hover:shadow-orange-500/20"
              >
                Inquire Now
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 text-center">
          <p className="text-sm text-gray-400">
            Browse more categories:
            <Link href="/pack-diosa/ladies" className="ml-2 text-[#0066CC] hover:underline">Ladies</Link> &bull;
            <Link href="/pack-diosa/men" className="ml-1 text-[#0066CC] hover:underline">Men</Link> &bull;
            <Link href="/pack-diosa/baby" className="ml-1 text-[#0066CC] hover:underline">Baby</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
