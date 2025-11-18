import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Upholstery Cleaning Melbourne | Sofa & Furniture Cleaning | Wipely',
  description: 'Professional upholstery cleaning in Melbourne. Restore sofas, chairs, and mattresses with fabric-safe cleaning and fast drying. Stain and odor removal.',
  keywords: 'upholstery cleaning Melbourne, sofa cleaning, furniture cleaning, mattress cleaning, fabric cleaning Melbourne',
  openGraph: {
    title: 'Professional Upholstery Cleaning Melbourne | Wipely',
    description: 'Restore sofas, chairs and mattresses with deep, fabric-safe cleaning and fast drying.',
    type: 'website',
    images: ['/images/upholsteryAfter.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Upholstery Cleaning Melbourne | Wipely',
    description: 'Professional upholstery cleaning with fast drying.',
    images: ['/images/upholsteryAfter.jpg'],
  },
};

export default function UpholsteryCleaningLayout({
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
            name: 'Professional Upholstery Cleaning',
            description: 'Fabric-safe upholstery cleaning for sofas, chairs, and mattresses with fast drying time.',
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
            serviceType: 'Upholstery Cleaning',
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
