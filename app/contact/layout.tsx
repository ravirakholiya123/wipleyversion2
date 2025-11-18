import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Wipely - Melbourne Cleaning Services',
  description: 'Get in touch with Wipely for professional cleaning services in Melbourne. Contact us for quotes, questions, or bookings. Available Mon-Sat 8 AM - 6 PM.',
  keywords: 'contact wipely, cleaning service melbourne, cleaning quote, book cleaning service, melbourne cleaners contact',
  openGraph: {
    title: 'Contact Wipely - Professional Cleaning Services Melbourne',
    description: 'Reach out to Wipely for all your cleaning needs in Melbourne. Fast response, friendly service, and professional results.',
    type: 'website',
    url: 'https://wipely.au/contact',
    siteName: 'Wipely',
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Wipely - Melbourne Cleaning Services',
    description: 'Get in touch with Melbourne\'s trusted cleaning service. Available Mon-Sat 8 AM - 6 PM.',
  },
  alternates: {
    canonical: 'https://wipely.au/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Wipely",
    "description": "Get in touch with Wipely for professional cleaning services in Melbourne",
    "url": "https://wipely.au/contact",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Wipely",
      "telephone": "+61435137936",
      "email": "info@wipely.au",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Melbourne",
        "addressRegion": "VIC",
        "addressCountry": "AU"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "18:00"
        }
      ]
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
