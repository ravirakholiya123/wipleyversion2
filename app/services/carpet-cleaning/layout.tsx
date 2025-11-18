import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carpet Cleaning Melbourne | Professional Steam Cleaning | Wipely',
  description: 'Professional carpet steam cleaning in Melbourne. Deep hot water extraction removes dirt, stains, and allergens. Fast drying. Pet odor treatment available.',
  keywords: 'carpet cleaning Melbourne, steam cleaning, carpet steam clean, stain removal, pet odor removal, professional carpet care Melbourne',
  openGraph: {
    title: 'Professional Carpet Cleaning Melbourne | Wipely',
    description: 'Deep steam cleaning that removes dirt, stains, and allergens, leaving your carpets fresh, clean, and healthy.',
    type: 'website',
    images: ['/images/carpetSteamCleaning.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Carpet Cleaning Melbourne | Wipely',
    description: 'Deep steam cleaning for fresh, clean, and healthy carpets.',
    images: ['/images/carpetSteamCleaning.jpg'],
  },
};

export default function CarpetCleaningLayout({
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
            name: 'Professional Carpet Cleaning',
            description: 'Deep hot water extraction carpet cleaning service that removes embedded dirt, allergens, and bacteria.',
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
            serviceType: 'Carpet Cleaning',
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
