import React from 'react';
import HalfCircularProgressRating from '@Monocles/progress-bar/HalfCircularProgressRating';
import ScoreBadge from '@Atoms/badge/ScoreBadge';
import { ScoreType } from '@/constants/index';

const getRatingText = (rating: number) => {
  if (rating === undefined) return '-';
  switch (true) {
    case rating === 0:
      return '-';
    case rating > 70:
      return '우수 수준';
    case rating > 50:
      return '양호 수준';
    case rating > 0:
      return '보통 수준';
    default:
      return '-';
  }
};

const HalfCircleProgressBar = ({
  title = '',
  progressColor = '#77D276',
  rating = 0,
  scoreType,
}: {
  title?: string;
  progressColor?: string;
  rating?: number;
  scoreType?: ScoreType | undefined;
}) => {
  return (
    <div className="-m-t-[20px] flex h-[160px] grow flex-col items-end overflow-hidden px-[16px] pr-[24px] pt-[12px] desktop:h-fit desktop:px-[19px] desktop:pt-[14px]">
      <p className="self-start text-h4">{title}</p>
      <div className="flex flex-col ">
        <div className="self-center desktop:mb-[10px]">
          <ScoreBadge type={scoreType}>{getRatingText(rating)}</ScoreBadge>
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

export default function HalfCircleProgress({
  facilityAvg,
  managementAvg,
  complaintAvg,
}: {
  facilityAvg: number | undefined;
  managementAvg: number | undefined;
  complaintAvg: number | undefined;
}) {
  return (
    <div className="flex h-fit w-full flex-row justify-center divide-y-2 overflow-hidden rounded-container border-[0.92px] border-[#D1D5DB]  max-[870px]:flex-col  desktop:flex-nowrap desktop:divide-x-2  desktop:divide-y-0">
      <HalfCircleProgressBar
        title="관리 점수"
        progressColor="#77D276"
        rating={managementAvg}
        scoreType={ScoreType.MANAGEMENT}
      />
      <HalfCircleProgressBar
        title="민원 점수"
        progressColor="#ffb775"
        rating={complaintAvg}
        scoreType={ScoreType.CLAIM}
      />
      <HalfCircleProgressBar
        title="시설 점수"
        progressColor="#2563eb"
        rating={facilityAvg}
        scoreType={ScoreType.FACILITY}
      />
    </div>
  );
}
