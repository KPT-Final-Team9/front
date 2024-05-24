// MSWComponent.tsx
'use client';

import { useEffect } from 'react';

const isMockingMode = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled';

export const MSWComponent = () => {
  useEffect(() => {
    if (!isMockingMode) return;
    if (typeof window !== 'undefined') {
      require('@/mocks/browser');
    }
  }, []);

  return null;
};
