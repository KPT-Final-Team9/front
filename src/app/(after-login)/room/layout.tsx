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
    <main className="flex flex-col gap-8 ">
      <section>{Overview}</section>
      <section className="flex gap-3">
        {RatingManagement}
        {CategoryRating}
      </section>
      <section>{RatingTrend}</section>
    </main>
  );
}
