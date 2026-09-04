"use client";

import { useState } from "react";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { WhatsAppButton } from "../components";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

type Tier = "under200" | "200to350" | "above350";
type Filter = "all" | Tier;

interface Product {
  name: string;
  price: number;
  priceLabel?: string;
  badge: string;
  tier: Tier;
}

const products: Product[] = [
  { name: "#1 Current", price: 300, badge: "Current Season", tier: "200to350" },
  { name: "#1 Juvenile", price: 350, badge: "Junior Sizes", tier: "200to350" },
  { name: "Tops", price: 150, badge: "Tops", tier: "under200" },
  { name: "Shorts", price: 150, badge: "Shorts", tier: "under200" },
  {
    name: "Shoes #1",
    price: 1.5,
    priceLabel: "$1.50/LB",
    badge: "By Weight",
    tier: "under200",
  },
  { name: "Dress Fashion", price: 300, badge: "Fashion", tier: "200to350" },
  { name: "Dress Cotton", price: 200, badge: "Cotton", tier: "200to350" },
  { name: "Mini Dress", price: 200, badge: "Mini", tier: "200to350" },
  { name: "Bra #1", price: 300, badge: "Premium", tier: "200to350" },
  { name: "Bra #2", price: 150, badge: "Standard", tier: "under200" },
  { name: "Jumpsuits", price: 450, badge: "Jumpsuits", tier: "above350" },
  { name: "Jeans", price: 280, badge: "Denim", tier: "200to350" },
];

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "under200", label: "Under $200" },
  { key: "200to350", label: "$200 - $350" },
  { key: "above350", label: "$350+" },
];

function getFilterCount(key: Filter) {
  if (key === "all") return products.length;
  return products.filter((p) => p.tier === key).length;
}

/* ------------------------------------------------------------------ */
/*  Subcomponents                                                      */
/* ------------------------------------------------------------------ */

function HeroWord({
  word,
  index,
  prefersReduced,
}: {
  word: string;
  index: number;
  prefersReduced: boolean;
}) {
  return (
    <motion.span
      className="inline-block"
      initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3 + index * 0.12,
        duration: 0.5,
        type: "spring",
        stiffness: 90,
      }}
    >
      {word}&nbsp;
    </motion.span>
  );
}

function ProductCardItem({
  item,
  prefersReduced,
}: {
  item: Product;
  prefersReduced: boolean;
}) {
  return (
    <motion.div
      layout
      initial={prefersReduced ? { opacity: 1 } : { opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.92 }}
      transition={{
        duration: 0.35,
        type: "spring",
        stiffness: 200,
        damping: 22,
      }}
      whileHover={prefersReduced ? {} : { y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-gray-200/60"
    >
      {/* Badge */}
      <div className="flex items-center justify-between px-5 pt-5">
        <span className="rounded-full bg-[#faf9f7] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#1a2b3c]">
          {item.badge}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <h3 className="font-[family-name:var(--font-barlow)] text-xl font-bold text-[#1a2b3c]">
          {item.name}
        </h3>
        <p className="mt-auto pt-4 font-[family-name:var(--font-barlow)] text-2xl font-extrabold text-[#1a2b3c]">
          {item.priceLabel ?? `$${item.price}`}
        </p>
        <Link
          href="/pack-diosa/contact"
          className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#1a2b3c] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0f1a24]"
        >
          Inquire Now
        </Link>
      </div>

      {/* Hover accent line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#c8aa6e] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function LadiesPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const prefersReduced = useReducedMotion() ?? false;

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  const filtered =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.tier === activeFilter);

  return (
    <main className="min-h-screen bg-[#faf9f7]">
      {/* ============================================================ */}
      {/*  HERO                                                         */}
      {/* ============================================================ */}
      <section
        ref={heroRef}
        className="relative flex min-h-[70vh] items-center overflow-hidden bg-[#0f1a24]"
      >
        <motion.div
          className="absolute inset-0"
          style={prefersReduced ? {} : { y: heroY }}
        >
          <img
            src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1600&q=80"
            alt="Ladies fashion collection"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f1a24]/70 via-[#0f1a24]/60 to-[#0f1a24]" />
        </motion.div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-32">
          <Link
            href="/pack-diosa"
            className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-[#c8aa6e]"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back to catalog
          </Link>

          <h1 className="font-[family-name:var(--font-barlow)] text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">
            {["Ladies", "Collection"].map((w, i) => (
              <HeroWord
                key={w}
                word={w}
                index={i}
                prefersReduced={prefersReduced}
              />
            ))}
          </h1>

          <motion.p
            className="mt-5 max-w-lg text-lg text-gray-300"
            initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            12 sub-categories from $150 to $450
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap gap-3"
            initial={prefersReduced ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-gray-300">
              12 Categories
            </span>
            <span className="rounded-full border border-[#c8aa6e]/40 bg-[#c8aa6e]/10 px-3 py-1 text-xs text-[#c8aa6e]">
              Most Popular
            </span>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  STICKY FILTER BAR                                            */}
      {/* ============================================================ */}
      <div className="sticky top-0 z-30 border-b border-gray-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-6 py-3">
          {filters.map((f) => {
            const isActive = activeFilter === f.key;
            return (
              <motion.button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`relative whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
                whileTap={{ scale: 0.96 }}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeFilter"
                    className="absolute inset-0 rounded-full bg-[#c8aa6e]"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 28,
                    }}
                  />
                )}
                <span className="relative z-10">
                  {f.label} ({getFilterCount(f.key)})
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* ============================================================ */}
      {/*  PRODUCT GRID                                                 */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <motion.div
          layout
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <ProductCardItem
                key={item.name}
                item={item}
                prefersReduced={prefersReduced}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-gray-400">
            No items in this price range.
          </p>
        )}
      </section>

      <WhatsAppButton />
    </main>
  );
}
