import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://wipely.com.au'),
  title: {
    default: 'Wipely - Professional Cleaning Services in Melbourne',
    template: '%s | Wipely Cleaning Services',
  },
  description: 'Professional cleaning services across Melbourne. From homes to high-rises, we deliver expert cleaning solutions with eco-friendly products. Book today for a cleaner, healthier environment.',
  keywords: ['cleaning services Melbourne', 'house cleaning', 'end of lease cleaning', 'carpet cleaning', 'professional cleaners Melbourne', 'eco-friendly cleaning'],
  authors: [{ name: 'Wipely' }],
  creator: 'Wipely',
  publisher: 'Wipely',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://wipely.com.au',
    title: 'Wipely - Professional Cleaning Services in Melbourne',
    description: 'Professional cleaning services across Melbourne. From homes to high-rises, we deliver expert cleaning solutions with eco-friendly products.',
    siteName: 'Wipely',
    images: [
      {
        url: '/images/Banner.jpeg',
        width: 1200,
        height: 630,
        alt: 'Wipely Professional Cleaning Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wipely - Professional Cleaning Services in Melbourne',
    description: 'Professional cleaning services across Melbourne. Expert cleaners using eco-friendly products.',
    images: ['/images/Banner.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://wipely.com.au/#organization",
        "name": "Wipely",
        "url": "https://wipely.com.au",
        "logo": {
          "@type": "ImageObject",
          "url": "https://wipely.com.au/images/Banner.jpeg"
        },
        "description": "Professional cleaning services across Melbourne. From homes to high-rises, we deliver expert cleaning solutions with eco-friendly products.",
        "telephone": "+61435137936",
        "email": "info@wipely.au",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Melbourne",
          "addressRegion": "VIC",
          "addressCountry": "AU"
        },
        "areaServed": {
          "@type": "City",
          "name": "Melbourne"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1200",
          "bestRating": "5"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://wipely.com.au/#website",
        "url": "https://wipely.com.au",
        "name": "Wipely - Professional Cleaning Services in Melbourne",
        "description": "Professional cleaning services across Melbourne. Expert cleaners using eco-friendly products for homes and businesses.",
        "publisher": {
          "@id": "https://wipely.com.au/#organization"
        }
      }
    ]
  };

  return (
    <html lang="en-AU" className={inter.variable}>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
