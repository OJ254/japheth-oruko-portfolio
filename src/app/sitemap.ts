import type { MetadataRoute } from 'next';

import { createSitemap } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  return createSitemap();
}
