import { USER } from '@/data/user';

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-5xl border-x border-line px-4 py-8 text-sm text-muted-text sm:px-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>Japheth Oruko. Product design, product management, and frontend implementation.</p>
        <a href={`mailto:${USER.email}`} className="font-semibold text-foreground hover:underline">
          {USER.email}
        </a>
      </div>
    </footer>
  );
}
