import React from 'react';

export default function Layout({
  Overview,
  CategoryRating,
  RatingManagement,
  RatingTrend,
  SelectBox,
}: {
  Overview: React.ReactNode;
  CategoryRating: React.ReactNode;
  RatingManagement: React.ReactNode;
  RatingTrend: React.ReactNode;
  SelectBox: React.ReactNode;
}) {
  return (
    <main className="flex min-w-[359px] flex-col gap-8">
      <section>{SelectBox}</section>
      <section>{Overview}</section>
      <section className="flex flex-col gap-4 desktop:flex-row">
        {RatingManagement}
        {CategoryRating}
      </section>
      <section>{RatingTrend}</section>
    </main>
  );
}
