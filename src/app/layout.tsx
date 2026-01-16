import type { Metadata, Viewport } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";

import RootComponent from "./RootComponent";

import SmoothScrolling from "@/components/SmoothScrolling";
import AnimatedCursor from "@/components/AnimatedCursor";

const rajdhaniFont = Rajdhani({
  variable: "--font-Rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Avishkar Hyperloop | IIT Madras",
    template: "%s | Avishkar Hyperloop"
  },
  description: "Avishkar Hyperloop is a student team from IIT Madras engineering a sustainable, ultra-high-speed hyperloop system for global connectivity.",
  keywords: ["Hyperloop", "IIT Madras", "Avishkar", "Transportation", "Future Tech", "Student Team", "Engineering"],
  authors: [{ name: "Avishkar Hyperloop" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://avishkarhyperloop.com",
    siteName: "Avishkar Hyperloop",
    title: "Avishkar Hyperloop | IIT Madras",
    description: "Pioneering the future of hyperloop transportation in India.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Avishkar Hyperloop Team" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@avishkar_iitm",
    creator: "@avishkar_iitm",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${rajdhaniFont.variable} font-sans antialiased bg-[#050505] text-white overflow-x-hidden selection:bg-green-500/30 selection:text-white`}
      >
        <SmoothScrolling>
          <AnimatedCursor />
          <RootComponent>{children}</RootComponent>
        </SmoothScrolling>
      </body>
    </html>
  );
}

