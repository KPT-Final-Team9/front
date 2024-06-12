import React from 'react';
import DocumentStorageBox from '@/app/(after-login)/dashboard/_components/DocumentStorageBox';
export default function Layout({
  Overview,
  MainRoomCompare,
  RatingTrends,
  MainRoomSchedule,
}: {
  Overview: React.ReactNode;
  MainRoomCompare: React.ReactNode;
  RatingTrends: React.ReactNode;
  MainRoomSchedule: React.ReactNode;
}) {
  return (
    <>
      <main className="flex flex-col items-center pt-10 desktop:justify-start ">
        <section className="flex w-full flex-row max-[1330px]:flex-col desktop:gap-14">
          <article className="mb-[24px] flex w-full">{Overview}</article>
          <aside className="relative mb-[30px] w-full desktop:mb-[30px] desktop:block desktop:h-[700px] min-[1330px]:max-w-[336px]">
            <h2 className="mb-4 ml-3 block text-h4 text-text-primary desktop:hidden">내 호실 바로가기</h2>
            <div className="scrollbar-hide overflow-y-scroll desktop:h-[700px] ">{RatingTrends}</div>
            <div className="sidebar-gradient pointer-events-none  absolute bottom-0 h-0 w-full desktop:h-40" />
          </aside>
        </section>
        <section className=" mb-5 w-full desktop:w-full">{MainRoomCompare}</section>
        <section className="flex w-full flex-col gap-14 desktop:w-full desktop:flex-row">
          <article className="flex-grow ">{MainRoomSchedule}</article>
          <article>
            <DocumentStorageBox />
          </article>
        </section>
      </main>
    </>
  );
}
