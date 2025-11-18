import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'End of Lease Cleaning Melbourne | Bond Back Guarantee | Wipely',
  description: 'Professional end of lease cleaning in Melbourne with bond back guarantee. Expert bond cleaning service trusted by real estate agents. Get your full deposit back.',
  keywords: 'end of lease cleaning Melbourne, bond cleaning, exit cleaning, vacate cleaning, bond back guarantee, rental property cleaning Melbourne',
  openGraph: {
    title: 'End of Lease Cleaning Melbourne | Bond Back Guarantee | Wipely',
    description: 'Move out stress-free, we clean so you don\'t lose your bond. Professional bond cleaning service in Melbourne.',
    type: 'website',
    images: ['/images/endOfLeaseImg.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'End of Lease Cleaning Melbourne | Wipely',
    description: 'Professional bond cleaning with 100% bond back guarantee.',
    images: ['/images/endOfLeaseImg.jpg'],
  },
};

export default function EndOfLeaseLayout({
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
            name: 'End of Lease Cleaning',
            description: 'Comprehensive bond cleaning service with bond back guarantee. Professional end of lease cleaning in Melbourne.',
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
            serviceType: 'End of Lease Cleaning',
            offers: {
              '@type': 'Offer',
              availability: 'https://schema.org/InStock',
              priceSpecification: {
                '@type': 'PriceSpecification',
                priceCurrency: 'AUD',
              },
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '500',
            },
          }),
        }}
      />
      {children}
    </>
  );
}
