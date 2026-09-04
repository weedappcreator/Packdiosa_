/**
 * Pack-DIOSA Jogwear Page
 * Jogging and skinny variants
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
  title: "Pack-DIOSA - Jogwear",
  description:
    "Jogwear from Pack-DIOSA LLC: Jogging $300, Jogging skinny $450.",
};

const jogwearItems = [
  { id: "1", name: "Jogging", price: 300, category: "jogwear", description: "Jogging pants", image: "/placeholder.svg?height=400&width=600" },
  { id: "2", name: "Jogging Skinny", price: 450, category: "jogwear", description: "Jogging skinny fit", image: "/placeholder.svg?height=400&width=600" },
];

export default function JogwearPage() {
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
            Jogwear
          </h1>
          <p className="text-zinc-400 mb-8">
            Jogging and skinny fit pants for active wear.
          </p>
        </section>

        <section className="mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jogwearItems.map((item) => (
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
          <h3 className="text-xl font-display font-bold mb-4">Jogwear Price Point</h3>
          <p className="text-zinc-500 text-4xl font-display font-bold">
            $300 - $450
          </p>
          <p className="text-zinc-400 text-sm mt-2">
            Activewear at accessible prices.
          </p>
        </div>
      </SR>
    </div>
  );
}