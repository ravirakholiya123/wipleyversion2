import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Regular House Cleaning Services Melbourne | Weekly & Fortnightly | Wipely',
  description: 'Professional regular house cleaning services in Melbourne. Weekly or fortnightly cleaning to keep your home spotless. Book online for stress-free, consistent cleaning.',
  keywords: 'regular cleaning Melbourne, house cleaning services, weekly cleaning, fortnightly cleaning, recurring cleaning, home maintenance Melbourne',
  openGraph: {
    title: 'Regular House Cleaning Services Melbourne | Wipely',
    description: 'Weekly or fortnightly cleaning that keeps your space fresh, clean, and stress-free. Professional regular house cleaning in Melbourne.',
    type: 'website',
    images: ['/images/regularHouseImg.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Regular House Cleaning Services Melbourne | Wipely',
    description: 'Weekly or fortnightly cleaning that keeps your space fresh, clean, and stress-free.',
    images: ['/images/regularHouseImg.jpg'],
  },
};

export default function RegularCleaningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Regular House Cleaning',
            description: 'Weekly or fortnightly professional cleaning service that keeps your home spotless without the stress.',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Wipely',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Melbourne',
                addressRegion: 'VIC',
                addressCountry: 'AU',
              },
            },
            areaServed: {
              '@type': 'City',
              name: 'Melbourne',
            },
            serviceType: 'Regular House Cleaning',
            offers: {
              '@type': 'Offer',
              availability: 'https://schema.org/InStock',
              priceSpecification: {
                '@type': 'PriceSpecification',
                priceCurrency: 'AUD',
              },
            },
          }),
        }}
      />
      {children}
    </>
  );
}
