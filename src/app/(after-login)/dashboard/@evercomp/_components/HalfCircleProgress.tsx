import React from 'react';
import HalfCircularProgressRating from '@Monocles/progress-bar/HalfCircularProgressRating';
import ScoreBadge from '@Atoms/badge/ScoreBadge';

const Pusion = () => {
  return (
    <div className="-m-t-[20px] flex h-[160px] grow flex-col items-end overflow-hidden px-[16px] pr-[24px] pt-[12px] desktop:h-fit desktop:px-[19px] desktop:pt-[14px]">
      <h3 className="self-start text-h4">관리점수</h3>
      <div className="flex flex-col ">
        <div className="self-center desktop:mb-[10px]">
          <ScoreBadge type="management">보통수준</ScoreBadge>
        </div>
        <div className="h-[124px] self-center overflow-hidden">
          <div className="relative w-[180px] desktop:w-[249px]">
            <HalfCircularProgressRating
              color="#77D276"
              percent={93}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HalfCircleProgress() {
  return (
    <div className="flex h-fit flex-row flex-wrap justify-center divide-x-2 divide-y-2 overflow-hidden rounded-container border-[0.92px] border-[#D1D5DB] desktop:flex-nowrap">
      <Pusion />
      <Pusion />
      <Pusion />
    </div>
  );
}
