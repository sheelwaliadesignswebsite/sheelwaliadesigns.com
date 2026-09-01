import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Font setup
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://sheelwaliadesigns.com"
  ),
  title: "Sheelwalia Designs | Luxury Interior Design",
  description:
    "Sheelwalia Designs creates timeless residential and commercial interiors with elegance, comfort, and refined craftsmanship.",
  authors: [{ name: "Sheelwalia Designs" }],
  openGraph: {
    title: "Sheelwalia Designs | Luxury Interior Design",
    description:
      "Sheelwalia Designs creates timeless residential and commercial interiors with elegance, comfort, and refined craftsmanship.",
    url: "https://sheelwaliadesigns.com",
    type: "website",
    images: [
      {
        url: "https://sheelwaliadesigns.com/images/heros.PNG",
        width: 1200,
        height: 630,
        alt: "Sheelwalia Designs interior design showcase",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  icons: {
    icon: "/images/icons/favicon.ico",
    shortcut: "/images/icons/favicon-32x32.png",
    apple: "/images/icons/apple-touch-icon.png",
  },
  manifest: "/images/icons/site.webmanifest",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8f3eb",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth bg-cream text-gray-900">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link rel="icon" href="/images/icons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          href="/images/icons/apple-touch-icon.png"
        />
        <link rel="manifest" href="/images/icons/site.webmanifest" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/icons/favicon-16x16.png"
        />

        <meta
          name="description"
          content="Sheelwalia Designs creates timeless residential and commercial interiors with elegance, comfort, and refined craftsmanship."
        />

        <meta property="og:url" content="https://sheelwaliadesigns.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sheelwalia Designs | Luxury Interior Design" />
        <meta
          property="og:description"
          content="Sheelwalia Designs creates timeless residential and commercial interiors with elegance, comfort, and refined craftsmanship."
        />
        <meta property="og:image" content="https://sheelwaliadesigns.com/images/heros.PNG" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="sheelwaliadesigns.com" />
        <meta property="twitter:url" content="https://sheelwaliadesigns.com" />
        <meta name="twitter:title" content="Sheelwalia Designs | Luxury Interior Design" />
        <meta
          name="twitter:description"
          content="Sheelwalia Designs creates timeless residential and commercial interiors with elegance, comfort, and refined craftsmanship."
        />
        <meta name="twitter:image" content="https://sheelwaliadesigns.com/images/heros.PNG" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased bg-cream`}
      >
        {children}
      </body>
    </html>
  );
}
