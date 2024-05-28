import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col gap-4 desktop:gap-8">
      <header className="flex flex-col gap-2">
        <h3 className="text-h4">평가 상세보기</h3>
        <p className="text-overline">내호실에 대한 모든 평가 내용을 자세히 살펴보실 수 있어요</p>
      </header>
      {children}
    </main>
  );
}
