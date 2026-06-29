'use client';

import { useEffect, useState } from 'react';

export function LocalTime() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat('en-KE', {
      timeZone: 'Africa/Nairobi',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
    const tick = () => setTime(formatter.format(new Date()));
    const timeout = window.setTimeout(tick, 0);
    const id = window.setInterval(tick, 30000);
    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(id);
    };
  }, []);

  return <>{time || 'Nairobi time'}</>;
}
