import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://wipely.com.au';
  
  const routes = [
    '',
    '/services',
    '/services/regular-cleaning',
    '/services/end-of-lease',
    '/services/spring-cleaning',
    '/services/custom-cleaning',
    '/services/carpet-cleaning',
    '/services/upholstery-cleaning',
    '/services/oven-cleaning',
    '/services/bbq-cleaning',
    '/services/staircase-cleaning',
    '/services/commercial-cleaning',
    '/book',
    '/reviews',
    '/blog',
    '/about',
    '/faq',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : route.startsWith('/blog') ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/services') ? 0.8 : 0.7,
  }));
}
