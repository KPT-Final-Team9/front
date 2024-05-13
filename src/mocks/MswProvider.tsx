'use client';
import { useState, useEffect } from 'react';

export const MSWComponent = ({ children }: { children: React.ReactNode }) => {
  const [mswReady, setMSWReady] = useState(false);

  useEffect(() => {
    if (!mswReady) {
      const init = async () => {
        const { initMocks } = await import('./index');
        await initMocks();
        setMSWReady(true);
      };

      init();
    }
  }, [mswReady]);

  return mswReady ? children : <div>msw Loading...</div>;
};
