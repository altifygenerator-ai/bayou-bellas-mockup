import type { Metadata } from "next";
import { Lilita_One, Manrope } from "next/font/google";
import "./globals.css";

const heading = Lilita_One({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: "400",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bayou Bella’s & Biscuits | Cajun Food Truck in Glenwood, AR",
  description:
    "Bayou Bella’s & Biscuits is a women-owned Cajun and Creole food truck in Glenwood, Arkansas with rotating menu favorites, call-ahead options, and big Louisiana flavor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}