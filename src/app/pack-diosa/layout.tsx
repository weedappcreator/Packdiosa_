import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Pack-DIOSA LLC | Premium Logistics & Cargo Solutions",
  description: "Pack-DIOSA LLC - Your trusted partner for container shipping, pallet logistics, and wholesale apparel distribution. Transparent pricing, reliable delivery, worldwide service from Jesup, Georgia.",
  keywords: ["logistics", "cargo", "container shipping", "pallet freight", "wholesale apparel", "freight broker", "shipping", "Jesup GA"],
  authors: [{ name: "Pack-DIOSA LLC" }],
  creator: "Pack-DIOSA LLC",
  publisher: "Pack-DIOSA LLC",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pack-diosa.com",
    siteName: "Pack-DIOSA LLC",
    title: "Pack-DIOSA LLC | Premium Logistics & Cargo Solutions",
    description: "Container shipping, pallet logistics, and wholesale apparel distribution. Transparent pricing. Reliable delivery.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pack-DIOSA LLC - Premium Logistics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pack-DIOSA LLC | Premium Logistics & Cargo Solutions",
    description: "Container shipping, pallet logistics, and wholesale apparel distribution.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fef3c7" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1917" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function PackDiosaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Geist:wght@400;500;600;700&display=swap" rel="stylesheet" />
      {children}
    </>
  );
}