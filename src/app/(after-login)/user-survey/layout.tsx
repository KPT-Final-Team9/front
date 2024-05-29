import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className="mx-auto max-w-[375px] bg-white">{children}</main>;
}
