import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className="mx-auto h-[774px] w-[375px] bg-slate-700">{children}</main>;
}
