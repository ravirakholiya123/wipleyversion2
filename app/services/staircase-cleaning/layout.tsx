import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Staircase Cleaning Melbourne | Wooden, Carpeted & Tiled Stairs | Wipely',
  description: 'Professional staircase cleaning in Melbourne. Deep cleaning for wooden, carpeted, and tiled stairs. Restore your stairs with safe, professional cleaning.',
  keywords: 'staircase cleaning Melbourne, stairs cleaning, wooden stairs cleaning, carpeted stairs, tiled stairs cleaning Melbourne',
  openGraph: {
    title: 'Professional Staircase Cleaning Melbourne | Wipely',
    description: 'Restore wooden, carpeted, or tiled stairs with deep, safe cleaning.',
    type: 'website',
    images: ['/images/staircaseImg.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Staircase Cleaning Melbourne | Wipely',
    description: 'Deep cleaning for wooden, carpeted, and tiled stairs.',
    images: ['/images/staircaseImg.jpg'],
  },
};

export default function StaircaseCleaningLayout({
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
            name: 'Professional Staircase Cleaning',
            description: 'Deep cleaning service for wooden, carpeted, and tiled staircases with safe cleaning methods.',
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
            serviceType: 'Staircase Cleaning',
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
