import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Wipely - Cleaning Tips & Stories',
  description: 'Read the latest cleaning tips, insights, and stories from Wipely. Learn about professional cleaning techniques and our journey serving Melbourne families.',
  keywords: 'cleaning blog, cleaning tips melbourne, professional cleaning advice, wipely stories, home cleaning guide',
  openGraph: {
    title: 'Wipely Blog - The Spark Behind Our Cleaning Service',
    description: 'Insights, tips, and stories from the world of professional cleaning in Melbourne.',
    type: 'website',
    url: 'https://wipely.au/blog',
    siteName: 'Wipely',
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wipely Blog - Cleaning Insights & Stories',
    description: 'A journey of clean spaces and fresh starts. Read our latest posts.',
  },
  alternates: {
    canonical: 'https://wipely.au/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
