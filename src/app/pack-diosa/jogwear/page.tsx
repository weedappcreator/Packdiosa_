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
    name: "Jogging Pants — Standard",
    price: 300,
    tag: "Standard",
    desc: "Classic-fit jogging pants in assorted sizes and colors. Solid seller year-round.",
    who: "Market vendors, casual clothing retailers",
    accent: "#1a2b3c",
    slideFrom: "left" as const,
  },
  {
    name: "Jogging Pants — Skinny Fit",
    price: 450,
    tag: "Slim Fit",
    desc: "Slim/skinny-fit joggers with tapered legs. Better materials, higher resale per unit.",
    who: "Streetwear retailers, online resellers, boutiques",
    accent: "#c8aa6e",
    slideFrom: "right" as const,
  },
];

const relatedCategories = [
  { name: "Men's Clothing", href: "/pack-diosa/men" },
  { name: "Ladies' Clothing", href: "/pack-diosa/ladies" },
  { name: "Specials", href: "/pack-diosa/specials" },
];

export default function JogwearPage() {
  const prefersReduced = useReducedMotion();

  return (
    <main className="min-h-screen bg-[#faf9f7]">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-[#1a2b3c]/85" />
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
            Jogwear
          </motion.h1>
          <motion.p
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-white/70 max-w-xl mx-auto"
          >
            Two styles: standard fit at $300 and skinny fit at $450.
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

      {/* VS Layout */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b3c] font-[family-name:var(--font-barlow)] text-center mb-16">
            Compare Styles
          </h2>
        </RevealOnScroll>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* VS Divider */}
          <div className="hidden md:flex absolute inset-y-0 left-1/2 -translate-x-1/2 z-20 items-center justify-center">
            <motion.div
              initial={prefersReduced ? {} : { scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.4,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              className="w-16 h-16 rounded-full bg-[#0f1a24] border-4 border-[#c8aa6e] flex items-center justify-center shadow-xl"
            >
              <span className="text-[#c8aa6e] font-bold text-sm font-[family-name:var(--font-barlow)]">
                VS
              </span>
            </motion.div>
          </div>

          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={
                prefersReduced
                  ? {}
                  : {
                      opacity: 0,
                      x: product.slideFrom === "left" ? -60 : 60,
                    }
              }
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.2,
                type: "spring",
                stiffness: 80,
                damping: 18,
              }}
              className={`${i === 0 ? "md:pr-8" : "md:pl-8"}`}
            >
              <motion.div
                whileHover={
                  prefersReduced
                    ? {}
                    : { y: -6, boxShadow: "0 20px 50px rgba(0,0,0,0.12)" }
                }
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="bg-white rounded-2xl overflow-hidden border border-[#1a2b3c]/10 shadow-sm"
              >
                {/* Accent bar */}
                <div
                  className="h-2 w-full"
                  style={{ backgroundColor: product.accent }}
                />

                <div className="p-8">
                  {/* Tag */}
                  <span
                    className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-6"
                    style={{
                      backgroundColor:
                        product.accent === "#c8aa6e"
                          ? "rgba(200,170,110,0.15)"
                          : "rgba(26,43,60,0.08)",
                      color: product.accent,
                    }}
                  >
                    {product.tag}
                  </span>

                  <h3 className="text-2xl font-bold text-[#1a2b3c] font-[family-name:var(--font-barlow)] mb-2">
                    {product.name}
                  </h3>

                  <p className="text-4xl font-bold font-[family-name:var(--font-barlow)] mb-1" style={{ color: product.accent }}>
                    ${product.price}
                  </p>
                  <p className="text-[#1a2b3c]/40 text-xs uppercase tracking-wider mb-6">
                    per lot
                  </p>

                  <p className="text-[#1a2b3c]/60 text-sm leading-relaxed mb-4">
                    {product.desc}
                  </p>

                  <p className="text-xs text-[#1a2b3c]/40 mb-8">
                    <span className="font-semibold text-[#c8aa6e]">
                      Best for:
                    </span>{" "}
                    {product.who}
                  </p>

                  <Link
                    href="/pack-diosa/contact"
                    className="inline-block w-full text-center py-3.5 rounded-lg font-semibold text-sm tracking-wide uppercase transition-all duration-300"
                    style={{
                      backgroundColor: product.accent,
                      color: "#fff",
                    }}
                  >
                    Inquire Now
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Mobile VS indicator */}
        <div className="flex md:hidden items-center justify-center my-8">
          <div className="w-14 h-14 rounded-full bg-[#0f1a24] border-4 border-[#c8aa6e] flex items-center justify-center shadow-lg">
            <span className="text-[#c8aa6e] font-bold text-sm font-[family-name:var(--font-barlow)]">
              VS
            </span>
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <RevealOnScroll>
          <h3 className="text-xl font-bold text-[#1a2b3c] font-[family-name:var(--font-barlow)] text-center mb-8">
            Related Categories
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
              Ready to Stock Up?
            </h2>
            <p className="text-white/50 mb-8">
              Get in touch to order or ask about sizing and availability.
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
