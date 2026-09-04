"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import Link from "next/link";

function RevealOnScroll({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const tiers = [
  {
    name: "Sheets #1",
    price: 225,
    tier: "Standard",
    desc: "Standard quality sheet sets at the lowest price point.",
    who: "New resellers, market vendors testing bedding",
    style: "standard" as const,
  },
  {
    name: "Sheets Premium",
    price: 300,
    tier: "Premium",
    desc: "Higher thread count, better materials, better condition.",
    who: "Retail stores, online resellers, boutique home goods",
    style: "premium" as const,
  },
  {
    name: "Sheets Color",
    price: 1800,
    tier: "Bulk Lot",
    desc: "Bulk quantity colored sheet lot for high-volume resellers.",
    who: "Established resellers with high inventory turnover",
    style: "bulk" as const,
  },
];

function TierBadge({ tier, style }: { tier: string; style: string }) {
  const classes =
    style === "premium"
      ? "bg-[#c8aa6e] text-white"
      : style === "bulk"
        ? "bg-[#1a2b3c] text-white"
        : "bg-[#1a2b3c]/10 text-[#1a2b3c]";

  return (
    <span
      className={`inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full ${classes}`}
    >
      {tier}
    </span>
  );
}

export default function SheetsPage() {
  const prefersReduced = useReducedMotion();

  return (
    <main className="min-h-screen bg-[#faf9f7]">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-[#1a2b3c]/80" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 80,
              damping: 18,
            }}
            className="text-5xl md:text-7xl font-bold text-white font-[family-name:var(--font-barlow)] mb-6"
          >
            Sheets &amp; Bedding
          </motion.h1>
          <motion.p
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-white/70 max-w-xl mx-auto"
          >
            Three options from $225 to $1,800. Standard, premium, and bulk.
          </motion.p>
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <Link
              href="/pack-diosa"
              className="text-[#c8aa6e] hover:text-[#d4ba82] transition-colors text-sm tracking-widest uppercase"
            >
              &larr; Back to All Categories
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tier Cards */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b3c] font-[family-name:var(--font-barlow)] text-center mb-4">
            Choose Your Tier
          </h2>
          <p className="text-[#1a2b3c]/50 text-center mb-16 max-w-lg mx-auto">
            From entry-level to bulk, we have a bedding option for every reseller
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {tiers.map((product, i) => (
            <RevealOnScroll key={product.name} delay={i * 0.15}>
              <div
                className={`rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-xl ${
                  product.style === "premium"
                    ? "border-2 border-[#c8aa6e] bg-white shadow-lg scale-[1.03]"
                    : product.style === "bulk"
                      ? "bg-[#1a2b3c] text-white shadow-lg"
                      : "border border-[#1a2b3c]/10 bg-white"
                }`}
              >
                {/* Header bar */}
                <div
                  className={`px-6 py-4 flex items-center justify-between ${
                    product.style === "premium"
                      ? "bg-gradient-to-r from-[#c8aa6e]/10 to-[#c8aa6e]/5"
                      : product.style === "bulk"
                        ? "bg-white/5"
                        : "bg-[#faf9f7]"
                  }`}
                >
                  <TierBadge tier={product.tier} style={product.style} />
                  {product.style === "premium" && (
                    <span className="text-[#c8aa6e] text-xs font-semibold">
                      Most Popular
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <h3
                    className={`text-xl font-bold font-[family-name:var(--font-barlow)] mb-2 ${
                      product.style === "bulk"
                        ? "text-white"
                        : "text-[#1a2b3c]"
                    }`}
                  >
                    {product.name}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-4 ${
                      product.style === "bulk"
                        ? "text-white/60"
                        : "text-[#1a2b3c]/60"
                    }`}
                  >
                    {product.desc}
                  </p>
                  <p
                    className={`text-xs mb-6 ${
                      product.style === "bulk"
                        ? "text-white/40"
                        : "text-[#1a2b3c]/40"
                    }`}
                  >
                    <span className="font-semibold text-[#c8aa6e]">
                      Best for:
                    </span>{" "}
                    {product.who}
                  </p>

                  <div className="flex items-end justify-between mb-6">
                    <div>
                      <span
                        className={`text-4xl font-bold font-[family-name:var(--font-barlow)] ${
                          product.style === "bulk"
                            ? "text-white"
                            : product.style === "premium"
                              ? "text-[#c8aa6e]"
                              : "text-[#1a2b3c]"
                        }`}
                      >
                        ${product.price.toLocaleString()}
                      </span>
                      <span
                        className={`text-xs ml-1 ${
                          product.style === "bulk"
                            ? "text-white/40"
                            : "text-[#1a2b3c]/40"
                        }`}
                      >
                        per lot
                      </span>
                    </div>
                  </div>

                  <Link
                    href="/pack-diosa/contact"
                    className={`inline-block w-full text-center py-3 rounded-lg text-sm font-semibold tracking-wide uppercase transition-all duration-300 ${
                      product.style === "premium"
                        ? "bg-[#c8aa6e] text-white hover:bg-[#d4ba82]"
                        : product.style === "bulk"
                          ? "bg-white text-[#1a2b3c] hover:bg-white/90"
                          : "bg-[#1a2b3c] text-white hover:bg-[#1a2b3c]/90"
                    }`}
                  >
                    Inquire Now
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Note Callout */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <RevealOnScroll>
          <div className="bg-gradient-to-r from-[#c8aa6e]/10 to-[#c8aa6e]/5 border border-[#c8aa6e]/30 rounded-xl p-8">
            <div className="flex gap-4">
              <div className="w-1 bg-[#c8aa6e] rounded-full flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-[#1a2b3c] font-[family-name:var(--font-barlow)] mb-2">
                  About the Bulk Lot
                </h3>
                <p className="text-[#1a2b3c]/60 text-sm leading-relaxed">
                  The Sheets Color lot at $1,800 is designed for established
                  resellers with high inventory turnover. It offers the best
                  per-unit cost and includes a large variety of colored sheet
                  sets. Contact us to discuss availability and shipping options
                  for bulk orders.
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* CTA */}
      <section className="bg-[#1a2b3c] py-16">
        <div className="max-w-3xl mx-auto text-center px-6">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold text-white font-[family-name:var(--font-barlow)] mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-white/50 mb-8">
              We can recommend the right tier based on your business size and
              goals.
            </p>
            <Link
              href="/pack-diosa/contact"
              className="inline-block bg-[#c8aa6e] hover:bg-[#d4ba82] text-white font-semibold py-3 px-10 rounded-lg transition-colors duration-300 tracking-wide uppercase text-sm"
            >
              Contact Us
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}
