import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto flex min-h-screen max-w-[375px] justify-center overflow-auto bg-background">
      {children}
    </main>
  );
}
