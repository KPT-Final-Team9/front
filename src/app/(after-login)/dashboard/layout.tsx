import React from 'react';
import DocumentStorageBox from '@/app/(after-login)/dashboard/_components/DocumentStorageBox';

export default function Layout({
  MainEver,
  MainRoomCompare,
  RightSection,
  MainRoomSchedule,
}: {
  MainEver: React.ReactNode;
  MainRoomCompare: React.ReactNode;
  RightSection: React.ReactNode;
  MainRoomSchedule: React.ReactNode;
}) {
  return (
    <>
      <main className="flex flex-col items-center pt-10 desktop:justify-start ">
        <section className="flex w-full flex-row max-[1330px]:flex-col desktop:gap-14">
          <article className="mb-[30px] flex w-full">{MainEver}</article>
          <aside className="relative mb-[70px] w-full desktop:mb-[30px] desktop:block desktop:h-[700px] min-[1330px]:max-w-[336px]">
            <div className="scrollbar-hide overflow-y-scroll desktop:h-[700px] desktop:overflow-x-hidden">
              {RightSection}
            </div>
            <div className="sidebar-gradient absolute  bottom-0 h-0 w-full desktop:h-40"></div>
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
