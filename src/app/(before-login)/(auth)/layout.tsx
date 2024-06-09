import { Suspense } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex w-full items-center justify-center bg-background desktop:min-h-screen">
      <div className="h-[1061px] max-h-screen w-[928px] rounded-base bg-white">
        <Suspense fallback={<div>Loading...</div>}>{children} </Suspense>
      </div>
    </section>
  );
}
