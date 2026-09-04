"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { RevealSection, StatItem, SpotlightCard, CategoryImage } from "./components";

/* ─── Pack-DIOSA Home — Wholesale Distribution ─── */

const featuredCategories = [
  {
    name: "Containers",
    price: "$1,500 – $18,500",
    href: "/pack-diosa/containers",
    desc: "Full shipping containers — Ladies Target to Special Kalite. 5 types available for pickup or delivery.",
    tag: "Most Popular",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  },
  {
    name: "Pallet Goods",
    price: "$2,300 – $3,300",
    href: "/pack-diosa/pallets",
    desc: "Curated Target pallets — baby, shoes, accessories, and men's. Sorted by category, ready to resell.",
    tag: null,
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
  },
  {
    name: "Premium Items",
    price: "$500 each",
    href: "/pack-diosa/premium",
    desc: "Hand-inspected premium lots in baby, ladies, and men's. Higher quality, higher margins.",
    tag: "Best Value",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
  },
  {
    name: "Ladies Collection",
    price: "$150 – $450",
    href: "/pack-diosa/ladies",
    desc: "12 sub-categories from tops and shorts to jumpsuits and jeans. Our largest selection.",
    tag: null,
    img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&q=80",
  },
  {
    name: "Men's Collection",
    price: "$250 – $450",
    href: "/pack-diosa/men",
    desc: "T-shirts and brand outlet mix. Casual, streetwear, and name-brand options.",
    tag: null,
    img: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&q=80",
  },
  {
    name: "Baby & Children",
    price: "$300 – $700",
    href: "/pack-diosa/baby",
    desc: "Modern and lightweight baby clothing. Children's selections ages 2-10. Gwo Bal bulk bundles available.",
    tag: null,
    img: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=600&q=80",
  },
];

const stats = [
  { value: 25, suffix: "+", label: "Product Categories" },
  { value: 5, suffix: "", label: "Container Types" },
  { value: 200, suffix: "+", label: "Retailers Served" },
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
      <section className="relative min-h-[90vh] overflow-hidden bg-[#0f1a24]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80"
            alt=""
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1a24] via-[#0f1a24]/90 to-[#0f1a24]/70" />
        </div>

        <div className="relative mx-auto flex max-w-7xl items-center px-6 py-32 sm:px-8 lg:min-h-[90vh] lg:px-12">
          <div className="max-w-3xl">
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c8aa6e]/20 bg-[#c8aa6e]/5 px-4 py-1.5 text-xs font-medium tracking-widest text-[#c8aa6e] transition-all duration-700"
              style={{ opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? "translateY(0)" : "translateY(16px)" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#c8aa6e]" />
              NOVA CARGO — JESUP, GEORGIA
            </div>

            <h1 className="font-[family-name:var(--font-barlow)] text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[1.05] tracking-tight text-white">
              {["Wholesale", "Containers,"].map((word, i) => (
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
              {["Pallets", "&", "Apparel"].map((word, i) => (
                <span
                  key={word}
                  className="mr-[0.25em] inline-block text-[#c8aa6e] transition-all duration-700 ease-out"
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

            <p
              className="mt-6 max-w-lg text-lg leading-relaxed text-white/50 transition-all duration-700"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? "translateY(0)" : "translateY(24px)",
                transitionDelay: "800ms",
              }}
            >
              Walk-in warehouse off I-95. No middleman pricing on 25+ categories
              from $150 to $18,500. Open Tue–Fri, 9AM–5PM.
            </p>

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
                className="group relative overflow-hidden rounded-lg bg-[#c8aa6e] px-8 py-3.5 font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-wider text-[#0f1a24] transition-all duration-300 hover:shadow-lg hover:shadow-[#c8aa6e]/25"
              >
                <span className="relative z-10">Browse Catalog</span>
                <div className="absolute inset-0 -translate-x-full bg-[#d4ba82] transition-transform duration-300 group-hover:translate-x-0" />
              </Link>
              <Link
                href="/pack-diosa/contact"
                className="rounded-lg border border-white/20 px-8 py-3.5 font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-white/50 hover:bg-white/5"
              >
                Get a Quote
              </Link>
            </div>

            <div
              className="mt-14 flex flex-wrap gap-4 transition-all duration-700"
              style={{ opacity: heroLoaded ? 1 : 0, transitionDelay: "1200ms" }}
            >
              {[
                { text: "Walk-In Welcome" },
                { text: "No Middleman" },
                { text: "Inspect Before You Buy" },
                { text: "Tue–Fri 9AM–5PM" },
              ].map((pill) => (
                <span key={pill.text} className="flex items-center gap-2 text-xs text-white/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c8aa6e]/60" />
                  {pill.text}
                </span>
              ))}
            </div>
          </div>
        </div>

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
          {stats.map((stat) => (
            <StatItem key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </section>

      {/* ═══════════ FEATURED CATEGORIES ═══════════ */}
      <section id="categories" className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        <RevealSection>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c8aa6e]">
            Our Inventory
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-barlow)] text-3xl font-bold text-[#1a2b3c] sm:text-4xl">
            Shop by Category
          </h2>
          <p className="mt-3 max-w-md text-gray-400">
            Every price listed upfront. Walk in, inspect the merchandise, and buy with confidence.
          </p>
        </RevealSection>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCategories.map((cat, i) => (
            <RevealSection key={cat.name} delay={i * 80}>
              <Link href={cat.href}>
                <SpotlightCard>
                  <CategoryImage src={cat.img} alt={cat.name} className="h-44 w-full" />
                  <div className="relative p-6">
                    {cat.tag && (
                      <span className="absolute -top-3 right-4 rounded-full bg-[#c8aa6e] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0f1a24]">
                        {cat.tag}
                      </span>
                    )}
                    <h3 className="font-[family-name:var(--font-barlow)] text-xl font-bold text-[#1a2b3c]">{cat.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-gray-400">{cat.desc}</p>
                    <p className="mt-auto pt-4 font-[family-name:var(--font-barlow)] text-xl font-bold text-[#1a2b3c]">{cat.price}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[#c8aa6e]">
                      View catalog
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </SpotlightCard>
              </Link>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ═══════════ WHY PACK-DIOSA ═══════════ */}
      <section className="bg-[#faf9f7]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
          <RevealSection className="text-center">
            <h2 className="font-[family-name:var(--font-barlow)] text-3xl font-bold text-[#1a2b3c] sm:text-4xl">
              Why Retailers Choose Pack-DIOSA
            </h2>
          </RevealSection>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "No Middleman Pricing",
                desc: "Every item priced upfront — $150 apparel lots to $18,500 premium containers. You see the price before you drive out. No negotiation games.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Inspect Before You Buy",
                desc: "Walk into our Jesup warehouse and see every container, every pallet, every lot. Touch the merchandise. No buying blind from a catalog photo.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                ),
              },
              {
                title: "Off I-95, Jesup GA",
                desc: "561 SW Broad St — right off the interstate. Easy access for pickup. Nationwide shipping also available for containers and pallets.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <RevealSection key={item.title} delay={i * 100}>
                <div className="group h-full rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100">
                  <div className="mb-5 inline-flex rounded-xl bg-[#c8aa6e]/10 p-3 text-[#c8aa6e]">
                    {item.icon}
                  </div>
                  <h3 className="font-[family-name:var(--font-barlow)] text-lg font-bold text-[#1a2b3c]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">{item.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ COMPLETE CATALOG ═══════════ */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        <RevealSection>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c8aa6e]">Full Inventory</p>
          <h2 className="mt-3 font-[family-name:var(--font-barlow)] text-3xl font-bold text-[#1a2b3c] sm:text-4xl">Complete Price List</h2>
        </RevealSection>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
          {allProducts.map((group, gi) => (
            <RevealSection key={group.section} delay={gi * 100}>
              <Link href={group.href} className="group">
                <h3 className="mb-4 flex items-center gap-2 font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-[0.15em] text-[#1a2b3c] transition-colors group-hover:text-[#c8aa6e]">
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
                    <div key={item} className="flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-gray-50">
                      <span className="text-gray-600">{name}</span>
                      <span className="font-[family-name:var(--font-barlow)] font-bold text-[#1a2b3c]">{price}</span>
                    </div>
                  );
                })}
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ═══════════ CTA BANNER ═══════════ */}
      <section className="relative overflow-hidden bg-[#0f1a24]">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1600&q=80" alt="" className="h-full w-full object-cover opacity-10" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center sm:px-8 lg:px-12">
          <RevealSection>
            <h2 className="font-[family-name:var(--font-barlow)] text-3xl font-bold text-white sm:text-4xl">Ready to Stock Up?</h2>
            <p className="mt-4 text-lg text-white/40">Call us, WhatsApp us, or walk into the warehouse. Tue–Fri, 9AM–5PM.</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/pack-diosa/contact"
                className="group relative overflow-hidden rounded-lg bg-[#c8aa6e] px-10 py-4 font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-wider text-[#0f1a24] transition-shadow duration-300 hover:shadow-lg hover:shadow-[#c8aa6e]/25"
              >
                <span className="relative z-10">Get a Quote</span>
                <div className="absolute inset-0 -translate-x-full bg-[#d4ba82] transition-transform duration-300 group-hover:translate-x-0" />
              </Link>
              <a href="tel:+19125550147" className="text-sm text-white/50 transition-colors hover:text-white">(912) 555-0147</a>
              <span className="text-sm text-white/30">561 SW Broad St, Jesup GA</span>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
