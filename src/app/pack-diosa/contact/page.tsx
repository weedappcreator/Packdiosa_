/**
 * Pack-DIOSA Contact Page
 * Inquiry form, location, hours, and contact information
 */

"use client";

import { UseRevealOptions, useReveal, ScrollReveal } from "@/lib/ruflo-domains";
import { Inter, Barlow_Condensed } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ScrollReveal as SR } from "@/lib/ruflo-domains";
import { useState } from "react";

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
  title: "Pack-DIOSA - Contact",
  description:
    "Contact Pack-DIOSA LLC. Location: 561 sw broad st, Jesup GA 31545. Open Tuesday to Friday 9AM to 5PM. Inquiry form for containers and inventory.",
};

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "containers",
    message: "",
  });

  const categories = [
    { value: "containers", label: "Containers ($1,500 - $18,500)" },
    { value: "pallets", label: "Pallet Goods" },
    { value: "premium", label: "Premium Items ($500)" },
    { value: "ladies", label: "Ladies Collection" },
    { value: "men", label: "Men's Collection" },
    { value: "other", label: "Other" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    // In production, this would send to Resend or Supabase
    console.log("Form submission:", formData);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "containers",
      message: "",
    });
  };

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
            </div>
          </nav>
        </header>

        <section className="mb-20">
          <h1 className="text-4xl font-display font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-zinc-400 mb-8">
            Get in touch with Pack-DIOSA LLC for inquiries about containers, pallets,
            premium items, or general information.
          </p>
        </section>

        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-display font-bold mb-6">Location & Hours</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-emerald-400 mt-1"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M2 3h20v2H2V3zm0 6h20v2H2V9zm0 6h20v2H2V15zm0 6h20v2H2V21z" />
                  </svg>
                  <div>
                    <p className="font-medium">561 sw broad st</p>
                    <p className="text-zinc-500">Jesup, GA 31545</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-emerald-400 mt-1"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2.06 2.06 0 0 1 4.11 2 19.95 19.95 0 0 1 2 4.11 19.79 19.79 0 0 1 2 2c0-3.08 1.12-5.86 3.31-8.31a2.03 2.03 0 0 1 2.62 1.84A7.96 7.96 0 0 0 22 7c0 .36-.04.71-.1 1.06zM7.88 21a1 1 0 0 1-.88-.79l-3.11-1.555A5.94 5.94 0 0 0 2 12.095c0-3.94 3.2-7.14 7.11-7.13.7.08.79.11 1.12.1l3.11.78a1 1 0 0 1 .88.79zM2 4.2c0-.35.11-.69.3-1s.48-.3.69-.3h8.31a.5.5 0 0 1 .39.82l3.22 2.35a.5.5 0 0 1-.08.95L11.8 7.93a.5.5 0 0 1-.5-.5h-2.3a.5.5 0 0 1-.5-.5h-2.3a.5.5 0 0 1-.5-.5h-6.7a.5.5 0 0 1-.5-.5h-6.41L2 4.2zm10.6 5.15l-.78 3.1 3.1-.78a.5.5 0 0 1 .71.71l-3.1 3.1 1.55-3.1a.5.5 0 0 1 .71-.71l-.78 3.13-3.1.78a.5.5 0 0 1-.71-.71l3.11-3.1z" />
                  </svg>
                  <div>
                    <p className="font-medium">Tuesday to Friday</p>
                    <p className="text-zinc-500">9AM to 5PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-emerald-400 mt-1"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M21 4H3v7h6v4h14v-4h6v7H21a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 1 0-5zm-5.5 4.5c.83 0 1.5-.91 1.5-2s-.67-2-1.5-2-1.5.91-1.5 2 .67 2 1.5 2zm1.5-13a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm-13 .5c.83 0 1.5-.91 1.5-2s-.67-2-1.5-2-1.5.91-1.5 2 .67 2 1.5 2z" />
                  </svg>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-zinc-500">info@pack-diosa.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold mb-6">Send Inquiry</h2>
              {formSubmitted ? (
                <div className="bg-emerald-500/10 border-emerald-500/30 rounded-lg p-6 text-center">
                  <p className="text-emerald-400 font-medium">
                    Inquiry submitted successfully! We'll contact you during our business hours (Tue-Fri 9AM-5PM).
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-zinc-400 text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-800/50 border border-zinc-800/30 rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-400 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-800/50 border border-zinc-800/30 rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-400 text-sm font-medium mb-2">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-zinc-800/50 border border-zinc-800/30 rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-400 text-sm font-medium mb-2">
                      Interest Area
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full bg-zinc-800/50 border border-zinc-800/30 rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-emerald-500 transition-colors"
                    >
                      {categories.map((cat) => (
                        <option key={cat.value} value={cat.value}>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-zinc-400 text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      required
                      className="w-full bg-zinc-800/50 border border-zinc-800/30 rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                      placeholder="Describe your inquiry..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 text-white font-display font-bold py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors text-lg"
                  >
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </SR>
    </div>
  );
}