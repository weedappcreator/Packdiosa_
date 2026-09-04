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
    name: "Baby Modern",
    price: 350,
    desc: "Current-season baby clothing, newborn to 24 months. Includes bodysuits, outfit sets, and seasonal pieces.",
    who: "Children's boutiques, baby store owners",
    image:
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400&q=80",
    premium: false,
  },
  {
    name: "Baby Light",
    price: 300,
    desc: "Lightweight baby clothing — breathable cotton and blends for warm climates or year-round basics.",
    who: "Market vendors, warm-climate retailers",
    image:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&q=80",
    premium: false,
  },
  {
    name: "Children Light",
    price: 300,
    desc: "Lightweight children's clothing for ages 2 through 10. Casual play-ready pieces, assorted sizes.",
    who: "Children's clothing retailers, flea market vendors",
    image:
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=400&q=80",
    premium: false,
  },
  {
    name: "Baby #2 (Gwo Bal)",
    price: 700,
    subtitle: "Gwo Bal",
    desc: "Large bundle — highest quantity baby lot we carry. More items per dollar than any other baby option.",
    who: "High-volume resellers, established baby clothing vendors",
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&q=80",
    premium: true,
  },
];

export default function BabyPage() {
  const prefersReduced = useReducedMotion();
  const headlineWords = ["Baby", "&", "Children"];

  return (
    <main className="min-h-screen bg-[#faf9f7]">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1522771930-78848d9293e8?w=1600&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2b3c]/80 via-[#1a2b3c]/70 to-[#0f1a24]/90" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            {headlineWords.map((word, i) => (
              <motion.span
                key={word}
                initial={prefersReduced ? {} : { opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + i * 0.15,
                  type: "spring",
                  stiffness: 80,
                  damping: 18,
                }}
                className="text-5xl md:text-7xl font-bold text-white font-[family-name:var(--font-barlow)]"
              >
                {word}
              </motion.span>
            ))}
          </div>
          <motion.p
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg md:text-xl text-[#faf9f7]/80 max-w-2xl mx-auto"
          >
            4 lot options from $300 to $700. Newborn through age 10.
          </motion.p>
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
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

      {/* Product Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b3c] font-[family-name:var(--font-barlow)] text-center mb-4">
            Available Lots
          </h2>
          <p className="text-[#1a2b3c]/60 text-center mb-14 max-w-xl mx-auto">
            Choose from four carefully curated baby and children clothing lots
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, i) => (
            <RevealOnScroll key={product.name} delay={i * 0.12}>
              <motion.div
                whileHover={prefersReduced ? {} : { scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 ${
                  product.premium
                    ? "ring-2 ring-[#c8aa6e] shadow-[0_0_30px_rgba(200,170,110,0.15)]"
                    : "border border-[#1a2b3c]/10"
                }`}
              >
                {/* Image section */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {product.premium && (
                    <div className="absolute top-4 right-4 bg-[#c8aa6e] text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
                      Premium
                    </div>
                  )}
                  <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 pt-2">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-[#1a2b3c] font-[family-name:var(--font-barlow)]">
                        {product.name}
                      </h3>
                      {product.subtitle && (
                        <span className="text-[#c8aa6e] text-sm font-medium">
                          {product.subtitle}
                        </span>
                      )}
                    </div>
                    <span className="text-2xl font-bold text-[#1a2b3c]">
                      ${product.price}
                    </span>
                  </div>
                  <p className="text-[#1a2b3c]/70 text-sm leading-relaxed mb-4">
                    {product.desc}
                  </p>
                  <p className="text-xs text-[#1a2b3c]/50 mb-5">
                    <span className="font-semibold text-[#c8aa6e]">
                      Best for:
                    </span>{" "}
                    {product.who}
                  </p>
                  <Link
                    href="/pack-diosa/contact"
                    className={`inline-block w-full text-center py-3 rounded-lg text-sm font-semibold tracking-wide uppercase transition-all duration-300 ${
                      product.premium
                        ? "bg-[#c8aa6e] text-white hover:bg-[#d4ba82]"
                        : "bg-[#1a2b3c] text-white hover:bg-[#1a2b3c]/90"
                    }`}
                  >
                    Inquire Now
                  </Link>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Summary */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RevealOnScroll delay={0}>
            <div className="bg-[#1a2b3c] rounded-2xl p-8 text-center">
              <p className="text-[#c8aa6e] text-sm tracking-widest uppercase font-semibold mb-2">
                Standard Lots
              </p>
              <p className="text-4xl font-bold text-white font-[family-name:var(--font-barlow)] mb-2">
                $300 &ndash; $350
              </p>
              <p className="text-white/60 text-sm">
                3 options for baby and children clothing
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <div className="bg-gradient-to-br from-[#c8aa6e]/20 to-[#c8aa6e]/5 border-2 border-[#c8aa6e] rounded-2xl p-8 text-center">
              <p className="text-[#c8aa6e] text-sm tracking-widest uppercase font-semibold mb-2">
                Large Bundle
              </p>
              <p className="text-4xl font-bold text-[#1a2b3c] font-[family-name:var(--font-barlow)] mb-2">
                $700
              </p>
              <p className="text-[#1a2b3c]/60 text-sm">
                Baby #2 Gwo Bal — maximum quantity per dollar
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a2b3c] py-16">
        <div className="max-w-3xl mx-auto text-center px-6">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold text-white font-[family-name:var(--font-barlow)] mb-4">
              Ready to Order?
            </h2>
            <p className="text-white/60 mb-8">
              Contact us to place an order or ask about current availability.
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
