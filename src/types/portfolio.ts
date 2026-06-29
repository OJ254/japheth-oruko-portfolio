export type LinkItem = {
  label: string;
  href: string;
};

export type ProjectCategory =
  | 'frontend-development'
  | 'ui-design'
  | 'ux-logic'
  | 'product-management'
  | 'design-system';

export type Project = {
  id: string;
  legacyId: number;
  title: string;
  category: ProjectCategory;
  featured?: boolean;
  priority: number;
  role: string[];
  organization?: string;
  period?: string;
  tools: string[];
  skills: string[];
  summary: string;
  context?: string;
  problem?: string;
  approach?: string;
  outcome?: string;
  note?: string;
  links: LinkItem[];
  images: {
    src: string;
    alt: string;
  }[];
};

export type ExperienceRole = {
  title: string;
  duration: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
};

export type ExperienceCompany = {
  company: string;
  location: string;
  type: string;
  website: string;
  status: 'current' | 'previous';
  note?: string;
  roles: ExperienceRole[];
};

export type ProductProcessPhase = {
  id: string;
  phase: string;
  title: string;
  summary: string;
  focus: string;
  activities: string[];
  outputs: string[];
  proof: string;
};
