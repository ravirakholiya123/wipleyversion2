import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reviews & Testimonials | Wipely - See Real Results',
  description: 'Real before and after photos and customer reviews from Wipely\'s cleaning services in Melbourne. 4.9 star rating, 2,500+ homes cleaned, 1,200+ happy clients.',
  keywords: 'wipely reviews, cleaning testimonials melbourne, before after cleaning, customer reviews, cleaning service ratings',
  openGraph: {
    title: 'Reviews & Results - From Messy to Marvelous',
    description: 'See real transformations and read authentic reviews from Melbourne families who trust Wipely for their cleaning needs.',
    type: 'website',
    url: 'https://wipely.au/reviews',
    siteName: 'Wipely',
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wipely Reviews - Real Results from Real Homes',
    description: '4.9 star rating from 1,200+ happy clients. See the transformation yourself.',
  },
  alternates: {
    canonical: 'https://wipely.au/reviews',
  },
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Cleaning Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Wipely",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1200",
        "bestRating": "5"
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
