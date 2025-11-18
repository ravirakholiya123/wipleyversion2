import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Cleaning Services Melbourne | Specialized Cleaning | Wipely',
  description: 'Professional custom cleaning services in Melbourne. Tailored cleaning solutions for unique requirements. Deep kitchen, bathroom, windows, and specialized cleaning services.',
  keywords: 'custom cleaning Melbourne, specialized cleaning, tailored cleaning services, deep kitchen cleaning, professional cleaning Melbourne',
  openGraph: {
    title: 'Custom Cleaning Services Melbourne | Wipely',
    description: 'Specialized cleaning solutions tailored to your unique needs and requirements.',
    type: 'website',
    images: ['/images/customCleaningImg.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Cleaning Services Melbourne | Wipely',
    description: 'Specialized cleaning solutions tailored to your unique needs.',
    images: ['/images/customCleaningImg.jpg'],
  },
};

export default function CustomCleaningLayout({
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
            name: 'Custom Cleaning Services',
            description: 'Specialized cleaning solutions tailored to your unique needs. Professional custom cleaning in Melbourne.',
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
            serviceType: 'Custom Cleaning',
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
