"use client";

import Link from "next/link";
import { useScrollReveal } from "../hooks";
import { ProductCard } from "../components";

const pallets = [
  { name: "Baby Pallet", price: 3300, desc: "Full pallet of baby clothing and accessories sourced from Target. Mixed sizes (newborn to 24 months), assorted styles. Includes onesies, sets, and seasonal items.", includes: ["Onesies & bodysuits", "Outfit sets", "Seasonal items", "Newborn to 24 months"], buyerTip: "Popular with children's boutique owners and market vendors." },
  { name: "Shoes Pallet", price: 2300, desc: "Lowest-priced pallet option. Mixed footwear across men's, women's, and kids from Target inventory. Multiple brands, styles from casual to athletic.", includes: ["Men's & women's shoes", "Kids' footwear", "Athletic & casual", "Assorted sizes"], buyerTip: "Best entry-level pallet. Strong seller at flea markets." },
  { name: "Accessories Pallet", price: 3000, desc: "Jewelry, bags, fashion accessories, and more. Target-sourced items with retail-ready packaging. Good margin category for display-based retail.", includes: ["Jewelry & watches", "Bags & purses", "Hats, scarves, belts", "Retail-ready packaging"], buyerTip: "High margins on individual resale. Works well for online sellers." },
  { name: "Men Pallet", price: 2500, desc: "Men's apparel pallet with t-shirts, polos, casual pants, and outerwear. Target brand mix. Sizes S through XXL across the lot.", includes: ["T-shirts & polos", "Casual pants", "Outerwear pieces", "Sizes S to XXL"], buyerTip: "Pairs well with our Men's T-Shirt lots ($250) for complete inventory." },
];

export default function PalletsPage() {
  const hero = useScrollReveal();

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-[#1a2b3c]">
        <div className="absolute inset-0"><img src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1600&q=80" alt="" className="h-full w-full object-cover opacity-20" /></div>
        <div ref={hero.ref} style={hero.style} className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
          <Link href="/pack-diosa" className="mb-6 inline-flex items-center gap-2 text-xs font-medium text-white/50 hover:text-white/80">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Back to catalog
          </Link>
          <h1 className="font-[family-name:var(--font-barlow)] text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Pallet Goods</h1>
          <p className="mt-4 max-w-lg text-lg text-white/50">4 pallet types, $2,300 to $3,300. All sourced from Target. Sorted by category so you know what you&apos;re buying.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {pallets.map((p, i) => (
            <ProductCard key={p.name} delay={i * 100} className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="h-1.5 w-full bg-gradient-to-r from-[#1a2b3c] to-[#2d4a63]" />
              <div className="p-7">
                <div className="flex items-start justify-between">
                  <h3 className="font-[family-name:var(--font-barlow)] text-xl font-bold text-[#1a2b3c]">{p.name}</h3>
                  <p className="font-[family-name:var(--font-barlow)] text-2xl font-extrabold text-[#1a2b3c]">${p.price.toLocaleString()}</p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{p.desc}</p>

                <div className="mt-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-gray-300">What&apos;s in the pallet</p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {p.includes.map((item) => (
                      <span key={item} className="flex items-center gap-1.5 text-xs text-gray-500">
                        <span className="h-1 w-1 rounded-full bg-[#c8aa6e]" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="mt-4 rounded-lg bg-gray-50 px-3 py-2 text-xs italic text-gray-500">{p.buyerTip}</p>

                <Link href="/pack-diosa/contact" className="mt-5 inline-block rounded-lg bg-[#c8aa6e] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0f1a24] hover:bg-[#d4ba82] hover:shadow-md">
                  Inquire Now
                </Link>
              </div>
            </ProductCard>
          ))}
        </div>

        <div className="mt-14 rounded-xl border border-[#c8aa6e]/20 bg-[#c8aa6e]/5 p-6 text-center">
          <p className="font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-wider text-[#c8aa6e]">
            All pallets are Target-sourced merchandise
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Shoes ($2,300) is the lowest entry point. Baby ($3,300) has the highest demand. Call to confirm what&apos;s in stock.
          </p>
        </div>
      </section>
    </div>
  );
}
