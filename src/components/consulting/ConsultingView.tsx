'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

export default function ConsultingView() {
  useEffect(() => {
    trackEvent('view_consulting', { page: '/consulting' });
  }, []);

  return null;
}
