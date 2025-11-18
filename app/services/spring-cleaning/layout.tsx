import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spring Cleaning Melbourne | One-Off Deep Clean Service | Wipely',
  description: 'Professional spring cleaning in Melbourne. One-off deep cleaning service with no contracts. Revive your home with a comprehensive seasonal refresh.',
  keywords: 'spring cleaning Melbourne, one-off cleaning, deep cleaning, seasonal cleaning, house refresh, comprehensive cleaning Melbourne',
  openGraph: {
    title: 'Spring Cleaning Melbourne | One-Off Deep Clean | Wipely',
    description: 'Revive your home with a comprehensive deep clean. No contracts, just a fresh start.',
    type: 'website',
    images: ['/images/oneOfSpringImg.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spring Cleaning Melbourne | Wipely',
    description: 'Professional one-off deep cleaning service in Melbourne.',
    images: ['/images/oneOfSpringImg.jpg'],
  },
};

export default function SpringCleaningLayout({
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
            name: 'Spring Cleaning Service',
            description: 'Comprehensive one-off spring cleaning service with professional deep cleaning for your home.',
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
            serviceType: 'Spring Cleaning',
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
