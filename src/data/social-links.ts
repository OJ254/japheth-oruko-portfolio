import { USER } from './user';

export const socialLinks = [
  { label: 'LinkedIn', href: USER.linkedin, priority: 1 },
  { label: 'GitHub', href: USER.github, priority: 2 },
  { label: 'Behance', href: USER.behance, priority: 3 },
  { label: 'Calendly', href: USER.calendly, priority: 4 },
  { label: 'Spotify', href: USER.spotify, priority: 5 },
] as const;
