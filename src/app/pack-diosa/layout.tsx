import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import Link from "next/link";
import PackDiosaNav from "./nav";
import { WhatsAppButton } from "./components";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pack-DIOSA LLC | Nova Cargo — Wholesale Distribution from Jesup, GA",
    template: "%s | Pack-DIOSA LLC",
  },
  description:
    "Wholesale containers, pallets, and apparel lots from $150 to $18,500. Walk-in warehouse in Jesup, Georgia. Tue-Fri 9AM-5PM. No middleman.",
  keywords: [
    "wholesale containers",
    "pallet goods",
    "wholesale apparel",
    "wholesale clothing Jesup GA",
    "container shipping",
    "Nova Cargo",
    "Pack-DIOSA",
    "wholesale ladies clothing",
    "wholesale baby clothing",
    "bulk clothing lots",
  ],
  authors: [{ name: "Pack-DIOSA LLC" }],
  creator: "Pack-DIOSA LLC",
  publisher: "Pack-DIOSA LLC",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pack-diosa.com",
    siteName: "Pack-DIOSA LLC",
    title: "Pack-DIOSA LLC | Wholesale Distribution — Containers, Pallets & Apparel",
    description:
      "Walk-in wholesale warehouse in Jesup, GA. Containers $1,500-$18,500. Pallets from $2,300. Apparel lots from $150. No middleman pricing.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pack-DIOSA LLC — Nova Cargo Wholesale Distribution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pack-DIOSA LLC | Wholesale Distribution",
    description:
      "Containers, pallets, and apparel lots. Walk-in warehouse in Jesup, GA.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1a2b3c" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1a24" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const navLinks = [
  { label: "Home", href: "/pack-diosa" },
  { label: "Containers", href: "/pack-diosa/containers" },
  { label: "Pallets", href: "/pack-diosa/pallets" },
  { label: "Premium", href: "/pack-diosa/premium" },
  { label: "Ladies", href: "/pack-diosa/ladies" },
  { label: "Men", href: "/pack-diosa/men" },
  { label: "Sheets", href: "/pack-diosa/sheets" },
  { label: "Jogwear", href: "/pack-diosa/jogwear" },
  { label: "Baby", href: "/pack-diosa/baby" },
  { label: "Specials", href: "/pack-diosa/specials" },
  { label: "Contact", href: "/pack-diosa/contact" },
];

const footerCategories = [
  { label: "Containers", href: "/pack-diosa/containers" },
  { label: "Pallets", href: "/pack-diosa/pallets" },
  { label: "Premium", href: "/pack-diosa/premium" },
  { label: "Ladies", href: "/pack-diosa/ladies" },
  { label: "Men", href: "/pack-diosa/men" },
  { label: "Baby", href: "/pack-diosa/baby" },
];

const footerQuickLinks = [
  { label: "Sheets & Bedding", href: "/pack-diosa/sheets" },
  { label: "Jogwear", href: "/pack-diosa/jogwear" },
  { label: "Specials (Bal Pepe)", href: "/pack-diosa/specials" },
  { label: "Undergarments", href: "/pack-diosa/undergarments" },
  { label: "Contact & Inquiries", href: "/pack-diosa/contact" },
];

export default function PackDiosaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${barlowCondensed.variable} ${inter.variable} font-[family-name:var(--font-inter)] antialiased`}
    >
      <PackDiosaNav links={navLinks} />

      <main className="min-h-screen pt-[72px]">{children}</main>

      {/* WhatsApp floating button */}
      <WhatsAppButton />

      {/* Footer */}
      <footer className="bg-[#0f1a24] text-white">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c8aa6e] to-transparent" />

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Column 1: Company */}
            <div>
              <div className="mb-4">
                <span className="font-[family-name:var(--font-barlow)] text-2xl font-extrabold uppercase tracking-wide text-white">
                  Pack-DIOSA
                </span>
                <span className="ml-2 text-sm font-medium text-[#c8aa6e]">
                  LLC
                </span>
              </div>
              <p className="mb-1 font-[family-name:var(--font-barlow)] text-lg font-semibold uppercase tracking-wider text-[#c8aa6e]">
                Nova Cargo
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                Walk-in wholesale warehouse off I-95 in Jesup, Georgia.
                Containers, pallets, and apparel lots — no middleman pricing.
              </p>

              {/* Social Links */}
              <div className="mt-6 flex items-center gap-3">
                <a href="https://facebook.com/packdiosa" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-gray-400 transition-colors hover:bg-[#c8aa6e]/10 hover:text-[#c8aa6e]" aria-label="Facebook">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://instagram.com/packdiosa" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-gray-400 transition-colors hover:bg-[#c8aa6e]/10 hover:text-[#c8aa6e]" aria-label="Instagram">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://wa.me/19125550147" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-gray-400 transition-colors hover:bg-[#25D366]/10 hover:text-[#25D366]" aria-label="WhatsApp">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
              </div>
            </div>

            {/* Column 2: Categories */}
            <div>
              <h3 className="mb-5 font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-widest text-gray-300">
                Categories
              </h3>
              <ul className="space-y-3">
                {footerCategories.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors duration-200 hover:text-[#c8aa6e]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div>
              <h3 className="mb-5 font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-widest text-gray-300">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {footerQuickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors duration-200 hover:text-[#c8aa6e]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h3 className="mb-5 font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-widest text-gray-300">
                Visit Us
              </h3>
              <div className="space-y-4 text-sm text-gray-400">
                <div className="flex items-start gap-3">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#c8aa6e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>561 SW Broad St<br />Jesup, GA 31545</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#c8aa6e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+19125550147" className="transition-colors hover:text-[#c8aa6e]">
                    (912) 555-0147
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#c8aa6e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Tue – Fri<br />9:00 AM – 5:00 PM</span>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="h-4 w-4 shrink-0 text-[#c8aa6e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@pack-diosa.com" className="transition-colors duration-200 hover:text-[#c8aa6e]">
                    info@pack-diosa.com
                  </a>
                </div>
              </div>

              <Link
                href="/pack-diosa/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#c8aa6e] px-5 py-2.5 text-sm font-semibold text-[#0f1a24] transition-all duration-200 hover:bg-[#d4ba82] hover:shadow-lg"
              >
                Get a Quote
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Pack-DIOSA LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-gray-500">
              <span>Jesup, Georgia — Off I-95</span>
              <span className="hidden sm:inline">|</span>
              <span>Nationwide Shipping Available</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
