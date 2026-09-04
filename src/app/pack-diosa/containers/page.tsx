"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useReducedMotion,
} from "motion/react";
import { WhatsAppButton } from "../components";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const containers = [
  {
    name: "Ladies Target",
    price: 1500,
    badge: null,
    tier: "entry" as const,
    desc: "Entry-level container for retail startups and small resellers. Curated ladies merchandise.",
    image:
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80",
  },
  {
    name: "Zaza Container",
    price: 12000,
    badge: "Limited",
    tier: "premium" as const,
    desc: "High-demand Zaza selection. Limited availability each season — reserve early.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    name: "Georgia Container",
    price: 15000,
    badge: null,
    tier: "premium" as const,
    desc: "Standard quality Georgia selection. Consistent inventory for established resellers.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
  },
  {
    name: "Special Kalite Container",
    price: 18500,
    badge: "Limited",
    tier: "premium" as const,
    desc: "Our highest-grade curation. Every item hand-selected for condition and resale value.",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
  },
  {
    name: "Mix Shoes Container",
    price: 16000,
    badge: null,
    tier: "premium" as const,
    desc: "Diverse footwear across brands, styles, and sizes. Men's and women's mixed.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
  },
];

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
      initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3 + index * 0.15,
        duration: 0.6,
        type: "spring",
        stiffness: 80,
      }}
    >
      {word}&nbsp;
    </motion.span>
  );
}

function ContainerRow({
  item,
  index,
  prefersReduced,
}: {
  item: (typeof containers)[number];
  index: number;
  prefersReduced: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const imageLeft = index % 2 === 0;

  const imageBlock = (
    <motion.div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:aspect-auto lg:h-full lg:min-h-[380px]"
      initial={
        prefersReduced ? {} : { opacity: 0, x: imageLeft ? -60 : 60 }
      }
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, type: "spring", stiffness: 60 }}
    >
      <img
        src={item.image}
        alt={item.name}
        className="h-full w-full object-cover"
        loading="lazy"
      />
      {item.badge && (
        <motion.span
          className="absolute right-4 top-4 rounded-full bg-[#c8aa6e] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white"
          animate={prefersReduced ? {} : { scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          {item.badge}
        </motion.span>
      )}
    </motion.div>
  );

  const contentBlock = (
    <motion.div
      className="flex flex-col justify-center py-6 lg:py-12"
      initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {item.tier === "premium" && (
        <div className="mb-4 h-1 w-12 rounded-full bg-[#c8aa6e]" />
      )}
      <span className="mb-2 text-xs font-medium uppercase tracking-widest text-[#c8aa6e]">
        {item.tier === "premium" ? "Premium Tier" : "Entry Level"}
      </span>
      <h3 className="font-[family-name:var(--font-barlow)] text-3xl font-bold text-white lg:text-4xl">
        {item.name}
      </h3>
      <p className="mt-3 text-lg text-gray-300">{item.desc}</p>
      <p className="mt-5 font-[family-name:var(--font-barlow)] text-4xl font-extrabold text-white">
        ${item.price.toLocaleString()}
      </p>
      <Link
        href="/pack-diosa/contact"
        className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-[#c8aa6e] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#d4ba82]"
      >
        Inquire Now
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
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>
    </motion.div>
  );

  return (
    <div
      ref={ref}
      className={`grid gap-8 lg:grid-cols-2 lg:gap-12 ${
        index !== 0
          ? "mt-16 border-t border-white/10 pt-16 lg:mt-20 lg:pt-20"
          : ""
      }`}
    >
      {imageLeft ? (
        <>
          {imageBlock}
          {contentBlock}
        </>
      ) : (
        <>
          <div className="order-2 lg:order-1">{contentBlock}</div>
          <div className="order-1 lg:order-2">{imageBlock}</div>
        </>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ContainersPage() {
  const prefersReduced = useReducedMotion() ?? false;

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const headlineWords = ["Container", "Services"];

  return (
    <main className="min-h-screen bg-[#0f1a24]">
      {/* ============================================================ */}
      {/*  HERO                                                         */}
      {/* ============================================================ */}
      <section
        ref={heroRef}
        className="relative flex min-h-[85vh] items-center overflow-hidden"
      >
        <motion.div
          className="absolute inset-0"
          style={prefersReduced ? {} : { y: heroY }}
        >
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80"
            alt="Warehouse containers"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f1a24]/80 via-[#0f1a24]/70 to-[#0f1a24]" />
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
            {headlineWords.map((w, i) => (
              <HeroWord
                key={w}
                word={w}
                index={i}
                prefersReduced={prefersReduced}
              />
            ))}
          </h1>

          <motion.p
            className="mt-5 max-w-xl text-lg text-gray-300 sm:text-xl"
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            From $1,500 to $18,500 — full containers for wholesale
            distribution.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-6 text-sm text-gray-400"
            initial={prefersReduced ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c8aa6e]" />
              5 Container Types
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c8aa6e]" />
              Wholesale Pricing
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c8aa6e]" />
              2 Limited Availability
            </span>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PRODUCTS — ALTERNATING ROWS                                  */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        {containers.map((item, i) => (
          <ContainerRow
            key={item.name}
            item={item}
            index={i}
            prefersReduced={prefersReduced}
          />
        ))}
      </section>

      {/* ============================================================ */}
      {/*  TIER SUMMARY                                                 */}
      {/* ============================================================ */}
      <section className="border-t border-white/10 bg-[#0f1a24]">
        <div className="mx-auto grid max-w-4xl gap-6 px-6 py-20 sm:grid-cols-2 lg:py-28">
          <motion.div
            className="rounded-2xl border border-white/10 bg-white/5 p-8"
            initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-medium uppercase tracking-widest text-gray-400">
              Entry Level
            </span>
            <h3 className="mt-3 font-[family-name:var(--font-barlow)] text-2xl font-bold text-white">
              From $1,500
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Ideal for retail startups and small resellers entering the
              wholesale market.
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-[#c8aa6e]/30 bg-[#c8aa6e]/5 p-8"
            initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <span className="text-xs font-medium uppercase tracking-widest text-[#c8aa6e]">
              Premium Tier
            </span>
            <h3 className="mt-3 font-[family-name:var(--font-barlow)] text-2xl font-bold text-white">
              $12,000 — $18,500
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              High-grade curations for established resellers. Select items,
              higher margins.
            </p>
            <div className="mt-4 h-0.5 w-full rounded-full bg-gradient-to-r from-[#c8aa6e] to-transparent" />
          </motion.div>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  );
}
