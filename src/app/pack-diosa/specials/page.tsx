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

const products = [
  {
    name: "Mix Pepe",
    price: 550,
    desc: "Mixed pepe variety lot — diverse merchandise across categories. A staple for market vendors.",
  },
  {
    name: "Baby #2 (Gwo Bal)",
    price: 700,
    desc: "Large-bundle baby lot with maximum quantity per purchase. One of our most requested specials.",
  },
  {
    name: "Zaza Special",
    price: 450,
    desc: "Zaza selection at a lower entry point than the full Zaza Container ($12,000). Test the line before committing.",
  },
];

export default function SpecialsPage() {
  const prefersReduced = useReducedMotion();

  return (
    <main className="min-h-screen bg-[#0f1a24]">
      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-[#0f1a24]/85" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 80,
              damping: 20,
            }}
          >
            <p className="text-[#c8aa6e] text-sm tracking-[0.3em] uppercase mb-4 font-semibold">
              Limited Selection
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white font-[family-name:var(--font-barlow)] mb-6">
              Specials &mdash; Bal P&eacute;p&egrave;
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto">
              Mixed lots and special selections, $450 to $700.
            </p>
          </motion.div>
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
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

      {/* Cards */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <RevealOnScroll key={product.name} delay={i * 0.15}>
              <motion.div
                whileHover={
                  prefersReduced
                    ? {}
                    : { y: -4, boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }
                }
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="bg-[#1a2b3c] rounded-2xl overflow-hidden border border-white/5 hover:border-[#c8aa6e]/30 transition-colors duration-300"
              >
                {/* Gold gradient bar */}
                <div className="h-1.5 bg-gradient-to-r from-[#c8aa6e] via-[#d4ba82] to-[#c8aa6e]" />

                <div className="p-8">
                  <p className="text-4xl font-bold text-[#1a2b3c] font-[family-name:var(--font-barlow)] mb-1">
                    <span className="text-white">${product.price}</span>
                  </p>
                  <p className="text-[#c8aa6e] text-xs tracking-widest uppercase font-semibold mb-6">
                    per lot
                  </p>

                  <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-barlow)] mb-4">
                    {product.name}
                  </h3>

                  <p className="text-white/50 text-sm leading-relaxed mb-8">
                    {product.desc}
                  </p>

                  <Link
                    href="/pack-diosa/contact"
                    className="inline-block w-full text-center py-3.5 rounded-lg bg-[#c8aa6e] hover:bg-[#d4ba82] text-white font-semibold text-sm tracking-wide uppercase transition-colors duration-300"
                  >
                    Inquire Now
                  </Link>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#1a2b3c] py-20">
        <div className="max-w-3xl mx-auto text-center px-6">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-barlow)] mb-4">
              Not sure which lot is right for you?
            </h2>
            <p className="text-white/50 mb-10 max-w-lg mx-auto">
              Our team can help you choose the right special based on your
              market, budget, and resale goals.
            </p>
            <Link
              href="/pack-diosa/contact"
              className="inline-block bg-[#c8aa6e] hover:bg-[#d4ba82] text-white font-semibold py-4 px-14 rounded-lg transition-colors duration-300 tracking-wide uppercase text-sm"
            >
              Contact Us
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}
