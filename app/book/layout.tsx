import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book Your Cleaning Service - Wipely | Melbourne Professional Cleaners',
  description: 'Book professional cleaning services in Melbourne with Wipely. Get an instant quote for regular house cleaning, end of lease cleaning, spring cleaning, or custom services. No payment required upfront.',
  keywords: 'book cleaning Melbourne, cleaning service booking, end of lease cleaning quote, house cleaning quote, professional cleaners Melbourne, cleaning service prices',
  openGraph: {
    title: 'Book Your Cleaning Service - Wipely',
    description: 'Get a personalized quote for your cleaning needs in Melbourne. Choose from regular cleaning, end of lease, spring cleaning, or custom services.',
    type: 'website',
    url: 'https://wipely.com/book',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Your Cleaning Service - Wipely',
    description: 'Get a personalized quote for your cleaning needs in Melbourne. Professional cleaning services with instant quotes.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://wipely.com/book',
  },
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Cleaning Service Booking",
    "name": "Book Professional Cleaning Services - Wipely",
    "description": "Book professional cleaning services in Melbourne with Wipely. Get instant quotes for regular house cleaning, end of lease cleaning, spring cleaning, or custom services.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Wipely Cleaning Services",
      "telephone": "+61435137936",
      "email": "info@wipely.au",
      "url": "https://wipely.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Melbourne",
        "addressRegion": "VIC",
        "addressCountry": "AU"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Melbourne"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
