import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";

import RootComponent from "./RootComponent";

import SmoothScrolling from "@/components/SmoothScrolling";

const rajdhaniFont = Rajdhani({
  variable: "--font-Rajdhani",
  subsets: ["latin"],
  weight: "300"
});



export const metadata: Metadata = {
  title: "Avishkar Hyperloop | IIT Madras",
  description: "Avishkar Hyperloop is a student team from IIT Madras working on developing a scalable Hyperloop system.",
  keywords: ["Hyperloop", "IIT Madras", "Avishkar", "Transportation", "Future Tech", "Student Team"],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rajdhaniFont.variable} `}
      >
        <SmoothScrolling>
          <RootComponent>{children}</RootComponent>
        </SmoothScrolling>
      </body>
    </html>
  );
}
