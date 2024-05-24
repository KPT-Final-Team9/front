import React from 'react';

export default function Layout({
  MainEver,
  MainRoomCompare,
  RightSection,
}: {
  MainEver: React.ReactNode;
  MainRoomCompare: React.ReactNode;
  RightSection: React.ReactNode;
}) {
  return (
    <div className="mt-10 flex bg-background">
      <main className="mx-auto flex max-w-[1440px] flex-col items-start justify-center">
        <section className="flex  flex-col desktop:flex-row desktop:gap-14">
          <article className="mx-auto mb-[30px] flex">{MainEver}</article>
          <aside className="relative mb-[70px]  h-[400px] w-[336px] desktop:mb-[30px] desktop:block desktop:h-[700px]">
            <div className="scrollbar-hide absolute h-[400px] w-[inherit] overflow-x-hidden overflow-y-scroll desktop:h-[700px]">
              {RightSection}
            </div>
            <div className="sidebar-gradient absolute  bottom-0 h-0 w-full desktop:h-40"></div>
          </aside>
        </section>
        <section className="z-20 w-full">{MainRoomCompare}</section>
      </main>
    </div>
  );
}
