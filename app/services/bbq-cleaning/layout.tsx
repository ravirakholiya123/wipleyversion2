import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BBQ Cleaning Melbourne | Professional Grill Cleaning Service | Wipely',
  description: 'Professional BBQ cleaning in Melbourne. Advanced cleaning technology removes grease, burnt residue, and bacteria. Commercial and residential BBQ cleaning available.',
  keywords: 'BBQ cleaning Melbourne, BBQ cleaner, grill cleaning, barbecue cleaning, professional BBQ clean Melbourne',
  openGraph: {
    title: 'Professional BBQ Cleaning Melbourne | Wipely',
    description: 'Advanced BBQ cleaning technology removes grease, burnt residue, and bacteria, leaving your BBQ safe and ready to use.',
    type: 'website',
    images: ['/images/bbqImg.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional BBQ Cleaning Melbourne | Wipely',
    description: 'Professional BBQ cleaning with advanced technology.',
    images: ['/images/bbqImg.jpg'],
  },
};

export default function BBQCleaningLayout({
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
            name: 'Professional BBQ Cleaning',
            description: 'Advanced BBQ cleaning service that removes grease, burnt residue, and bacteria with eco-friendly methods.',
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
            serviceType: 'BBQ Cleaning',
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
