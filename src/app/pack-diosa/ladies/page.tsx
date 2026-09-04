/**
 * Pack-DIOSA Ladies Collection Page
 * Full ladies inventory with all sub-categories
 */

"use client";

import { UseRevealOptions, useReveal, ScrollReveal } from "@/lib/ruflo-domains";
import { Inter, Barlow_Condensed } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ScrollReveal as SR } from "@/lib/ruflo-domains";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const barlow = Barlow_Condensed({
  variable: "--font-display",
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Pack-DIOSA - Ladies Collection",
  description:
    "Ladies inventory from Pack-DIOSA LLC: #1 current $300, #1 juvenile $350, tops $150, shorts $150, shoes $1.50 LB, fashion dresses $300, cotton dresses $200, mini dresses $200, bras $300/$150, jumpsuits $450, jeans $280.",
};

const ladiesCategories = [
  { id: "1", name: "#1 Current", price: 300, subitems: "Current inventory selection", badge: "Current" },
  { id: "2", name: "#1 Juvenile", price: 350, subitems: "Juvenile selection", badge: "Juvenile" },
  { id: "3", name: "Tops", price: 150, subitems: "Tops and blouses", badge: "Tops" },
  { id: "4", name: "Shorts", price: 150, subitems: "Shorts and cut-offs", badge: "Shorts" },
  { id: "5", name: "Shoes #1", price: 150, subitems: "Shoes by LB", badge: "Shoes" },
  { id: "6", name: "Dress Fashion", price: 300, subitems: "Fashion dresses", badge: "Fashion" },
  { id: "7", name: "Dress Cotton", price: 200, subitems: "Cotton dresses", badge: "Cotton" },
  { id: "8", name: "Mini Dress", price: 200, subitems: "Mini dresses", badge: "Mini" },
  { id: "9", name: "Bra #1", price: 300, subitems: "Bras selection #1", badge: "Bra" },
  { id: "10", name: "Bra #2", price: 150, subitems: "Bras selection #2", badge: "Bra" },
  { id: "11", name: "Jumpsuits", price: 450, subitems: "Ladies jumpsuits", badge: "Jumpsuits" },
  { id: "12", name: "Jeans", price: 280, subitems: "Ladies jeans", badge: "Jeans" },
];

export default function LadiesPage() {
  return (
    <div className={`${inter.variable} ${barlow.variable} antialiased bg-background text-foreground`}>
      <SR variant="fade-up" stagger={100} className="max-w-7xl mx-auto px-4 py-12">
        <header className="mb-8 animate-fade-in">
          <nav className="flex items-center justify-between">
            <Link
              href="/"
              className="text-xl font-display font-bold tracking-tighter"
            >
              <span className="text-emerald-400">Nova</span> Cargo
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </nav>
        </header>

        <section className="mb-20">
          <h1 className="text-4xl font-display font-bold mb-4">
            Ladies Collection
          </h1>
          <p className="text-zinc-400 mb-8">
            Full ladies inventory with curated selections across all categories and price points.
          </p>
        </section>

        <section className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-4">
          {ladiesCategories.map((category) => (
            <div
              key={category.id}
              className="group bg-zinc-900/80 backdrop-blur-lg border border-zinc-800/50 rounded-xl p-5 hover:border-emerald-500/30 transition-colors cursor-pointer"
            >
              <h3 className="text-base font-display font-bold mb-2">{category.name}</h3>
              <p className="text-zinc-400 text-sm mb-3">{category.subitems}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-emerald-400 font-display font-bold text-lg">
                  ${category.price}
                </span>
                <span className="bg-zinc-600/20 text-zinc-400 rounded px-2 py-0.5 text-xs font-semibold">{category.badge}</span>
              </div>
              <Link
                href="/contact"
                className="mt-3 w-full bg-emerald-600/10 text-emerald-400 hover:bg-emerald-600/20 transition-colors rounded-lg px-4 py-2 text-sm"
              >
                Inquire Now
              </Link>
            </div>
          ))}
        </section>

        <div className="mt-20 pt-12 border-t border-zinc-800/20">
          <h3 className="text-xl font-display font-bold mb-4">Ladies Price Range</h3>
          <div className="grid grid-cols-3 gap-2">
            <span className="bg-emerald-600/10 text-emerald-400 rounded px-2 py-1 text-xs font-medium">$150 - $350</span>
            <span className="bg-zinc-600/20 text-zinc-400 rounded px-2 py-1 text-xs font-medium">$150 - $300</span>
            <span className="bg-emerald-600/10 text-emerald-400 rounded px-2 py-1 text-xs font-medium">$450</span>
          </div>
          <p className="text-zinc-400 text-sm mt-3">
            Price range from budget-friendly $150 tops to premium $450 jumpsuits.
          </p>
        </div>
      </SR>
    </div>
  );
}