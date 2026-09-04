"use client";

import { useScrollReveal, useCountUp } from "./hooks";
import Link from "next/link";
import Image from "next/image";

/**
 * RevealSection — wraps content with scroll-triggered fade-in.
 * Uses hook at component top level (no hooks-in-loop violation).
 */
export function RevealSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, style } = useScrollReveal(delay);
  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}

/**
 * StatItem — single animated stat counter.
 * Extracted to call useCountUp at component top level.
 */
export function StatItem({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { count, ref } = useCountUp(value, 1800);
  return (
    <div ref={ref} className="px-6 py-10 text-center">
      <p className="font-[family-name:var(--font-barlow)] text-4xl font-extrabold text-[#1a2b3c] sm:text-5xl">
        {count}{suffix}
      </p>
      <p className="mt-2 text-xs font-medium uppercase tracking-widest text-gray-400">
        {label}
      </p>
    </div>
  );
}

/**
 * ProductCard — wraps a product with scroll reveal at component level.
 * Solves the hooks-in-map violation.
 */
export function ProductCard({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, style } = useScrollReveal(delay);
  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}

/**
 * SpotlightCard — Premium card with mouse-tracking spotlight effect.
 */
export function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gray-200/50 ${className}`}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.setProperty("--spot-x", `${x}px`);
        e.currentTarget.style.setProperty("--spot-y", `${y}px`);
      }}
    >
      {/* Spotlight gradient follows mouse */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: "radial-gradient(300px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(200,170,110,0.08), transparent 60%)",
        }}
      />
      {children}
    </div>
  );
}

/**
 * WhatsAppButton — floating WhatsApp CTA, bottom-right.
 */
export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/19125550147"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/30 transition-transform duration-200 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
}

/**
 * BusinessHours — smart open/closed indicator.
 */
export function BusinessHours({ compact = false }: { compact?: boolean }) {
  const now = new Date();
  // Convert to EST
  const est = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));
  const day = est.getDay(); // 0=Sun, 2=Tue, 5=Fri
  const hour = est.getHours();
  const isOpen = day >= 2 && day <= 5 && hour >= 9 && hour < 17;

  if (compact) {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs">
        <span className={`h-1.5 w-1.5 rounded-full ${isOpen ? "bg-emerald-500 animate-pulse" : "bg-red-400"}`} />
        <span className={isOpen ? "text-emerald-600" : "text-gray-400"}>
          {isOpen ? "Open Now" : "Closed"}
        </span>
      </span>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5">
      <span className={`h-2 w-2 rounded-full ${isOpen ? "bg-emerald-500 animate-pulse" : "bg-red-400"}`} />
      <span className={`text-xs font-medium ${isOpen ? "text-emerald-700" : "text-gray-500"}`}>
        {isOpen ? "Open Now — Closes 5PM" : "Closed — Tue-Fri 9AM-5PM"}
      </span>
    </div>
  );
}

/**
 * CategoryImage — product category image from Unsplash with fallback.
 */
export function CategoryImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-gray-100 ${className}`}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
}
