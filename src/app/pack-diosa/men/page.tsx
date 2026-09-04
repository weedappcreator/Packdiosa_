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

const menProducts = [
  {
    name: "Men T-Shirt",
    price: 250,
    desc: "Mixed styles — casual, streetwear, assorted brands. Sizes S-XXL.",
    features: [
      "Mixed brands & styles",
      "Sizes S-XXL",
      "Casual & streetwear",
      "High turnover item",
    ],
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&q=80",
  },
  {
    name: "Mix Brands Outlet",
    price: 450,
    desc: "Brand-name outlet pieces — recognizable labels, better condition, higher retail margins.",
    features: [
      "Name-brand items",
      "Outlet-grade quality",
      "Higher resale value",
      "Mixed casual & formal",
    ],
    image:
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600&q=80",
  },
];

/* ------------------------------------------------------------------ */
/*  Subcomponents                                                      */
/* ------------------------------------------------------------------ */

function ComparisonCard({
  item,
  index,
  prefersReduced,
}: {
  item: (typeof menProducts)[number];
  index: number;
  prefersReduced: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gray-200/60"
      initial={
        prefersReduced ? {} : { opacity: 0, x: index === 0 ? -50 : 50 }
      }
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.7,
        type: "spring",
        stiffness: 60,
        delay: index * 0.15,
      }}
    >
      {/* Tall image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#1a2b3c] backdrop-blur-sm">
          ${item.price}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-[family-name:var(--font-barlow)] text-2xl font-bold text-[#1a2b3c]">
          {item.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-500">
          {item.desc}
        </p>

        {/* Features */}
        <ul className="mt-5 space-y-2.5">
          {item.features.map((feat) => (
            <li
              key={feat}
              className="flex items-start gap-2.5 text-sm text-gray-600"
            >
              <svg
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#c8aa6e]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feat}
            </li>
          ))}
        </ul>

        {/* Price + CTA */}
        <div className="mt-auto pt-7">
          <p className="font-[family-name:var(--font-barlow)] text-3xl font-extrabold text-[#1a2b3c]">
            ${item.price}
            <span className="ml-1 text-sm font-normal text-gray-400">
              per lot
            </span>
          </p>
          <Link
            href="/pack-diosa/contact"
            className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#1a2b3c] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0f1a24]"
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
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function MenPage() {
  const prefersReduced = useReducedMotion() ?? false;

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <main className="min-h-screen bg-[#faf9f7]">
      {/* ============================================================ */}
      {/*  SPLIT HERO                                                   */}
      {/* ============================================================ */}
      <section ref={heroRef} className="relative overflow-hidden bg-[#1a2b3c]">
        <div className="grid lg:grid-cols-2">
          {/* Left — text */}
          <div className="flex flex-col justify-center px-8 py-24 lg:px-16 lg:py-32">
            <Link
              href="/pack-diosa"
              className="mb-8 inline-flex w-fit items-center gap-2 text-sm text-gray-400 transition-colors hover:text-[#c8aa6e]"
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

            <motion.h1
              className="font-[family-name:var(--font-barlow)] text-5xl font-extrabold leading-tight text-white sm:text-6xl"
              initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 80,
              }}
            >
              Men&apos;s Collection
            </motion.h1>

            <motion.p
              className="mt-5 max-w-md text-lg text-gray-300"
              initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              T-shirts and brand outlet mix — $250 to $450 per lot.
            </motion.p>

            <motion.div
              className="mt-8 flex items-center gap-4 text-sm text-gray-400"
              initial={prefersReduced ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c8aa6e]" />
                2 Options
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c8aa6e]" />
                Wholesale Lots
              </span>
            </motion.div>
          </div>

          {/* Right — image with parallax */}
          <div className="relative hidden min-h-[500px] overflow-hidden lg:block">
            <motion.img
              src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=1600&q=80"
              alt="Men's clothing"
              className="h-full w-full object-cover"
              style={prefersReduced ? {} : { y: heroY }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a2b3c] to-transparent" />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SIDE BY SIDE COMPARISON                                      */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-5xl px-6 py-20 lg:py-28">
        <motion.p
          className="mb-10 text-center text-sm font-medium uppercase tracking-widest text-gray-400"
          initial={prefersReduced ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Compare options
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2">
          {menProducts.map((item, i) => (
            <ComparisonCard
              key={item.name}
              item={item}
              index={i}
              prefersReduced={prefersReduced}
            />
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/*  BOTTOM CTA                                                   */}
      {/* ============================================================ */}
      <section className="bg-[#1a2b3c]">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:py-24">
          <h2 className="font-[family-name:var(--font-barlow)] text-3xl font-bold text-white">
            Ready to order?
          </h2>
          <p className="mt-3 text-gray-400">
            Contact us for availability, bulk pricing, and shipping details.
          </p>
          <Link
            href="/pack-diosa/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#c8aa6e] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#d4ba82]"
          >
            Contact Us
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
      </section>

      <WhatsAppButton />
    </main>
  );
}
