import React from 'react';
import HalfCircularProgressRating from '@Monocles/progress-bar/HalfCircularProgressRating';
import ScoreBadge from '@Atoms/badge/ScoreBadge';

const Pusion = ({
  title = '',
  progressColor = '#77D276',
  rating = 50,
}: {
  title?: string;
  progressColor?: string;
  rating?: number;
}) => {
  return (
    <div className="-m-t-[20px] flex h-[160px] grow flex-col items-end overflow-hidden px-[16px] pr-[24px] pt-[12px] desktop:h-fit desktop:px-[19px] desktop:pt-[14px]">
      <h3 className="self-start text-h4">{title}</h3>
      <div className="flex flex-col ">
        <div className="self-center desktop:mb-[10px]">
          <ScoreBadge type="management">보통수준</ScoreBadge>
        </div>
        <div className="h-[124px] self-center overflow-hidden">
          <div className="relative w-[180px] desktop:w-[249px]">
            <HalfCircularProgressRating
              color={progressColor}
              percent={rating}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HalfCircleProgress({}) {
  return (
    <div className="flex h-fit flex-row flex-wrap justify-center divide-x-2 divide-y-2 overflow-hidden rounded-container border-[0.92px] border-[#D1D5DB] desktop:flex-nowrap">
      <Pusion
        title="임대료"
        progressColor="#77D276"
        rating={25}
      />
      <Pusion
        title="민원 점수"
        progressColor="#ffb775"
        rating={62}
      />
      <Pusion
        title="시설 점수"
        progressColor="#2563eb"
        rating={98}
      />
    </div>
  );
}
