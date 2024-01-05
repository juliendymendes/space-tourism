import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow-condensed",
});

const bellefair = Bellefair({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bellefair",
});

export const metadata: Metadata = {
  title: "Space Tourism",
  description: "Travel to space",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${barlow.variable} ${barlowCondensed.variable} ${bellefair.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
