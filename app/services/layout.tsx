import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Cleaning Services in Melbourne | Wipely',
  description: 'Expert cleaning services across Melbourne including regular house cleaning, end of lease cleaning, spring cleaning, carpet cleaning, upholstery, oven, BBQ, and commercial cleaning. Eco-friendly products, satisfaction guaranteed.',
  keywords: [
    'cleaning services Melbourne',
    'house cleaning Melbourne',
    'end of lease cleaning',
    'spring cleaning',
    'carpet cleaning',
    'upholstery cleaning',
    'oven cleaning',
    'BBQ cleaning',
    'commercial cleaning',
    'eco-friendly cleaning',
    'professional cleaners',
    'bond cleaning',
    'staircase cleaning',
    'Melbourne cleaners'
  ],
  openGraph: {
    title: 'Professional Cleaning Services in Melbourne | Wipely',
    description: 'Trusted cleaning services for homes and businesses across Melbourne. From regular house cleaning to specialized services - carpet, upholstery, oven, BBQ & more. Book today!',
    type: 'website',
    locale: 'en_AU',
    siteName: 'Wipely Cleaning Services',
    images: [
      {
        url: '/images/servicesBanner.jpg',
        width: 1200,
        height: 630,
        alt: 'Wipely Professional Cleaning Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Cleaning Services in Melbourne | Wipely',
    description: 'Expert cleaning services across Melbourne. Regular cleaning, end of lease, carpet, upholstery, oven & more. Eco-friendly & satisfaction guaranteed.',
    images: ['/images/servicesBanner.jpg']
  },
  alternates: {
    canonical: '/services'
  }
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const servicesList = [
    { title: "Regular House Cleaning", includes: ["Bedroom & Living area dusting", "Mopping & vacuuming floors", "Surface disinfecting", "Kitchen sink wipe-down"] },
    { title: "End of Lease Cleaning", includes: ["Full property deep clean", "Oven, range hood & exhaust", "Carpet steam cleaning (optional)", "Bond-back guarantee support"] },
    { title: "One-off Spring Cleaning", includes: ["Deep cleaning all rooms", "Hard-to-reach areas", "Appliance cleaning", "Detailed dusting"] },
    { title: "Custom Cleaning", includes: ["Specialized cleaning services", "Flexible service options", "Professional equipment", "Tailored to your needs"] },
    { title: "Carpet Steam Cleaning", includes: ["Deep stain removal", "Allergen elimination", "Fast drying process", "Eco-friendly products"] },
    { title: "Upholstery Cleaning", includes: ["Fabric care treatment", "Stain removal", "Odor elimination", "Color protection"] },
    { title: "Oven Cleaning", includes: ["Non-toxic products", "Full disassembly", "Grease removal", "Shine restoration"] },
    { title: "BBQ Cleaning", includes: ["Complete disassembly", "Grease trap cleaning", "Grill restoration", "Safety check"] },
    { title: "Staircase Cleaning", includes: ["Balustrade cleaning", "Step deep clean", "Corner attention", "Safety focus"] },
    { title: "Commercial Spaces", includes: ["Desk & electronics wiped", "Trash disposal & restocking", "Kitchenette deep clean", "Glass partitions cleaned"] }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Wipely Cleaning Services',
    description: 'Professional cleaning services in Melbourne including house cleaning, end of lease, carpet, upholstery, oven, BBQ, and commercial cleaning',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Wipely',
      telephone: '+61435137936',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Melbourne',
        addressRegion: 'VIC',
        addressCountry: 'AU'
      }
    },
    areaServed: {
      '@type': 'City',
      name: 'Melbourne'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Cleaning Services',
      itemListElement: servicesList.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.includes.join(', ')
        }
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
