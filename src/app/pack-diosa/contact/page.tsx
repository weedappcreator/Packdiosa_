"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

const categories = [
  { value: "containers", label: "Containers ($1,500 - $18,500)" },
  { value: "pallets", label: "Pallets ($2,300 - $3,300)" },
  { value: "premium", label: "Premium Items ($500)" },
  { value: "ladies", label: "Ladies Collection ($150 - $450)" },
  { value: "men", label: "Men's Collection ($250 - $450)" },
  { value: "baby", label: "Baby & Children ($300 - $700)" },
  { value: "sheets", label: "Sheets & Bedding ($225 - $1,800)" },
  { value: "jogwear", label: "Jogwear ($300 - $450)" },
  { value: "specials", label: "Specials ($450 - $700)" },
  { value: "undergarments", label: "Undergarments ($175)" },
  { value: "other", label: "Other" },
];

const springTransition = { type: "spring" as const, stiffness: 100, damping: 20 };
const springFast = { type: "spring" as const, stiffness: 120, damping: 18 };

function useIsOpen() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const check = () => {
      const now = new Date(
        new Date().toLocaleString("en-US", { timeZone: "America/New_York" })
      );
      const day = now.getDay();
      const hour = now.getHours();
      // Tue(2)–Fri(5), 9AM–5PM
      setIsOpen(day >= 2 && day <= 5 && hour >= 9 && hour < 17);
    };
    check();
    const interval = setInterval(check, 60000);
    return () => clearInterval(interval);
  }, []);
  return isOpen;
}

function StaggeredHeadline({ text, className }: { text: string; className?: string }) {
  const prefersReduced = useReducedMotion();
  const words = text.split(" ");
  return (
    <h1 className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springTransition, delay: 0.15 + i * 0.08 }}
          className="mr-[0.3em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}

export default function ContactPage() {
  const prefersReduced = useReducedMotion();
  const isOpen = useIsOpen();

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "containers",
    message: "",
  });

  const mapRef = useRef<HTMLDivElement>(null);
  const mapInView = useInView(mapRef, { once: true, margin: "-80px" });
  const trustRef = useRef<HTMLDivElement>(null);
  const trustInView = useInView(trustRef, { once: true, margin: "-60px" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
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

  const fadeUp = prefersReduced
    ? {}
    : { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" as const } };

  const inputClasses =
    "w-full rounded-lg border border-gray-200 bg-white px-4 py-3.5 text-sm text-[#1a2b3c] placeholder-gray-400 outline-none transition-all duration-300 focus:border-[#c8aa6e] focus:ring-2 focus:ring-[#c8aa6e]/20 focus:shadow-[0_0_0_4px_rgba(200,170,110,0.08)]";

  const labelClasses =
    "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-500";

  return (
    <div className="bg-[#faf9f7]">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#0f1a24]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80"
            alt=""
            className="h-full w-full object-cover opacity-[0.12]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f1a24]/60 to-[#0f1a24]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...springTransition, delay: 0.05 }}
          >
            <Link
              href="/pack-diosa"
              className="mb-8 inline-flex items-center gap-2 text-xs font-medium text-white/40 transition-colors hover:text-[#c8aa6e]"
            >
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to catalog
            </Link>
          </motion.div>

          <StaggeredHeadline
            text="Get in Touch"
            className="font-[family-name:var(--font-barlow)] text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          />

          <motion.p
            initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.5 }}
            className="mt-5 max-w-lg text-lg leading-relaxed text-white/50"
          >
            Walk in, call, or send us a message. We&apos;re here Tue&ndash;Fri,
            9AM&ndash;5PM.
          </motion.p>
        </div>
      </section>

      {/* ── Main Content: Form + Info ── */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
          {/* ── Left Column: Contact Form (60%) ── */}
          <div className="lg:col-span-3">
            <motion.div
              {...fadeUp}
              transition={springTransition}
            >
              <h2 className="font-[family-name:var(--font-barlow)] text-2xl font-bold text-[#1a2b3c]">
                Send an Inquiry
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                Tell us what products you need, how many lots, and whether you
                want pickup or delivery.
              </p>
            </motion.div>

            {submitted ? (
              <motion.div
                initial={prefersReduced ? {} : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={springFast}
                className="mt-10 rounded-2xl border border-green-200 bg-green-50 p-12 text-center"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <svg
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-barlow)] text-xl font-bold text-green-800">
                  Message Sent!
                </h3>
                <p className="mt-2 text-sm text-green-600">
                  We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      interest: "containers",
                      message: "",
                    });
                  }}
                  className="mt-8 text-sm font-semibold text-[#1a2b3c] transition-colors hover:text-[#c8aa6e]"
                >
                  Send another inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-10">
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={springFast}
                    className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
                  >
                    {error}
                  </motion.div>
                )}

                <div className="space-y-6">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <motion.div
                      {...fadeUp}
                      transition={{ ...springTransition, delay: 0.1 }}
                    >
                      <label htmlFor="name" className={labelClasses}>
                        Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={inputClasses}
                      />
                    </motion.div>
                    <motion.div
                      {...fadeUp}
                      transition={{ ...springTransition, delay: 0.15 }}
                    >
                      <label htmlFor="email" className={labelClasses}>
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@email.com"
                        className={inputClasses}
                      />
                    </motion.div>
                  </div>

                  {/* Phone + Interest */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <motion.div
                      {...fadeUp}
                      transition={{ ...springTransition, delay: 0.2 }}
                    >
                      <label htmlFor="phone" className={labelClasses}>
                        Phone{" "}
                        <span className="font-normal normal-case text-gray-400">
                          (optional)
                        </span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                        className={inputClasses}
                      />
                    </motion.div>
                    <motion.div
                      {...fadeUp}
                      transition={{ ...springTransition, delay: 0.25 }}
                    >
                      <label htmlFor="interest" className={labelClasses}>
                        Product Interest
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className={inputClasses + " appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22%239ca3af%22%20stroke-width%3D%222%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M19%209l-7%207-7-7%22%2F%3E%3C%2Fsvg%3E')] bg-[length:18px] bg-[position:right_12px_center] bg-no-repeat pr-10"}
                      >
                        {categories.map((c) => (
                          <option key={c.value} value={c.value}>
                            {c.label}
                          </option>
                        ))}
                      </select>
                    </motion.div>
                  </div>

                  {/* Message */}
                  <motion.div
                    {...fadeUp}
                    transition={{ ...springTransition, delay: 0.3 }}
                  >
                    <label htmlFor="message" className={labelClasses}>
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="What are you looking for? Include quantities, categories, and delivery preference..."
                      className={inputClasses + " resize-none"}
                    />
                  </motion.div>

                  {/* Submit */}
                  <motion.div
                    {...fadeUp}
                    transition={{ ...springTransition, delay: 0.35 }}
                  >
                    <button
                      type="submit"
                      disabled={sending}
                      className="group relative w-full overflow-hidden rounded-lg bg-[#c8aa6e] px-6 py-4 font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-widest text-[#0f1a24] transition-all duration-300 hover:bg-[#d4ba82] hover:shadow-lg hover:shadow-[#c8aa6e]/25 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {sending ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg
                            className="h-4 w-4 animate-spin"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Send Inquiry"
                      )}
                    </button>
                  </motion.div>
                </div>
              </form>
            )}
          </div>

          {/* ── Right Column: Contact Info (40%) ── */}
          <div className="lg:col-span-2">
            <div className="space-y-5">
              {/* Card 1: Visit Our Warehouse */}
              <motion.div
                {...fadeUp}
                transition={{ ...springTransition, delay: 0.1 }}
                whileHover={prefersReduced ? {} : { y: -2 }}
                className="rounded-xl border border-gray-200/80 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#c8aa6e]/10">
                    <svg
                      className="h-5 w-5 text-[#c8aa6e]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-wider text-[#1a2b3c]">
                      Visit Our Warehouse
                    </h3>
                    <p className="mt-1.5 text-sm font-medium text-[#1a2b3c]">
                      561 SW Broad St
                    </p>
                    <p className="text-sm text-gray-500">Jesup, GA 31545</p>
                    <p className="mt-1 text-xs text-gray-400">
                      Right off I-95
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Call Us */}
              <motion.div
                {...fadeUp}
                transition={{ ...springTransition, delay: 0.2 }}
                whileHover={prefersReduced ? {} : { y: -2 }}
                className="rounded-xl border border-gray-200/80 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#c8aa6e]/10">
                    <svg
                      className="h-5 w-5 text-[#c8aa6e]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-wider text-[#1a2b3c]">
                      Call Us
                    </h3>
                    <a
                      href="tel:+19125550147"
                      className="mt-1.5 block text-sm font-medium text-[#1a2b3c] transition-colors hover:text-[#c8aa6e]"
                    >
                      (912) 555-0147
                    </a>
                    <p className="mt-1 text-xs text-gray-400">
                      Tue&ndash;Fri, 9AM&ndash;5PM EST
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: WhatsApp */}
              <motion.div
                {...fadeUp}
                transition={{ ...springTransition, delay: 0.3 }}
                whileHover={prefersReduced ? {} : { y: -2 }}
                className="rounded-xl border border-gray-200/80 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-500/10">
                    <svg
                      className="h-5 w-5 text-green-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-wider text-[#1a2b3c]">
                      WhatsApp
                    </h3>
                    <a
                      href="https://wa.me/19125550147"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 block text-sm font-medium text-[#1a2b3c] transition-colors hover:text-green-600"
                    >
                      Chat on WhatsApp
                    </a>
                    <p className="mt-1 text-xs text-gray-400">
                      Quick replies during business hours
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 4: Business Hours */}
              <motion.div
                {...fadeUp}
                transition={{ ...springTransition, delay: 0.4 }}
                whileHover={prefersReduced ? {} : { y: -2 }}
                className="rounded-xl border border-gray-200/80 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#c8aa6e]/10">
                    <svg
                      className="h-5 w-5 text-[#c8aa6e]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-wider text-[#1a2b3c]">
                      Business Hours
                    </h3>
                    <div className="mt-1.5 space-y-0.5">
                      <p className="text-sm font-medium text-[#1a2b3c]">
                        Tuesday &ndash; Friday: 9:00 AM &ndash; 5:00 PM
                      </p>
                      <p className="text-sm text-gray-500">
                        Saturday &ndash; Monday: Closed
                      </p>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <span
                        className={`h-2 w-2 rounded-full ${
                          isOpen
                            ? "bg-green-500 animate-pulse"
                            : "bg-gray-400"
                        }`}
                      />
                      <span
                        className={`text-xs font-semibold ${
                          isOpen ? "text-green-600" : "text-gray-500"
                        }`}
                      >
                        {isOpen ? "Open Now" : "Currently Closed"}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Google Maps ── */}
      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-12">
        <motion.div
          ref={mapRef}
          style={{
            opacity: mapInView ? 1 : 0,
            transform: mapInView ? "scale(1)" : "scale(0.95)",
            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          className="overflow-hidden rounded-2xl border border-gray-200/80 shadow-sm"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54251.48974340498!2d-81.91!3d31.60!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e52c07de9e2d21%3A0x5a7c1b0a8c5e35a0!2sJesup%2C%20GA%2031545!5e0!3m2!1sen!2sus!4v1"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Pack-DIOSA warehouse location in Jesup, GA"
          />
        </motion.div>
      </section>

      {/* ── Trust Section ── */}
      <section className="border-t border-gray-200/60 bg-white">
        <div
          ref={trustRef}
          className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              {
                icon: (
                  <svg
                    className="h-5 w-5 text-[#c8aa6e]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ),
                title: "Walk-In Welcome",
                desc: "Visit our warehouse any Tuesday through Friday",
              },
              {
                icon: (
                  <svg
                    className="h-5 w-5 text-[#c8aa6e]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "No Middleman Pricing",
                desc: "Direct wholesale prices, no markups",
              },
              {
                icon: (
                  <svg
                    className="h-5 w-5 text-[#c8aa6e]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                ),
                title: "Inspect Before You Buy",
                desc: "See and touch every product before purchasing",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                style={{
                  opacity: trustInView ? 1 : 0,
                  transform: trustInView
                    ? "translateY(0)"
                    : "translateY(20px)",
                  transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${
                    i * 0.1
                  }s`,
                }}
                className="flex items-start gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c8aa6e]/10">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-wider text-[#1a2b3c]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
