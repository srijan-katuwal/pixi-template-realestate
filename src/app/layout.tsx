import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const siteUrl = "https://pixi-template-realestate.vercel.app";

export const metadata: Metadata = {
  title: "PIXI Real Estate Template | Premium Luxury Property Listing Website",
  description:
    "Showcase luxury properties with the PIXI Real Estate Template. A modern, SEO-optimized, and high-performance website template designed for real estate agents, brokers, and property developers.",
  keywords: [
    "real estate template",
    "luxury property website",
    "real estate website template",
    "property listing template",
    "Next.js real estate",
    "modern real estate design",
    "SEO real estate website",
    "premium property template",
    "real estate agent website",
    "property developer template",
  ],
  authors: [{ name: "PIXI Agency", url: "https://pixi.agency" }],
  creator: "PIXI Agency",
  publisher: "PIXI Agency",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "PIXI Real Estate Template",
    title: "PIXI Real Estate Template | Premium Luxury Property Listing Website",
    description:
      "Showcase luxury properties with the PIXI Real Estate Template. Modern UI/UX, blazing-fast performance, and built-in SEO optimization for real estate professionals.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "PIXI Real Estate Template Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@pixiagency",
    creator: "@pixiagency",
    title: "PIXI Real Estate Template | Premium Luxury Property Listing Website",
    description:
      "Showcase luxury properties with the PIXI Real Estate Template. Modern UI/UX, blazing-fast performance, and built-in SEO optimization.",
    images: [`${siteUrl}/og-image.jpg`],
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
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "PIXI Real Estate Template",
  url: siteUrl,
  description:
    "A premium, SEO-optimized real estate website template for luxury property listings.",
  publisher: {
    "@type": "Organization",
    name: "PIXI Agency",
    url: "https://pixi.agency",
  },
};

const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "PIXI Real Estate Template | Premium Luxury Property Listing Website",
  url: siteUrl,
  description:
    "Showcase luxury properties with the PIXI Real Estate Template. A modern, high-performance website template designed for real estate professionals.",
  isPartOf: {
    "@type": "WebSite",
    name: "PIXI Real Estate Template",
    url: siteUrl,
  },
  about: {
    "@type": "Thing",
    name: "Real Estate Website Template",
  },
};

const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "PIXI Real Estate Template",
  description:
    "A premium, modern real estate website template featuring stunning UI/UX, blazing-fast performance, and comprehensive SEO optimization. Perfect for luxury real estate agents, brokers, and property developers looking to showcase high-end properties.",
  image: `${siteUrl}/og-image.jpg`,
  brand: {
    "@type": "Brand",
    name: "PIXI Agency",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
    seller: {
      "@type": "Organization",
      name: "PIXI Agency",
    },
  },
  category: "Website Template",
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Framework",
      value: "Next.js",
    },
    {
      "@type": "PropertyValue",
      name: "Styling",
      value: "Tailwind CSS",
    },
    {
      "@type": "PropertyValue",
      name: "Performance",
      value: "Optimized for Core Web Vitals",
    },
    {
      "@type": "PropertyValue",
      name: "SEO",
      value: "Built-in SEO optimization",
    },
  ],
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PIXI Agency",
  url: "https://pixi.agency",
  logo: "https://pixi.agency/logo.png",
  description:
    "PIXI Agency is a web development agency specializing in modern, high-performance website templates and custom web solutions.",
  sameAs: [
    "https://twitter.com/pixiagency",
    "https://linkedin.com/company/pixiagency",
    "https://github.com/pixiagency",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "hello@pixi.agency",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="json-ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        <Script
          id="json-ld-webpage"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
        />
        <Script
          id="json-ld-product"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }}
        />
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
