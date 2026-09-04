"use client";

import { useRef, useCallback } from "react";
import { motion, useInView, useScroll, useTransform, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { useCountUp } from "./hooks";
import Link from "next/link";

/* ── RevealSection ── */
export function RevealSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000, type: "spring", stiffness: 100, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── StatItem ── */
export function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value, 1800);
  return (
    <div ref={ref} className="px-6 py-10 text-center">
      <motion.p
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="font-[family-name:var(--font-barlow)] text-4xl font-extrabold text-[#1a2b3c] sm:text-5xl"
      >
        {count}{suffix}
      </motion.p>
      <p className="mt-2 text-xs font-medium uppercase tracking-widest text-gray-400">{label}</p>
    </div>
  );
}

/* ── ProductCard ── */
export function ProductCard({ children, delay = 0, className = "", featured = false }: { children: React.ReactNode; delay?: number; className?: string; featured?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [3, -3]);
  const rotateY = useTransform(x, [-100, 100], [-3, 3]);

  const handleMouse = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000, type: "spring", stiffness: 100, damping: 20 }}
      style={{ rotateX, rotateY, perspective: 800 }}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className={`${className} ${featured ? "ring-1 ring-[#c8aa6e]/30 shadow-[0_0_30px_rgba(200,170,110,0.1)]" : ""}`}
    >
      {children}
    </motion.div>
  );
}

/* ── SpotlightCard ── */
export function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className={`group relative overflow-hidden rounded-2xl border border-gray-100 bg-white transition-shadow duration-300 hover:shadow-2xl hover:shadow-gray-200/50 ${className}`}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(350px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(200,170,110,0.15), transparent 60%)" }}
      />
      {children}
    </motion.div>
  );
}

/* ── HeroParallax ── */
export function HeroParallax({ src, children, className = "" }: { src: string; children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src={src} alt="" className="h-[130%] w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1a24] via-[#0f1a24]/90 to-[#0f1a24]/70" />
      </motion.div>
      <div className="relative">{children}</div>
    </section>
  );
}

/* ── SplitText ── */
export function SplitText({ text, className = "", gold = false, delay = 0 }: { text: string; className?: string; gold?: boolean; delay?: number }) {
  return (
    <span className={className}>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className={`mr-[0.25em] inline-block ${gold ? "text-[#c8aa6e]" : ""}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay + i * 0.1, type: "spring", stiffness: 100, damping: 20 }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/* ── MagneticButton ── */
export function MagneticButton({ children, href, className = "" }: { children: React.ReactNode; href: string; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });
  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
        y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      <Link href={href} className={className}>{children}</Link>
    </motion.div>
  );
}

/* ── WhatsAppButton ── */
export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/19125550147"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/30"
      aria-label="Chat on WhatsApp"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    >
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </motion.a>
  );
}

/* ── BusinessHours ── */
export function BusinessHours({ compact = false }: { compact?: boolean }) {
  const now = new Date();
  const est = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));
  const day = est.getDay();
  const hour = est.getHours();
  const isOpen = day >= 2 && day <= 5 && hour >= 9 && hour < 17;
  if (compact) {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs">
        <span className={`h-1.5 w-1.5 rounded-full ${isOpen ? "bg-emerald-500 animate-pulse" : "bg-red-400"}`} />
        <span className={isOpen ? "text-emerald-600" : "text-gray-400"}>{isOpen ? "Open Now" : "Closed"}</span>
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

/* ── CategoryImage ── */
export function CategoryImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-gray-100 ${className}`}>
      <motion.img
        src={src} alt={alt}
        className="h-full w-full object-cover"
        loading="lazy"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
}
