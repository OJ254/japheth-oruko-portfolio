'use client';

import { useEffect, useState } from 'react';

export function RoleFlip({ roles }: { roles: readonly string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex(current => (current + 1) % roles.length), 2400);
    return () => window.clearInterval(id);
  }, [roles.length]);

  return (
    <span className="inline-flex min-h-6 items-center font-mono text-sm text-brand" aria-live="polite">
      {roles[index]}
    </span>
  );
}
