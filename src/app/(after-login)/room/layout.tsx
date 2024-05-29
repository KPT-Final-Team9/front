import React from 'react';

export default function Layout({
  Overview,
  CategoryRating,
  RatingManagement,
  RatingTrend,
}: {
  Overview: React.ReactNode;
  CategoryRating: React.ReactNode;
  RatingManagement: React.ReactNode;
  RatingTrend: React.ReactNode;
}) {
  return (
    <main className="flex flex-col gap-8 p-5">
      <section className="bg-background">{Overview}</section>
      <section className="flex gap-3">
        <div className="bg-background">{RatingManagement}</div>
        <div className="bg-background">{CategoryRating}</div>
      </section>
      <section className="bg-background">{RatingTrend}</section>
    </main>
  );
}
