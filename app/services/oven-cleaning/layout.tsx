import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Oven Cleaning Melbourne | Professional Deep Cleaning | Wipely',
  description: 'Professional oven cleaning in Melbourne. Deep cleaning that removes grease, grime, and burnt-on food. Eco-friendly solutions. Rangehood cleaning available.',
  keywords: 'oven cleaning Melbourne, professional oven clean, oven deep clean, rangehood cleaning, oven cleaning service Melbourne',
  openGraph: {
    title: 'Professional Oven Cleaning Melbourne | Wipely',
    description: 'Deep cleaning that removes grease, grime, and burnt-on food, leaving your oven sparkling clean.',
    type: 'website',
    images: ['/images/ovenBanner.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Oven Cleaning Melbourne | Wipely',
    description: 'Professional oven cleaning with eco-friendly solutions.',
    images: ['/images/ovenBanner.jpg'],
  },
};

export default function OvenCleaningLayout({
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
            name: 'Professional Oven Cleaning',
            description: 'Deep oven cleaning service that removes grease, grime, and burnt-on food with eco-friendly solutions.',
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
            serviceType: 'Oven Cleaning',
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
