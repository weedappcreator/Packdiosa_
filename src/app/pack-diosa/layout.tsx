import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import Link from "next/link";
import PackDiosaNav from "./nav";

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
    default: "Pack-DIOSA LLC | Nova Cargo - Premium Logistics & Wholesale Apparel",
    template: "%s | Pack-DIOSA LLC",
  },
  description:
    "Pack-DIOSA LLC / Nova Cargo - Your trusted partner for container shipping, pallet logistics, and wholesale apparel distribution. Transparent pricing, reliable delivery from Jesup, Georgia.",
  keywords: [
    "logistics",
    "cargo",
    "container shipping",
    "pallet freight",
    "wholesale apparel",
    "freight broker",
    "shipping",
    "Jesup GA",
    "Nova Cargo",
    "Pack-DIOSA",
    "wholesale clothing",
    "premium logistics",
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
    title: "Pack-DIOSA LLC | Nova Cargo - Premium Logistics & Wholesale Apparel",
    description:
      "Container shipping, pallet logistics, and wholesale apparel distribution. Transparent pricing. Reliable delivery.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pack-DIOSA LLC - Nova Cargo Premium Logistics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pack-DIOSA LLC | Nova Cargo - Premium Logistics",
    description:
      "Container shipping, pallet logistics, and wholesale apparel distribution.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0066CC" },
    { media: "(prefers-color-scheme: dark)", color: "#1A1A1A" },
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
  { label: "Sheets", href: "/pack-diosa/sheets" },
  { label: "Jogwear", href: "/pack-diosa/jogwear" },
  { label: "Specials", href: "/pack-diosa/specials" },
  { label: "Contact", href: "/pack-diosa/contact" },
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
      {/* Navigation */}
      <PackDiosaNav links={navLinks} />

      {/* Main Content */}
      <main className="min-h-screen pt-[72px]">{children}</main>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white">
        {/* Top accent line */}
        <div className="h-1 w-full bg-gradient-to-r from-[#0066CC] via-[#7B5FFF] to-[#FF6B35]" />

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Column 1: Company Info */}
            <div>
              <div className="mb-4">
                <span className="font-[family-name:var(--font-barlow)] text-2xl font-extrabold uppercase tracking-wide text-white">
                  Pack-DIOSA
                </span>
                <span className="ml-2 text-sm font-medium text-[#7B5FFF]">
                  LLC
                </span>
              </div>
              <p className="mb-1 font-[family-name:var(--font-barlow)] text-lg font-semibold uppercase tracking-wider text-[#FF6B35]">
                Nova Cargo
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                Your trusted partner for container shipping, pallet logistics,
                and wholesale apparel distribution. Transparent pricing,
                reliable delivery.
              </p>
              <div className="mt-6 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-xs text-gray-400">
                  Serving customers nationwide
                </span>
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
                      className="text-sm text-gray-400 transition-colors duration-200 hover:text-[#FF6B35]"
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
                      className="text-sm text-gray-400 transition-colors duration-200 hover:text-[#FF6B35]"
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
                Contact
              </h3>
              <div className="space-y-4 text-sm text-gray-400">
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#0066CC]"
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
                  <span>
                    561 SW Broad St
                    <br />
                    Jesup, GA 31545
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#0066CC]"
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
                  <span>
                    Tue - Fri
                    <br />
                    9:00 AM - 5:00 PM
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <svg
                    className="h-4 w-4 shrink-0 text-[#0066CC]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:info@pack-diosa.com"
                    className="transition-colors duration-200 hover:text-[#FF6B35]"
                  >
                    info@pack-diosa.com
                  </a>
                </div>
              </div>

              {/* CTA in footer */}
              <Link
                href="/pack-diosa/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#FF6B35] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#e55a2a] hover:shadow-lg hover:shadow-orange-500/25"
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

          {/* Bottom bar */}
          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 sm:flex-row">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Pack-DIOSA LLC. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-gray-500">
              <span>Jesup, Georgia</span>
              <span className="hidden sm:inline">|</span>
              <span>Nationwide Shipping</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
