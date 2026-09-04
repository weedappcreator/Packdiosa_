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

const pallets = [
  {
    name: "Baby Pallet",
    price: 3300,
    desc: "Full pallet of baby clothing and accessories sourced from Target.",
    includes: [
      "Onesies & bodysuits",
      "Outfit sets",
      "Seasonal items",
      "Newborn to 24 months",
    ],
    buyerTip:
      "Popular with children's boutique owners and market vendors.",
    image:
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=300&q=80",
  },
  {
    name: "Shoes Pallet",
    price: 2300,
    desc: "Lowest-priced pallet option. Mixed footwear from Target inventory.",
    includes: [
      "Men's & women's shoes",
      "Kids' footwear",
      "Athletic & casual",
      "Assorted sizes",
    ],
    buyerTip:
      "Best entry-level pallet. Strong seller at flea markets.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80",
  },
  {
    name: "Accessories Pallet",
    price: 3000,
    desc: "Jewelry, bags, fashion accessories from Target. Retail-ready packaging.",
    includes: [
      "Jewelry & watches",
      "Bags & purses",
      "Hats, scarves, belts",
      "Retail-ready packaging",
    ],
    buyerTip:
      "High margins on individual resale. Works well for online sellers.",
    image:
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=300&q=80",
  },
  {
    name: "Men Pallet",
    price: 2500,
    desc: "Men's apparel pallet with t-shirts, polos, casual pants, and outerwear.",
    includes: [
      "T-shirts & polos",
      "Casual pants",
      "Outerwear pieces",
      "Sizes S to XXL",
    ],
    buyerTip:
      "Pairs well with our Men's T-Shirt lots ($250) for complete inventory.",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=300&q=80",
  },
];

export default function PalletsPage() {
  const prefersReduced = useReducedMotion();

  return (
    <main className="min-h-screen bg-[#faf9f7]">
      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1553413077-190dd305871c?w=1600&q=80)",
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
            Pallet Goods
          </motion.h1>
          <motion.p
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-white/70 max-w-xl mx-auto mb-8"
          >
            4 pallet types, $2,300 to $3,300. All sourced from Target.
          </motion.p>

          {/* Badges */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full">
              4 Pallet Types
            </span>
            <span className="bg-[#c8aa6e]/20 border border-[#c8aa6e]/40 text-[#c8aa6e] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full">
              Target Merchandise
            </span>
          </motion.div>

          <motion.div
            initial={prefersReduced ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10"
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

      {/* Pallet Cards Grid */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b3c] font-[family-name:var(--font-barlow)] text-center mb-4">
            Available Pallets
          </h2>
          <p className="text-[#1a2b3c]/50 text-center mb-16 max-w-lg mx-auto">
            Full pallets of Target merchandise, ready for resale
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pallets.map((pallet, i) => (
            <RevealOnScroll key={pallet.name} delay={i * 0.12}>
              <motion.div
                whileHover={
                  prefersReduced
                    ? {}
                    : { y: -6, boxShadow: "0 20px 50px rgba(0,0,0,0.1)" }
                }
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="bg-white rounded-2xl overflow-hidden border border-[#1a2b3c]/10 shadow-sm group"
              >
                {/* Image strip */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={pallet.image}
                    alt={pallet.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-[#1a2b3c] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    ${pallet.price.toLocaleString()}
                  </div>
                </div>

                <div className="p-6 pt-2">
                  <h3 className="text-2xl font-bold text-[#1a2b3c] font-[family-name:var(--font-barlow)] mb-2">
                    {pallet.name}
                  </h3>
                  <p className="text-[#1a2b3c]/60 text-sm leading-relaxed mb-5">
                    {pallet.desc}
                  </p>

                  {/* What's included */}
                  <div className="mb-5">
                    <p className="text-xs font-bold tracking-widest uppercase text-[#1a2b3c]/40 mb-3">
                      What&apos;s in the pallet
                    </p>
                    <ul className="space-y-2">
                      {pallet.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2.5 text-sm text-[#1a2b3c]/70"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#c8aa6e] flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Buyer tip */}
                  <p className="text-xs italic text-[#1a2b3c]/40 mb-6">
                    {pallet.buyerTip}
                  </p>

                  <Link
                    href="/pack-diosa/contact"
                    className="inline-block w-full text-center py-3 rounded-lg bg-[#1a2b3c] text-white font-semibold text-sm tracking-wide uppercase hover:bg-[#1a2b3c]/90 transition-colors duration-300"
                  >
                    Inquire Now
                  </Link>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Info Box */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <RevealOnScroll>
          <div className="bg-[#1a2b3c] rounded-2xl p-8 md:p-10">
            <div className="flex gap-5">
              <div className="w-1 bg-[#c8aa6e] rounded-full flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-white font-[family-name:var(--font-barlow)] mb-3">
                  All Pallets Are Target-Sourced
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-2">
                  Every pallet contains merchandise sourced directly from Target
                  inventory. Items include overstock, shelf pulls, and customer
                  returns in excellent condition. Manifests may be available on
                  request.
                </p>
                <p className="text-white/50 text-sm leading-relaxed">
                  Pallets ship from our warehouse. Contact us for shipping
                  estimates and lead times.
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
              Ready to Order a Pallet?
            </h2>
            <p className="text-white/50 mb-8">
              Contact us to discuss availability, shipping, and manifests.
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
