import type { Metadata } from "next";
import { Lilita_One, Manrope } from "next/font/google";
import { siteData } from "@/data/site";
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
  title: {
    default: "Bayou Bella’s & Biscuits | Cajun Food Truck in Glenwood, AR",
    template: "%s | Bayou Bella’s & Biscuits",
  },
  description:
    "Bayou Bella’s & Biscuits is a women-owned Cajun and Creole food truck in Glenwood, Arkansas serving rotating Louisiana-style favorites. Call ahead or check Facebook for today’s menu.",
  keywords: [
    "Bayou Bella’s & Biscuits",
    "Bayou Bellas and Biscuits",
    "Glenwood AR food truck",
    "Cajun food Glenwood AR",
    "Creole food Glenwood Arkansas",
    "Louisiana food Glenwood AR",
    "gumbo Glenwood AR",
    "boudin cornbread",
  ],
  authors: [{ name: "Bayou Bella’s & Biscuits" }],
  creator: "Bayou Bella’s & Biscuits",
  openGraph: {
    title: "Bayou Bella’s & Biscuits | Cajun Food Truck in Glenwood, AR",
    description:
      "Authentic Louisiana Creole and Cajun favorites from a women-owned food truck in Glenwood, Arkansas. Call ahead or check Facebook for today’s rotating menu.",
    siteName: "Bayou Bella’s & Biscuits",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bayou Bella’s & Biscuits | Cajun Food Truck in Glenwood, AR",
    description:
      "Rotating Cajun and Creole favorites in Glenwood, Arkansas. Call ahead for today’s menu before favorites sell out.",
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "FoodTruck",
  name: siteData.name,
  description: siteData.description,
  telephone: siteData.phone,
  email: siteData.email,
  servesCuisine: ["Cajun", "Creole", "Louisiana", "Southern"],
  address: {
    "@type": "PostalAddress",
    streetAddress: siteData.streetAddress,
    addressLocality: siteData.city,
    addressRegion: siteData.region,
    postalCode: siteData.postalCode,
    addressCountry: "US",
  },
  sameAs: [siteData.facebookUrl],
  priceRange: "$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "10",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${heading.variable} ${body.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
