/**
 * Pack-DIOSA Containers Catalog Page
 * Full container inventory with pricing and filtering
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
  title: "Pack-DIOSA - Container Catalog",
  description:
    "Full container catalog from Pack-DIOSA LLC. Ladies Target $1,500, Zaza $12,000, Georgia $15,000, Special kalite $18,500, Mix shoes $16,000.",
};

const containers = [
  { id: "1", name: "Ladies Target", price: 1500, type: "target", stock: "Available", features: "Best for retail" },
  { id: "2", name: "Zaza", price: 12000, type: "zaza", stock: "Limited", features: "Premium selection" },
  { id: "3", name: "Georgia", price: 15000, type: "georgia", stock: "Available", features: "Standard quality" },
  { id: "4", name: "Special Kalite", price: 18500, type: "special", stock: "Limited", features: "Highest quality" },
  { id: "5", name: "Mix Shoes", price: 16000, type: "mix", stock: "Available", features: "Mixed footwear" },
];

export default function ContainersPage() {
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
            Container Catalog
          </h1>
          <p className="text-zinc-400 mb-8">
            Browse our selection of cargo containers. Prices range from $1,500 to $18,500.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-display font-bold mb-6">Available Containers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {containers.map((container) => (
              <div
                key={container.id}
                className="group bg-zinc-900/80 backdrop-blur-lg border border-zinc-800/50 rounded-xl p-6 hover:border-emerald-500/30 transition-colors cursor-pointer"
              >
                <h3 className="text-lg font-display font-bold mb-2">{container.name}</h3>
                <p className="text-zinc-400 text-sm mb-4">{container.features}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-emerald-400 font-display font-bold text-2xl">
                    ${container.price}
                  </span>
                  <span className="text-zinc-500 text-xs ml-2">/{container.type}</span>
                </div>
                <p className="text-zinc-400 text-xs mb-4">{container.stock} stock</p>
                <Link
                  href="/contact"
                  className="w-full bg-emerald-600/10 text-emerald-400 hover:bg-emerald-600/20 transition-colors rounded-lg px-4 py-2 text-sm"
                >
                  Inquire Now
                </Link>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-20 pt-12 border-t border-zinc-800/20">
          <h3 className="text-xl font-display font-bold mb-4">Price Ranges</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-zinc-400 text-sm">Entry Level</p>
              <p className="font-medium text-emerald-400">$1,500 - $3,000</p>
              <p className="text-zinc-500 text-xs">Ladies Target, Mix Shoes</p>
            </div>
            <div>
              <p className="text-zinc-400 text-sm">Premium</p>
              <p className="font-medium text-emerald-400">$12,000 - $18,500</p>
              <p className="text-zinc-500 text-xs">Zaza, Georgia, Special Kalite</p>
            </div>
          </div>
        </div>
      </SR>
    </div>
  );
}