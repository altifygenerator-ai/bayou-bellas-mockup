import type { Metadata } from "next";
import { Lilita_One, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  metadataBase: new URL("https://www.bayoubellas.net"),
  title: {
    default: "Bayou Bella’s & Biscuits | Cajun Food Truck in Glenwood, AR",
    template: "%s | Bayou Bella’s & Biscuits",
  },
  description:
    "Bayou Bella’s & Biscuits is a women-owned Cajun and Creole food truck in Glenwood, Arkansas serving rotating Louisiana-style favorites, biscuits, gumbo, boudin cornbread, and Southern comfort food. Call ahead or check Facebook for today’s menu.",
  keywords: [
    "Bayou Bella’s & Biscuits",
    "Bayou Bellas and Biscuits",
    "Bayou Bella's and Biscuits",
    "Bayou Bella Glenwood AR",
    "Bayou Bellas Glenwood AR",
    "Glenwood AR food truck",
    "Glenwood Arkansas food truck",
    "food truck Glenwood AR",
    "Cajun food Glenwood AR",
    "Cajun food Glenwood Arkansas",
    "Creole food Glenwood Arkansas",
    "Louisiana food Glenwood AR",
    "Southern food Glenwood AR",
    "gumbo Glenwood AR",
    "boudin cornbread",
    "biscuits Glenwood AR",
    "women owned food truck Arkansas",
    "food near Glenwood Arkansas",
    "lunch Glenwood AR",
    "Arkansas food truck",
    "Cajun food truck Arkansas",
    "Creole food truck Arkansas",
  ],
  authors: [{ name: "Bayou Bella’s & Biscuits" }],
  creator: "Bayou Bella’s & Biscuits",
  publisher: "Bayou Bella’s & Biscuits",
  applicationName: "Bayou Bella’s & Biscuits",
  category: "Food & Drink",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Bayou Bella’s & Biscuits | Cajun Food Truck in Glenwood, AR",
    description:
      "Authentic Louisiana Creole and Cajun favorites from a women-owned food truck in Glenwood, Arkansas. Call ahead or check Facebook for today’s rotating menu.",
    siteName: "Bayou Bella’s & Biscuits",
    type: "website",
    locale: "en_US",
    url: "/",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bayou Bella’s & Biscuits Cajun food truck in Glenwood, Arkansas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bayou Bella’s & Biscuits | Cajun Food Truck in Glenwood, AR",
    description:
      "Rotating Cajun and Creole favorites in Glenwood, Arkansas. Call ahead for today’s menu before favorites sell out.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "FoodTruck",
  name: siteData.name,
  description: siteData.description,
  telephone: siteData.phone,
  email: siteData.email,
  url: "https://www.bayoubellas.net",
  image: "https://www.bayoubellas.net/og-image.jpg",
  servesCuisine: ["Cajun", "Creole", "Louisiana", "Southern"],
  address: {
    "@type": "PostalAddress",
    streetAddress: siteData.streetAddress,
    addressLocality: siteData.city,
    addressRegion: siteData.region,
    postalCode: siteData.postalCode,
    addressCountry: "US",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Glenwood",
      addressRegion: "AR",
    },
    {
      "@type": "AdministrativeArea",
      name: "Pike County",
      addressRegion: "AR",
    },
  ],
  sameAs: [siteData.facebookUrl],
  priceRange: "$",
  paymentAccepted: ["Cash", "Card"],
  hasMenu: siteData.facebookUrl,
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
        <Analytics />
      </body>
    </html>
  );
}