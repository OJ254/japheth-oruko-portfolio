import type { Metadata, MetadataRoute } from 'next';

import type { Project } from '@/types/portfolio';
import { USER } from '@/data/user';

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://japheth-oruko-portfolio.vercel.app'
).replace(/\/$/, '');

export const SITE_NAME = 'Japheth Oruko Portfolio';
export const SITE_LAST_MODIFIED = '2026-07-12';

export const defaultSeoDescription =
  'Portfolio of Japheth Oruko, a Nairobi-based Product Designer, Product Manager, Full-Stack Product Builder, and AI-assisted product builder helping teams design, document, and ship user-centered digital products with React, Next.js, Claude, and Codex.';

export const routes = [
  {
    path: '/',
    title:
      'Japheth Oruko | Product Designer, Product Manager, Full-Stack Product Builder & AI-assisted Product Builder',
    description: defaultSeoDescription,
    priority: 1,
  },
  {
    path: '/work',
    title: 'Work',
    description:
      'Case-study archive for Japheth Oruko across PixeSci, Ticet EDU, product documentation, UI/UX design, design systems, full-stack portal work, and frontend implementation.',
    priority: 0.9,
  },
  {
    path: '/experience',
    title: 'Experience',
    description:
      'Experience timeline for Japheth Oruko, including current PixeSci product design, frontend leadership, full-stack portal work, and previous Ticet EDU zero-to-one delivery work.',
    priority: 0.8,
  },
  {
    path: '/process',
    title: 'Process',
    description:
      'Japheth Oruko product process from market research and discovery through UX, UI, design systems, frontend development, portal workflows, testing, launch, and optimization.',
    priority: 0.8,
  },
  {
    path: '/contact',
    title: 'Contact',
    description:
      'Contact Japheth Oruko for product design, UX documentation, frontend implementation, full-stack portal work, contract work, or full-time opportunities.',
    priority: 0.8,
  },
] as const;

export function absoluteUrl(path = '/'): string {
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  type = 'website',
}: {
  title: string;
  description: string;
  path: string;
  type?: 'profile' | 'website';
}): Metadata {
  const fullTitle = title.includes(USER.displayName)
    ? title
    : `${title} | ${USER.displayName}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: 'en_KE',
      type,
      images: [
        {
          url: '/opengraph-image',
          width: 1200,
          height: 630,
          alt: `${USER.displayName} portfolio social preview`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: ['/opengraph-image'],
    },
  };
}

export function createSitemap(): MetadataRoute.Sitemap {
  return routes.map(route => ({
    url: absoluteUrl(route.path),
    lastModified: SITE_LAST_MODIFIED,
    changeFrequency: 'monthly',
    priority: route.priority,
  }));
}

export function personJsonLd() {
  return {
    '@type': 'Person',
    name: USER.displayName,
    givenName: USER.firstName,
    familyName: USER.lastName,
    alternateName: USER.username,
    image: absoluteUrl('/assets/images/logo.png'),
    jobTitle: [
      'Product Designer',
      'Product Manager',
      'Frontend Developer',
      'Full-Stack Product Builder',
      USER.currentRole,
    ],
    description: USER.shortBio,
    email: `mailto:${USER.email}`,
    telephone: USER.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
    },
    worksFor: {
      '@type': 'Organization',
      name: USER.currentCompany,
      url: USER.currentCompanyWebsite,
    },
    url: absoluteUrl('/'),
    sameAs: [USER.github, USER.linkedin, USER.behance, USER.spotify],
    knowsAbout: USER.keywords,
    knowsLanguage: USER.languages,
  };
}

export function profilePageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: SITE_NAME,
    description: defaultSeoDescription,
    url: absoluteUrl('/'),
    dateModified: SITE_LAST_MODIFIED,
    mainEntity: personJsonLd(),
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: absoluteUrl('/'),
    description: defaultSeoDescription,
    publisher: personJsonLd(),
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function projectItemListJsonLd(projects: Project[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Japheth Oruko portfolio case studies',
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: absoluteUrl(`/work#project-${project.id}`),
      item: {
        '@type': 'CreativeWork',
        name: project.title,
        description: project.summary,
        image: project.images[0] ? absoluteUrl(project.images[0].src) : undefined,
        creator: personJsonLd(),
        about: [...project.skills, ...project.tools],
      },
    })),
  };
}
