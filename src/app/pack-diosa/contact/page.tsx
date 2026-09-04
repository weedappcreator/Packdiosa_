"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function useScrollReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, style: { opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(28px)", transition: `all 0.6s ease-out ${delay}ms` } };
}

const categories = [
  { value: "containers", label: "Containers ($1,500 – $18,500)" },
  { value: "pallets", label: "Pallet Goods ($2,300 – $3,300)" },
  { value: "premium", label: "Premium Items ($500)" },
  { value: "ladies", label: "Ladies Collection ($150 – $450)" },
  { value: "men", label: "Men's Collection ($250 – $450)" },
  { value: "sheets", label: "Sheets & Bedding ($225 – $1,800)" },
  { value: "jogwear", label: "Jogwear ($300 – $450)" },
  { value: "baby", label: "Baby & Children ($300 – $700)" },
  { value: "specials", label: "Specials / Bal Pépè ($450 – $700)" },
  { value: "undergarments", label: "Undergarments ($175)" },
  { value: "other", label: "Other / General Inquiry" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
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
    // In production, POST to /api/contact → Resend email
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0066CC] via-[#004d99] to-[#002d5a]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div ref={hero.ref} style={hero.style} className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
          <Link href="/pack-diosa" className="mb-6 inline-flex items-center gap-2 text-xs font-medium text-white/50 transition-colors hover:text-white/80">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Back to catalog
          </Link>
          <h1 className="font-[family-name:var(--font-barlow)] text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-lg text-lg text-blue-100/60">Get in touch for pricing, availability, and orders. We respond within 1 business day.</p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Form - 3 cols */}
          <div ref={formReveal.ref} style={formReveal.style} className="lg:col-span-3">
            <h2 className="font-[family-name:var(--font-barlow)] text-2xl font-bold text-[#1A1A1A]">Send Inquiry</h2>
            <p className="mt-2 text-sm text-gray-400">Fill out the form and we&apos;ll get back to you during business hours.</p>

            {submitted ? (
              <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-10 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-barlow)] text-xl font-bold text-green-800">Inquiry Submitted</h3>
                <p className="mt-2 text-sm text-green-600">
                  Thank you! We&apos;ll contact you during our business hours: Tuesday to Friday, 9AM to 5PM.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", interest: "containers", message: "" }); }}
                  className="mt-6 text-sm font-semibold text-[#0066CC] hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name" name="name" type="text" required value={formData.name} onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder-gray-300 outline-none transition-all duration-200 focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/10"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email" name="email" type="email" required value={formData.email} onChange={handleChange}
                      placeholder="you@email.com"
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder-gray-300 outline-none transition-all duration-200 focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/10"
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
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder-gray-300 outline-none transition-all duration-200 focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/10"
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Interest Area <span className="text-red-400">*</span>
                    </label>
                    <select
                      id="interest" name="interest" value={formData.interest} onChange={handleChange}
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#1A1A1A] outline-none transition-all duration-200 focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/10"
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
                    placeholder="Tell us what you're looking for — items, quantities, delivery preferences..."
                    className="w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder-gray-300 outline-none transition-all duration-200 focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/10"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="group relative w-full overflow-hidden rounded-lg bg-[#FF6B35] px-6 py-3.5 font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 disabled:opacity-60"
                >
                  <span className="relative z-10">{sending ? "Sending..." : "Send Inquiry"}</span>
                  <div className="absolute inset-0 -translate-x-full bg-[#e55a2a] transition-transform duration-300 group-hover:translate-x-0" />
                </button>
              </form>
            )}
          </div>

          {/* Info - 2 cols */}
          <div ref={infoReveal.ref} style={infoReveal.style} className="lg:col-span-2">
            <div className="rounded-2xl border border-gray-100 bg-[#FAFAFA] p-8">
              <h2 className="font-[family-name:var(--font-barlow)] text-xl font-bold text-[#1A1A1A]">Business Info</h2>

              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0066CC]/10">
                    <svg className="h-4 w-4 text-[#0066CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Address</p>
                    <p className="mt-1 text-sm font-medium text-[#1A1A1A]">561 SW Broad St</p>
                    <p className="text-sm text-gray-500">Jesup, GA 31545</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0066CC]/10">
                    <svg className="h-4 w-4 text-[#0066CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Hours</p>
                    <p className="mt-1 text-sm font-medium text-[#1A1A1A]">Tuesday – Friday</p>
                    <p className="text-sm text-gray-500">9:00 AM – 5:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0066CC]/10">
                    <svg className="h-4 w-4 text-[#0066CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Email</p>
                    <a href="mailto:info@pack-diosa.com" className="mt-1 block text-sm font-medium text-[#0066CC] hover:underline">
                      info@pack-diosa.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 flex h-40 items-center justify-center rounded-xl bg-gradient-to-br from-[#0066CC]/5 to-[#7B5FFF]/5 border border-gray-100">
                <div className="text-center">
                  <svg className="mx-auto h-8 w-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <p className="mt-2 text-xs text-gray-400">Jesup, GA 31545</p>
                </div>
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
