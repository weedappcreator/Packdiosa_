"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "motion/react";
import { BusinessHours } from "./components";

interface NavLink {
  label: string;
  href: string;
}

export default function PackDiosaNav({ links }: { links: NavLink[] }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 10));

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -72 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0f1a24]/95 shadow-lg shadow-black/10 backdrop-blur-md"
            : "bg-[#1a2b3c]"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/pack-diosa" className="group flex items-baseline gap-1.5 shrink-0">
            <span className="font-[family-name:var(--font-barlow)] text-xl font-extrabold uppercase tracking-wide text-white transition-opacity duration-200 group-hover:opacity-90 sm:text-2xl">
              Pack-DIOSA
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#c8aa6e] sm:text-xs">
              Nova Cargo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/pack-diosa" && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-md px-2.5 py-1.5 text-[13px] font-medium tracking-wide transition-all duration-200 xl:px-3 ${
                    isActive
                      ? "text-white"
                      : "text-white/65 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-[#c8aa6e]"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop: Phone + Hours + CTA */}
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-4 xl:flex">
              <a href="tel:+19125550147" className="text-xs text-white/50 transition-colors hover:text-white">
                (912) 555-0147
              </a>
              <BusinessHours compact />
            </div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/pack-diosa/contact"
                className="hidden rounded-lg bg-[#c8aa6e] px-5 py-2 text-sm font-semibold text-[#0f1a24] shadow-md transition-all duration-200 hover:bg-[#d4ba82] hover:shadow-lg sm:inline-flex"
              >
                Get Quote
              </Link>
            </motion.div>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <div className="flex h-5 w-6 flex-col items-center justify-center gap-[5px]">
                <motion.span
                  animate={mobileOpen ? { y: 7, rotate: 45 } : { y: 0, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="block h-[2px] w-full rounded-full bg-white"
                />
                <motion.span
                  animate={mobileOpen ? { scaleX: 0, opacity: 0 } : { scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.15 }}
                  className="block h-[2px] w-full rounded-full bg-white"
                />
                <motion.span
                  animate={mobileOpen ? { y: -7, rotate: -45 } : { y: 0, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="block h-[2px] w-full rounded-full bg-white"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 z-50 h-full w-[300px] max-w-[85vw] bg-[#0f1a24] shadow-2xl lg:hidden"
          >
            <div className="flex h-full flex-col">
              <div className="flex h-[72px] items-center justify-between border-b border-white/10 px-5">
                <span className="font-[family-name:var(--font-barlow)] text-lg font-extrabold uppercase tracking-wide text-white">
                  Menu
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="Close menu"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Phone + Hours in mobile */}
              <div className="border-b border-white/10 px-5 py-3">
                <a href="tel:+19125550147" className="block text-sm text-white/70">
                  (912) 555-0147
                </a>
                <div className="mt-1">
                  <BusinessHours compact />
                </div>
              </div>

              <nav className="flex-1 overflow-y-auto px-3 py-4">
                <ul className="space-y-1">
                  {links.map((link, i) => {
                    const isActive =
                      pathname === link.href ||
                      (link.href !== "/pack-diosa" && pathname?.startsWith(link.href));
                    return (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 + i * 0.03, type: "spring", stiffness: 200, damping: 20 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className={`flex items-center rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                            isActive
                              ? "bg-white/10 text-white"
                              : "text-white/60 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          {isActive && (
                            <motion.span
                              layoutId="mobileNavIndicator"
                              className="mr-3 h-4 w-0.5 rounded-full bg-[#c8aa6e]"
                              transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            />
                          )}
                          {link.label}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="border-t border-white/10 p-5"
              >
                <Link
                  href="/pack-diosa/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#c8aa6e] py-3 text-sm font-bold text-[#0f1a24] shadow-lg transition-all duration-200 hover:bg-[#d4ba82]"
                >
                  Get a Quote
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
