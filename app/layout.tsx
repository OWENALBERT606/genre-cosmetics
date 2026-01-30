import type { Metadata, Viewport } from "next";
import { DM_Sans, Outfit, Sora } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

// Primary font - DM Sans: Clean, geometric, highly readable
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Display font - Outfit: Modern, friendly, great for headings
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

// Alternative option - Sora: Geometric, tech-forward feel
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Genre Cosmetics | Inspired by Beauty",
    template: "%s | Genre Cosmetics",
  },
  description:
    "Discover premium medicated cosmetics and health supplements at Genre Cosmetics Limited. Science-backed skincare solutions for acne, repair, and radiant health in Uganda.",
  keywords: [
    "Genre Cosmetics",
    "Skincare Uganda",
    "Medicated Cosmetics",
    "Beauty Supplements",
    "Acne Treatment",
    "Kampala Cosmetics",
    "Health and Wellness",
    "Genre Uganda",
    "Natural Skincare",
  ],
  authors: [{ name: "Genre Cosmetics Limited" }],
  creator: "Genre Cosmetics Limited",
  publisher: "Genre Cosmetics Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Update with your actual domain when you deploy
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://genrecosmetics.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: "/",
    title: "Genre Cosmetics | Inspired by Beauty",
    description:
      "Science-backed skincare and wellness solutions. Shop our range of medicated cosmetics and supplements.",
    siteName: "Genre Cosmetics",
    images: [
      {
        url: "/og-image.png", // Ensure you add a branding image to public/og-image.png
        width: 1200,
        height: 630,
        alt: "Genre Cosmetics - Inspired by Beauty",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Genre Cosmetics | Inspired by Beauty",
    description:
      "Science-backed skincare and wellness solutions in Uganda.",
    images: ["/og-image.png"],
    creator: "@genrecosmetics",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#2AB09C", // Genre Teal
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#003B4F" }, // Genre Navy
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${outfit.variable} ${sora.variable} font-sans antialiased`}
      >
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "white",
              color: "#003B4F",
              border: "1px solid #e5e7eb",
            },
            className: "shadow-lg",
          }}
          richColors
          closeButton
        />
        {children}
      </body>
    </html>
  );
}