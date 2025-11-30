import Script from "next/script";

const siteUrl = "https://pixi-template-realestate.vercel.app";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const propertyTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${propertyTitle} | PIXI Real Estate`,
    description: `Discover this stunning property: ${propertyTitle}. View photos, details, and schedule a tour with our expert agents. Premium luxury real estate listing.`,
    keywords: [
      "luxury property",
      "real estate listing",
      "property for sale",
      "Toronto real estate",
      propertyTitle,
      "PIXI Real Estate",
    ],
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `${siteUrl}/property/${slug}`,
      siteName: "PIXI Real Estate Template",
      title: `${propertyTitle} | PIXI Real Estate`,
      description: `Discover this stunning property: ${propertyTitle}. Premium luxury real estate listing with detailed photos and information.`,
      images: [
        {
          url: `${siteUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: propertyTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${propertyTitle} | PIXI Real Estate`,
      description: `Discover this stunning property: ${propertyTitle}. Premium luxury real estate listing.`,
      images: [`${siteUrl}/og-image.jpg`],
    },
    alternates: {
      canonical: `${siteUrl}/property/${slug}`,
    },
  };
}

export default async function PropertyLayout({ children, params }) {
  const { slug } = await params;
  const propertyTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const jsonLdProperty = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: propertyTitle,
    url: `${siteUrl}/property/${slug}`,
    description: `Luxury property listing: ${propertyTitle}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Demo Street",
      addressLocality: "Toronto",
      addressRegion: "ON",
      postalCode: "M1M 1M1",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.6532,
      longitude: -79.3832,
    },
    offers: {
      "@type": "Offer",
      price: "1240000",
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
    },
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Properties",
        item: `${siteUrl}/#properties`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: propertyTitle,
        item: `${siteUrl}/property/${slug}`,
      },
    ],
  };

  return (
    <>
      <Script
        id="json-ld-property"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProperty) }}
      />
      <Script
        id="json-ld-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      {children}
    </>
  );
}

