"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────────────────
   PACK-DIOSA HOME — Premium Logistics & Wholesale
   Design Read: ecommerce-hybrid for wholesale buyers + retailers,
   with a professional-trust language, leaning toward Modern Minimal
   with fashion-luxury accents.

   Taste Skill Dials:
   DESIGN_VARIANCE: 7  |  MOTION_INTENSITY: 6  |  VISUAL_DENSITY: 4

   Effects: GSAP-style scroll reveals, counter animations,
   staggered grid reveals, smooth hover physics
   ───────────────────────────────────────────────────────── */

// ── Counter Animation Hook ──
function useCountUp(target: number, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!startOnView || !ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, startOnView]);

  return { count, ref };
}

// ── Scroll Reveal Hook ──
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// ── Staggered Children Reveal ──
function RevealSection({ children, className = "", delay = 0 }: {
  children: React.ReactNode; className?: string; delay?: number;
}) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(32px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ── Data ──
const featuredCategories = [
  { name: "Containers", price: "$1,500 – $18,500", href: "/pack-diosa/containers", icon: "📦", desc: "Full containers for wholesale distribution", tag: "Most Popular" },
  { name: "Pallet Goods", price: "$2,300 – $3,300", href: "/pack-diosa/pallets", icon: "🏗️", desc: "Curated Target pallets by category", tag: null },
  { name: "Premium Items", price: "$500 each", href: "/pack-diosa/premium", icon: "⭐", desc: "Hand-picked premium selections", tag: "Best Value" },
  { name: "Ladies Collection", price: "$150 – $450", href: "/pack-diosa/ladies", icon: "👗", desc: "12 sub-categories of ladies apparel", tag: null },
  { name: "Men's Collection", price: "$250 – $450", href: "/pack-diosa/men", icon: "👔", desc: "T-shirts and brand outlet mix", tag: null },
  { name: "Baby & Children", price: "$300 – $700", href: "/pack-diosa/baby", icon: "🍼", desc: "Modern, light, and children selections", tag: null },
];

const stats = [
  { value: 25, suffix: "+", label: "Product Categories" },
  { value: 5, suffix: "", label: "Container Types" },
  { value: 12, suffix: "", label: "Ladies Sub-Categories" },
];

const allProducts = [
  { section: "Containers", href: "/pack-diosa/containers", items: [
    "Ladies Target $1,500", "Zaza $12,000", "Georgia $15,000",
    "Special Kalite $18,500", "Mix Shoes $16,000",
  ]},
  { section: "Pallets", href: "/pack-diosa/pallets", items: [
    "Baby $3,300", "Shoes $2,300", "Accessories $3,000", "Men $2,500",
  ]},
  { section: "Ladies", href: "/pack-diosa/ladies", items: [
    "#1 Current $300", "#1 Juvenile $350", "Tops $150", "Shorts $150",
    "Shoes $1.50/LB", "Dress Fashion $300", "Dress Cotton $200",
    "Mini Dress $200", "Bra #1 $300", "Bra #2 $150",
    "Jumpsuits $450", "Jeans $280",
  ]},
  { section: "More Categories", href: "/pack-diosa/specials", items: [
    "Men T-Shirt $250", "Mix Brands Outlet $450",
    "Sheets Premium $300", "Sheets Color $1,800", "Sheets #1 $225",
    "Jogging $300", "Jogging Skinny $450",
    "Mixed Undergarments $175",
    "Baby Modern $350", "Baby Light $300", "Children Light $300",
    "Mix Pepe $550", "Baby #2 $700", "Zaza $450",
  ]},
];

export default function PackDiosaPage() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  useEffect(() => { setHeroLoaded(true); }, []);

  return (
    <div className="bg-white">
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-[90vh] overflow-hidden bg-[#0a0a0a]">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0">
          <div className="absolute -left-32 -top-32 h-[500px] w-[500px] animate-pulse rounded-full bg-[#0066CC]/20 blur-[120px]" />
          <div className="absolute -bottom-20 right-0 h-[400px] w-[400px] rounded-full bg-[#7B5FFF]/15 blur-[100px]" style={{ animationDelay: "1s", animationDuration: "4s" }} />
          <div className="absolute right-1/3 top-1/2 h-[300px] w-[300px] rounded-full bg-[#FF6B35]/10 blur-[80px]" style={{ animationDelay: "2s", animationDuration: "5s" }} />
        </div>
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative mx-auto flex max-w-7xl items-center px-6 py-32 sm:px-8 lg:min-h-[90vh] lg:px-12">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-widest text-[#FF6B35] backdrop-blur-sm transition-all duration-700"
              style={{ opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? "translateY(0)" : "translateY(16px)" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B35] animate-pulse" />
              NOVA CARGO
            </div>

            {/* Headline — staggered word reveal */}
            <h1 className="font-[family-name:var(--font-barlow)] text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[1.05] tracking-tight text-white">
              {["Premium", "Logistics", "&"].map((word, i) => (
                <span
                  key={word}
                  className="mr-[0.25em] inline-block transition-all duration-700 ease-out"
                  style={{
                    opacity: heroLoaded ? 1 : 0,
                    transform: heroLoaded ? "translateY(0)" : "translateY(40px)",
                    transitionDelay: `${200 + i * 120}ms`,
                  }}
                >
                  {word}
                </span>
              ))}
              <br />
              {["Wholesale", "Distribution"].map((word, i) => (
                <span
                  key={word}
                  className="mr-[0.25em] inline-block text-[#7B5FFF] transition-all duration-700 ease-out"
                  style={{
                    opacity: heroLoaded ? 1 : 0,
                    transform: heroLoaded ? "translateY(0)" : "translateY(40px)",
                    transitionDelay: `${560 + i * 120}ms`,
                  }}
                >
                  {word}
                </span>
              ))}
            </h1>

            {/* Sub */}
            <p
              className="mt-6 max-w-lg text-lg leading-relaxed text-white/50 transition-all duration-700"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? "translateY(0)" : "translateY(24px)",
                transitionDelay: "800ms",
              }}
            >
              Container Shipping &bull; Pallet Goods &bull; Wholesale Apparel.
              Transparent pricing on 25+ categories from Jesup, Georgia.
            </p>

            {/* CTAs */}
            <div
              className="mt-10 flex flex-wrap gap-4 transition-all duration-700"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? "translateY(0)" : "translateY(24px)",
                transitionDelay: "1000ms",
              }}
            >
              <Link
                href="#categories"
                className="group relative overflow-hidden rounded-lg bg-[#FF6B35] px-8 py-3.5 font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25"
              >
                <span className="relative z-10">Browse Catalog</span>
                <div className="absolute inset-0 -translate-x-full bg-[#e55a2a] transition-transform duration-300 group-hover:translate-x-0" />
              </Link>
              <Link
                href="/pack-diosa/contact"
                className="rounded-lg border border-white/20 px-8 py-3.5 font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-white/50 hover:bg-white/5"
              >
                Get a Quote
              </Link>
            </div>

            {/* Trust pills */}
            <div
              className="mt-14 flex flex-wrap gap-4 transition-all duration-700"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transitionDelay: "1200ms",
              }}
            >
              {[
                { dot: "bg-[#FF6B35]", text: "25+ Categories" },
                { dot: "bg-[#7B5FFF]", text: "Transparent Pricing" },
                { dot: "bg-green-400", text: "Jesup, GA" },
                { dot: "bg-[#0066CC]", text: "Tue–Fri 9AM–5PM" },
              ].map((pill) => (
                <span key={pill.text} className="flex items-center gap-2 text-xs text-white/40">
                  <span className={`h-1.5 w-1.5 rounded-full ${pill.dot}`} />
                  {pill.text}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-white/20">
            <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <div className="h-8 w-[1px] bg-gradient-to-b from-white/20 to-transparent animate-pulse" />
          </div>
        </div>
      </section>

      {/* ═══════════ STATS BAR ═══════════ */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-gray-100">
          {stats.map((stat) => {
            const { count, ref } = useCountUp(stat.value, 1800);
            return (
              <div key={stat.label} ref={ref} className="px-6 py-10 text-center">
                <p className="font-[family-name:var(--font-barlow)] text-4xl font-extrabold text-[#0066CC] sm:text-5xl">
                  {count}{stat.suffix}
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-widest text-gray-400">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════════ FEATURED CATEGORIES ═══════════ */}
      <section id="categories" className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        <RevealSection>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF6B35]">
            Our Inventory
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-barlow)] text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
            Shop by Category
          </h2>
          <p className="mt-3 max-w-md text-gray-400">
            Browse our complete inventory with transparent pricing across all categories.
          </p>
        </RevealSection>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCategories.map((cat, i) => (
            <RevealSection key={cat.name} delay={i * 80}>
              <Link
                href={cat.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#0066CC]/20 hover:shadow-2xl hover:shadow-blue-500/5"
              >
                {/* Accent glow on hover */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#0066CC]/0 transition-all duration-500 group-hover:bg-[#0066CC]/5 group-hover:scale-[2.5]" />

                {cat.tag && (
                  <span className="absolute right-4 top-4 rounded-full bg-[#FF6B35]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#FF6B35]">
                    {cat.tag}
                  </span>
                )}

                <span className="text-3xl">{cat.icon}</span>

                <h3 className="relative mt-5 font-[family-name:var(--font-barlow)] text-xl font-bold text-[#1A1A1A]">
                  {cat.name}
                </h3>
                <p className="relative mt-1.5 text-sm leading-relaxed text-gray-400">
                  {cat.desc}
                </p>
                <p className="relative mt-auto pt-5 font-[family-name:var(--font-barlow)] text-xl font-bold text-[#0066CC]">
                  {cat.price}
                </p>
                <span className="relative mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[#FF6B35] transition-all duration-200 group-hover:gap-3">
                  View catalog
                  <svg className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ═══════════ WHY PACK-DIOSA ═══════════ */}
      <section className="bg-[#FAFAFA]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
          <RevealSection className="text-center">
            <h2 className="font-[family-name:var(--font-barlow)] text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
              Why Pack-DIOSA
            </h2>
          </RevealSection>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "Transparent Pricing",
                desc: "Every price listed upfront. No hidden fees, no surprises. Browse our complete catalog online before you visit.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                accent: "#0066CC",
              },
              {
                title: "Quality Curated",
                desc: "Hand-selected inventory across 25+ categories. From $150 basics to $18,500 premium containers — every item inspected.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                ),
                accent: "#7B5FFF",
              },
              {
                title: "Local + Online",
                desc: "Browse our full catalog online anytime. Visit us at 561 SW Broad St, Jesup GA. Tuesday to Friday, 9AM to 5PM.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                ),
                accent: "#FF6B35",
              },
            ].map((item, i) => (
              <RevealSection key={item.title} delay={i * 100}>
                <div className="group h-full rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100">
                  <div
                    className="mb-5 inline-flex rounded-xl p-3"
                    style={{ backgroundColor: `${item.accent}10`, color: item.accent }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="font-[family-name:var(--font-barlow)] text-lg font-bold text-[#1A1A1A]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">
                    {item.desc}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ COMPLETE CATALOG ═══════════ */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        <RevealSection>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7B5FFF]">
            Full Inventory
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-barlow)] text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
            Complete Price List
          </h2>
        </RevealSection>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
          {allProducts.map((group, gi) => (
            <RevealSection key={group.section} delay={gi * 100}>
              <Link href={group.href} className="group">
                <h3 className="mb-4 flex items-center gap-2 font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-[0.15em] text-[#0066CC] transition-colors group-hover:text-[#FF6B35]">
                  {group.section}
                  <svg className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </h3>
              </Link>
              <div className="space-y-1.5">
                {group.items.map((item) => {
                  const parts = item.match(/^(.+?)(\$[\d,.]+(?:\/LB)?)$/);
                  const name = parts ? parts[1].trim() : item;
                  const price = parts ? parts[2] : "";
                  return (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-gray-50"
                    >
                      <span className="text-gray-600">{name}</span>
                      <span className="font-[family-name:var(--font-barlow)] font-bold text-[#1A1A1A]">
                        {price}
                      </span>
                    </div>
                  );
                })}
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ═══════════ CTA BANNER ═══════════ */}
      <section className="relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0">
          <div className="absolute left-1/4 top-0 h-[300px] w-[300px] rounded-full bg-[#0066CC]/15 blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 h-[200px] w-[200px] rounded-full bg-[#7B5FFF]/10 blur-[80px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center sm:px-8 lg:px-12">
          <RevealSection>
            <h2 className="font-[family-name:var(--font-barlow)] text-3xl font-bold text-white sm:text-4xl">
              Ready to Order?
            </h2>
            <p className="mt-4 text-lg text-white/40">
              Contact us for pricing, availability, and bulk ordering.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/pack-diosa/contact"
                className="group relative overflow-hidden rounded-lg bg-[#FF6B35] px-10 py-4 font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-wider text-white transition-shadow duration-300 hover:shadow-lg hover:shadow-orange-500/25"
              >
                <span className="relative z-10">Get a Quote</span>
                <div className="absolute inset-0 -translate-x-full bg-[#e55a2a] transition-transform duration-300 group-hover:translate-x-0" />
              </Link>
              <span className="text-sm text-white/30">
                561 SW Broad St, Jesup GA &bull; Tue–Fri 9–5
              </span>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
