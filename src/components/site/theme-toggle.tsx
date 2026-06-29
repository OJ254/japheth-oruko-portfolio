'use client';

import { useSyncExternalStore } from 'react';
import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

type ThemePreference = 'light' | 'dark' | 'system';

const themes: ThemePreference[] = ['light', 'dark', 'system'];
const subscribe = () => () => {};

const themeDetails: Record<ThemePreference, {
  label: string;
  nextLabel: string;
  value: ThemePreference;
  icon: React.ComponentType<{ className?: string }>;
}> = {
  light: { value: 'light', label: 'Light theme', nextLabel: 'dark theme', icon: Sun },
  dark: { value: 'dark', label: 'Dark theme', nextLabel: 'system theme', icon: Moon },
  system: { value: 'system', label: 'System theme', nextLabel: 'light theme', icon: Monitor },
};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
  const themePreference = isThemePreference(theme) ? theme : 'system';
  const currentTheme = themeDetails[mounted ? themePreference : 'system'];
  const Icon = currentTheme.icon;
  const nextTheme = themes[(themes.indexOf(themePreference) + 1) % themes.length] ?? 'light';

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="icon-lg"
          aria-label={`${currentTheme.label} active. Switch to ${currentTheme.nextLabel}.`}
          onClick={() => setTheme(nextTheme)}
        >
          <Icon className="size-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        {currentTheme.label}. Click for {currentTheme.nextLabel}.
      </TooltipContent>
    </Tooltip>
  );
}

function isThemePreference(value: string | null | undefined): value is ThemePreference {
  return value === 'light' || value === 'dark' || value === 'system';
}
