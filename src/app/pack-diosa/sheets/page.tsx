/**
 * Pack-DIOSA Sheets & Bedding Page
 * Sheets premium, color, #1
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
  title: "Pack-DIOSA - Sheets & Bedding",
  description:
    "Sheets inventory from Pack-DIOSA LLC: Premium $300, Color $1,800, #1 $225.",
};

const sheetsItems = [
  { id: "1", name: "Sheets Premium", price: 300, category: "sheets", description: "Premium sheets set", image: "/placeholder.svg?height=400&width=600" },
  { id: "2", name: "Sheets Color", price: 1800, category: "sheets", description: "Color sheets set", image: "/placeholder.svg?height=400&width=600" },
  { id: "3", name: "Sheets #1", price: 225, category: "sheets", description: "Sheets #1 set", image: "/placeholder.svg?height=400&width=600" },
];

export default function SheetsPage() {
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
            Sheets & Bedding
          </h1>
          <p className="text-zinc-400 mb-8">
            Bedding sheets at various price points for all budgets.
          </p>
        </section>

        <section className="mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sheetsItems.map((item) => (
            <div
              key={item.id}
              className="group bg-zinc-900/80 backdrop-blur-lg border border-zinc-800/50 rounded-xl p-6 hover:border-emerald-500/30 transition-colors cursor-pointer"
            >
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.name}
                  className="h-48 w-full object-cover rounded-t-xl mb-5"
                )
              }
              <h3 className="text-lg font-display font-bold mb-2">{item.name}</h3>
              <p className="text-zinc-400 text-sm mb-4">{item.description}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-emerald-400 font-display font-bold text-2xl">
                  ${item.price}
                </span>
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
          <h3 className="text-xl font-display font-bold mb-4">Sheets Price Range</h3>
          <p className="text-zinc-500 text-4xl font-display font-bold">
            $225 - $1,800
          </p>
          <p className="text-zinc-400 text-sm mt-2">
            From budget-friendly #1 sets to premium color sheets.
          </p>
        </div>
      </SR>
    </div>
  );
}