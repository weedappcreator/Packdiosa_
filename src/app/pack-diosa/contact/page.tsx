"use client";

import Link from "next/link";
import { useState } from "react";
import { useScrollReveal } from "../hooks";

const categories = [
  { value: "containers", label: "Containers ($1,500 – $18,500)" },
  { value: "pallets", label: "Pallet Goods ($2,300 – $3,300)" },
  { value: "premium", label: "Premium Items ($500)" },
  { value: "ladies", label: "Ladies Collection ($150 – $450)" },
  { value: "men", label: "Men's Collection ($250 – $450)" },
  { value: "sheets", label: "Sheets & Bedding ($225 – $1,800)" },
  { value: "jogwear", label: "Jogwear ($300 – $450)" },
  { value: "baby", label: "Baby & Children ($300 – $700)" },
  { value: "specials", label: "Specials / Bal Pepe ($450 – $700)" },
  { value: "undergarments", label: "Undergarments ($175)" },
  { value: "other", label: "Other / General Inquiry" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", interest: "containers", message: "",
  });

  const hero = useScrollReveal();
  const formReveal = useScrollReveal(100);
  const infoReveal = useScrollReveal(200);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch("/pack-diosa/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        setSending(false);
        return;
      }

      setSending(false);
      setSubmitted(true);
    } catch {
      setError("Failed to send. Please call us at (912) 555-0147.");
      setSending(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1a2b3c]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80"
            alt=""
            className="h-full w-full object-cover opacity-15"
          />
        </div>
        <div ref={hero.ref} style={hero.style} className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
          <Link href="/pack-diosa" className="mb-6 inline-flex items-center gap-2 text-xs font-medium text-white/50 transition-colors hover:text-white/80">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Back to catalog
          </Link>
          <h1 className="font-[family-name:var(--font-barlow)] text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-lg text-lg text-white/50">Walk in, call, or send us a message. We respond within 1 business day.</p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Form */}
          <div ref={formReveal.ref} style={formReveal.style} className="lg:col-span-3">
            <h2 className="font-[family-name:var(--font-barlow)] text-2xl font-bold text-[#1a2b3c]">Send an Inquiry</h2>
            <p className="mt-2 text-sm text-gray-400">Tell us what products you need, how many lots, and whether you want pickup or delivery.</p>

            {submitted ? (
              <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-10 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-barlow)] text-xl font-bold text-green-800">Inquiry Submitted</h3>
                <p className="mt-2 text-sm text-green-600">
                  We&apos;ll contact you during business hours: Tuesday to Friday, 9AM to 5PM.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", interest: "containers", message: "" }); }}
                  className="mt-6 text-sm font-semibold text-[#1a2b3c] hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {error && (
                  <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">{error}</div>
                )}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name" name="name" type="text" required value={formData.name} onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#1a2b3c] placeholder-gray-300 outline-none transition-all duration-200 focus:border-[#1a2b3c] focus:ring-2 focus:ring-[#1a2b3c]/10"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email" name="email" type="email" required value={formData.email} onChange={handleChange}
                      placeholder="you@email.com"
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#1a2b3c] placeholder-gray-300 outline-none transition-all duration-200 focus:border-[#1a2b3c] focus:ring-2 focus:ring-[#1a2b3c]/10"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Phone <span className="text-gray-300">(optional)</span>
                    </label>
                    <input
                      id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#1a2b3c] placeholder-gray-300 outline-none transition-all duration-200 focus:border-[#1a2b3c] focus:ring-2 focus:ring-[#1a2b3c]/10"
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Interest Area <span className="text-red-400">*</span>
                    </label>
                    <select
                      id="interest" name="interest" value={formData.interest} onChange={handleChange}
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#1a2b3c] outline-none transition-all duration-200 focus:border-[#1a2b3c] focus:ring-2 focus:ring-[#1a2b3c]/10"
                    >
                      {categories.map((c) => (
                        <option key={c.value} value={c.value}>{c.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message" name="message" required rows={4} value={formData.message} onChange={handleChange}
                    placeholder="What are you looking for? Include quantities, categories, and delivery preference..."
                    className="w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#1a2b3c] placeholder-gray-300 outline-none transition-all duration-200 focus:border-[#1a2b3c] focus:ring-2 focus:ring-[#1a2b3c]/10"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="group relative w-full overflow-hidden rounded-lg bg-[#c8aa6e] px-6 py-3.5 font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-wider text-[#0f1a24] transition-all duration-300 hover:shadow-lg hover:shadow-[#c8aa6e]/20 disabled:opacity-60"
                >
                  <span className="relative z-10">{sending ? "Sending..." : "Send Inquiry"}</span>
                  <div className="absolute inset-0 -translate-x-full bg-[#d4ba82] transition-transform duration-300 group-hover:translate-x-0" />
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div ref={infoReveal.ref} style={infoReveal.style} className="lg:col-span-2">
            <div className="rounded-2xl border border-gray-100 bg-[#faf9f7] p-8">
              <h2 className="font-[family-name:var(--font-barlow)] text-xl font-bold text-[#1a2b3c]">Visit Our Warehouse</h2>

              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#c8aa6e]/10">
                    <svg className="h-4 w-4 text-[#c8aa6e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Address</p>
                    <p className="mt-1 text-sm font-medium text-[#1a2b3c]">561 SW Broad St</p>
                    <p className="text-sm text-gray-500">Jesup, GA 31545 — Off I-95</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#c8aa6e]/10">
                    <svg className="h-4 w-4 text-[#c8aa6e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Phone</p>
                    <a href="tel:+19125550147" className="mt-1 block text-sm font-medium text-[#1a2b3c] hover:text-[#c8aa6e]">
                      (912) 555-0147
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#c8aa6e]/10">
                    <svg className="h-4 w-4 text-[#c8aa6e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Hours</p>
                    <p className="mt-1 text-sm font-medium text-[#1a2b3c]">Tuesday – Friday</p>
                    <p className="text-sm text-gray-500">9:00 AM – 5:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#c8aa6e]/10">
                    <svg className="h-4 w-4 text-[#c8aa6e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Email</p>
                    <a href="mailto:info@pack-diosa.com" className="mt-1 block text-sm font-medium text-[#1a2b3c] hover:text-[#c8aa6e]">
                      info@pack-diosa.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Real Google Maps embed */}
              <div className="mt-8 overflow-hidden rounded-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3373.8!2d-81.8854!3d31.5985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJesup%2C+GA+31545!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                  title="Pack-DIOSA location"
                />
              </div>

              {/* Trust signal */}
              <div className="mt-6 flex items-center gap-2 rounded-lg bg-green-50 p-3">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <p className="text-xs font-medium text-green-700">We respond within 1 business day</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
