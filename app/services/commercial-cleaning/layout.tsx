import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Melbourne | Office, Retail & Healthcare Cleaning | Wipely',
  description: 'Professional commercial cleaning in Melbourne. Expert cleaning for offices, retail stores, clinics, and all commercial environments. Eco-friendly solutions.',
  keywords: 'commercial cleaning Melbourne, office cleaning, retail cleaning, healthcare cleaning, professional commercial cleaners Melbourne',
  openGraph: {
    title: 'Professional Commercial Cleaning Melbourne | Wipely',
    description: 'Expert cleaning for offices, retail stores, clinics, and all commercial environments.',
    type: 'website',
    images: ['/images/commercialImg.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Commercial Cleaning Melbourne | Wipely',
    description: 'Expert commercial cleaning services in Melbourne.',
    images: ['/images/commercialImg.jpg'],
  },
};

export default function CommercialCleaningLayout({
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
            name: 'Professional Commercial Cleaning',
            description: 'Expert cleaning service for offices, retail spaces, clinics, and all commercial environments.',
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
            serviceType: 'Commercial Cleaning',
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
