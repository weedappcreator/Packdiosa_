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

const relatedCategories = [
  { name: "Ladies' Clothing", href: "/pack-diosa/ladies" },
  { name: "Men's Clothing", href: "/pack-diosa/men" },
  { name: "Baby & Children", href: "/pack-diosa/baby" },
  { name: "Specials", href: "/pack-diosa/specials" },
];

export default function UndergarmentPage() {
  const prefersReduced = useReducedMotion();

  return (
    <main className="min-h-screen bg-[#faf9f7]">
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80)",
            opacity: 0.15,
          }}
        />
        <div className="absolute inset-0 bg-[#1a2b3c]" style={{ opacity: 0.95 }} />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 80,
              damping: 18,
            }}
          >
            <p className="text-[#c8aa6e] text-sm tracking-[0.3em] uppercase mb-4 font-semibold">
              Single Lot Available
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white font-[family-name:var(--font-barlow)] mb-6">
              Undergarments
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-md mx-auto">
              Single lot option at $175.
            </p>
          </motion.div>
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

      {/* Single Product Card — Centered Large Format */}
      <section className="max-w-2xl mx-auto px-6 py-24">
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 80,
            damping: 18,
          }}
          className="bg-white rounded-3xl overflow-hidden border border-[#1a2b3c]/10 shadow-lg"
        >
          {/* Navy gradient bar */}
          <div className="h-2 bg-gradient-to-r from-[#1a2b3c] via-[#c8aa6e] to-[#1a2b3c]" />

          <div className="p-10 md:p-14 text-center">
            <span className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full bg-[#1a2b3c]/8 text-[#1a2b3c] mb-8">
              Single Option
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b3c] font-[family-name:var(--font-barlow)] mb-6">
              Mixed Undergarments Lot
            </h2>

            <p className="text-[#1a2b3c]/60 text-base leading-relaxed max-w-md mx-auto mb-10">
              Assorted undergarments in mixed sizes and styles. Includes men's
              and women's basics — boxers, briefs, bras, and undershirts. Ideal
              for market vendors and budget-conscious resellers looking for
              consistent, everyday inventory.
            </p>

            {/* Price */}
            <div className="mb-10">
              <motion.p
                initial={prefersReduced ? {} : { scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 120,
                  damping: 12,
                }}
                className="text-6xl md:text-7xl font-bold text-[#1a2b3c] font-[family-name:var(--font-barlow)]"
              >
                $175
              </motion.p>
              <p className="text-[#1a2b3c]/40 text-sm tracking-widest uppercase mt-2">
                per lot
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-10 max-w-sm mx-auto text-left">
              {[
                "Mixed sizes",
                "Men's & women's",
                "Budget-friendly",
                "Market-ready",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c8aa6e] flex-shrink-0" />
                  <span className="text-[#1a2b3c]/60 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              href="/pack-diosa/contact"
              className="inline-block bg-[#c8aa6e] hover:bg-[#d4ba82] text-white font-semibold py-4 px-14 rounded-lg transition-colors duration-300 tracking-wide uppercase text-sm"
            >
              Inquire Now
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Related Categories */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <RevealOnScroll>
          <h3 className="text-xl font-bold text-[#1a2b3c] font-[family-name:var(--font-barlow)] text-center mb-8">
            Explore Other Categories
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {relatedCategories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="px-6 py-3 rounded-lg border border-[#1a2b3c]/15 text-[#1a2b3c] text-sm font-medium hover:border-[#c8aa6e] hover:text-[#c8aa6e] transition-colors duration-300"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      {/* CTA */}
      <section className="bg-[#1a2b3c] py-16">
        <div className="max-w-3xl mx-auto text-center px-6">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold text-white font-[family-name:var(--font-barlow)] mb-4">
              Interested in This Lot?
            </h2>
            <p className="text-white/50 mb-8">
              Reach out to check availability or place an order.
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
