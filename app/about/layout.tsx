import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Wipely - Melbourne\'s Trusted Cleaning Service',
  description: 'Learn about Wipely\'s mission to deliver reliable, personalized cleaning services to Melbourne families. 3 years serving Melbourne, 2,500+ homes cleaned, 4.9 star rating.',
  keywords: 'about wipely, melbourne cleaning company, professional cleaners melbourne, cleaning service values, trusted cleaners',
  openGraph: {
    title: 'About Wipely - More Than Just Cleaning',
    description: 'Discover how Wipely has become Melbourne\'s most trusted cleaning service with over 1,200 happy families and a 4.9 star rating.',
    type: 'website',
    url: 'https://wipely.au/about',
    siteName: 'Wipely',
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Wipely - Melbourne Cleaning Services',
    description: 'More than just cleaning - it\'s care you can count on. Serving Melbourne families since 2022.',
  },
  alternates: {
    canonical: 'https://wipely.au/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
