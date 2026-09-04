"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  label: string;
  href: string;
}

export default function PackDiosaNav({ links }: { links: NavLink[] }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0066CC]/95 shadow-lg shadow-black/10 backdrop-blur-md"
            : "bg-[#0066CC]"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/pack-diosa"
            className="group flex items-baseline gap-1.5 shrink-0"
          >
            <span className="font-[family-name:var(--font-barlow)] text-xl font-extrabold uppercase tracking-wide text-white transition-opacity duration-200 group-hover:opacity-90 sm:text-2xl">
              Pack-DIOSA
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#7B5FFF] sm:text-xs">
              Nova Cargo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/pack-diosa" &&
                  pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-md px-2.5 py-1.5 text-[13px] font-medium tracking-wide transition-all duration-200 xl:px-3 ${
                    isActive
                      ? "text-white"
                      : "text-white/75 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-[#FF6B35]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/pack-diosa/contact"
              className="hidden rounded-lg bg-[#FF6B35] px-5 py-2 text-sm font-semibold text-white shadow-md shadow-orange-600/20 transition-all duration-200 hover:bg-[#e55a2a] hover:shadow-lg hover:shadow-orange-500/30 sm:inline-flex"
            >
              Get Quote
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <div className="flex h-5 w-6 flex-col items-center justify-center gap-[5px]">
                <span
                  className={`block h-[2px] w-full rounded-full bg-white transition-all duration-300 ${
                    mobileOpen
                      ? "translate-y-[7px] rotate-45"
                      : "translate-y-0 rotate-0"
                  }`}
                />
                <span
                  className={`block h-[2px] w-full rounded-full bg-white transition-all duration-300 ${
                    mobileOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                  }`}
                />
                <span
                  className={`block h-[2px] w-full rounded-full bg-white transition-all duration-300 ${
                    mobileOpen
                      ? "-translate-y-[7px] -rotate-45"
                      : "translate-y-0 rotate-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Slide-out Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[300px] max-w-[85vw] bg-[#0a3d7a] shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Drawer header */}
          <div className="flex h-[72px] items-center justify-between border-b border-white/10 px-5">
            <span className="font-[family-name:var(--font-barlow)] text-lg font-extrabold uppercase tracking-wide text-white">
              Menu
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Close menu"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Drawer links */}
          <nav className="flex-1 overflow-y-auto px-3 py-4">
            <ul className="space-y-1">
              {links.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/pack-diosa" &&
                    pathname?.startsWith(link.href));
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-white/15 text-white"
                          : "text-white/70 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <span className="mr-3 h-4 w-0.5 rounded-full bg-[#FF6B35]" />
                      )}
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Drawer CTA */}
          <div className="border-t border-white/10 p-5">
            <Link
              href="/pack-diosa/contact"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF6B35] py-3 text-sm font-bold text-white shadow-lg shadow-orange-600/25 transition-all duration-200 hover:bg-[#e55a2a]"
            >
              Get a Quote
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
