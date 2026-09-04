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

const premiumItems = [
  {
    name: "Baby Premium",
    price: 500,
    desc: "Hand-inspected baby clothing — modern pieces in excellent condition.",
    image:
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=600&q=80",
  },
  {
    name: "Ladies Premium",
    price: 500,
    desc: "Curated ladies fashion — trending styles, name-brand pieces, top-tier condition.",
    image:
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&q=80",
  },
  {
    name: "Men Premium",
    price: 500,
    desc: "Quality men's casual and formal wear. Brand-name selections inspected individually.",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&q=80",
  },
];

/* ------------------------------------------------------------------ */
/*  Subcomponents                                                      */
/* ------------------------------------------------------------------ */

function PremiumCard({
  item,
  index,
  prefersReduced,
}: {
  item: (typeof premiumItems)[number];
  index: number;
  prefersReduced: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.div
      ref={cardRef}
      className={`grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] lg:grid-cols-5 ${
        index !== 0 ? "mt-10" : ""
      }`}
      initial={prefersReduced ? {} : { opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        type: "spring",
        stiffness: 70,
      }}
    >
      {/* Image — 40% */}
      <div
        ref={imgRef}
        className="relative aspect-[4/3] overflow-hidden lg:col-span-2 lg:aspect-auto lg:min-h-[320px]"
      >
        <motion.img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover"
          loading="lazy"
          style={prefersReduced ? {} : { y: imgY }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f1a24]/40 lg:bg-gradient-to-l" />
      </div>

      {/* Content — 60% */}
      <div className="flex flex-col justify-center px-8 py-10 lg:col-span-3 lg:px-12 lg:py-14">
        <span className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#c8aa6e]">
          Premium Collection
        </span>
        <h3 className="font-[family-name:var(--font-barlow)] text-3xl font-bold text-white lg:text-4xl">
          {item.name}
        </h3>
        <p className="mt-4 max-w-md text-base leading-relaxed text-gray-400">
          {item.desc}
        </p>
        <p className="mt-6 font-[family-name:var(--font-barlow)] text-4xl font-extrabold text-white">
          ${item.price}
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
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function PremiumPage() {
  const prefersReduced = useReducedMotion() ?? false;

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);

  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaVisible = useInView(ctaRef, { once: true, margin: "-60px" });

  return (
    <main className="min-h-screen bg-[#0f1a24]">
      {/* ============================================================ */}
      {/*  CINEMATIC HERO                                               */}
      {/* ============================================================ */}
      <section
        ref={heroRef}
        className="relative flex min-h-[90vh] items-center overflow-hidden"
      >
        <motion.div
          className="absolute inset-0"
          style={prefersReduced ? {} : { y: heroY }}
        >
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80"
            alt="Premium retail store"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f1a24]/80 via-[#0f1a24]/70 to-[#0f1a24]" />
        </motion.div>

        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-32 text-center">
          <Link
            href="/pack-diosa"
            className="mb-10 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-[#c8aa6e]"
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

          {/* Gold pill */}
          <motion.span
            className="inline-block rounded-full border border-[#c8aa6e]/40 bg-[#c8aa6e]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#c8aa6e]"
            animate={prefersReduced ? {} : { opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            Premium Collection
          </motion.span>

          {/* Gold gradient headline */}
          <motion.h1
            className="mt-8 font-[family-name:var(--font-barlow)] text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl"
            style={{
              background:
                "linear-gradient(135deg, #c8aa6e 0%, #e8d5a8 40%, #c8aa6e 70%, #a08850 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.7,
              type: "spring",
              stiffness: 60,
            }}
          >
            Premium Collection
          </motion.h1>

          <motion.p
            className="mx-auto mt-5 max-w-lg text-lg text-gray-400"
            initial={prefersReduced ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Baby, Ladies, and Men. Hand-selected, individually inspected.
          </motion.p>

          {/* Animated price */}
          <motion.div
            className="mt-10 inline-flex items-baseline gap-2"
            initial={prefersReduced ? {} : { scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9, type: "spring", stiffness: 100 }}
          >
            <span className="font-[family-name:var(--font-barlow)] text-6xl font-extrabold text-white sm:text-7xl">
              $500
            </span>
            <span className="text-lg text-gray-400">each</span>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PRODUCT CARDS — LARGE HORIZONTAL                             */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-5xl px-6 py-20 lg:py-28">
        {premiumItems.map((item, i) => (
          <PremiumCard
            key={item.name}
            item={item}
            index={i}
            prefersReduced={prefersReduced}
          />
        ))}
      </section>

      {/* ============================================================ */}
      {/*  CTA BANNER                                                   */}
      {/* ============================================================ */}
      <section className="border-t border-white/10">
        <motion.div
          ref={ctaRef}
          className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-32"
          initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
          animate={ctaVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-[family-name:var(--font-barlow)] text-3xl font-bold text-white sm:text-4xl">
            All Premium Items —{" "}
            <span className="text-[#c8aa6e]">$500</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Baby, Ladies, and Men. One price, maximum quality.
          </p>
          <Link
            href="/pack-diosa/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#c8aa6e] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#d4ba82]"
          >
            Get Started
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
      </section>

      <WhatsAppButton />
    </main>
  );
}
