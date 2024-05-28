import React from 'react';
import { LocalIcon } from '@icon/index';
import { cn } from '@/lib/utils';
import { ReverseProgress } from '@/components/ui/reverseProgress';

type ProgressStep = {
  color: string;
  description: string;
};

const ReviewTrackRank: { [key: string]: ProgressStep } = {
  row: {
    color: 'fill-progress-bar-step1',
    description: '1단계 (낮음)',
  },
  middle: {
    color: 'fill-progress-bar-step2',
    description: '2단계 (보통)',
  },
  high: {
    color: 'fill-progress-bar-step3',
    description: '3단계 (높음)',
  },
};

// 평가 진행율을 이후 변경될 수 있는 값을 기준으로 3단계로 구분되며 정확한 수치는 보여지지 않음.
type ReviewProgressGrade = 'ZERO' | 'FIRST_STEP' | 'SECOND_STEP' | 'THIRD_STEP';
enum ReviewProgressGradeCriteria {
  // 단계별 기준이 되는 수치가 변경될 경우 여기에서 수정하면 됨.
  ZERO = 0,
  FIRST_STEP = 33.4,
  SECOND_STEP = 66.7,
  THIRD_STEP = 100,
}

const getGradeFromValue = (value: number | undefined): ReviewProgressGrade => {
  // 값이 undefined일 때만 ZERO를 반환. 실제로 값이 0이라면 FIRST_STEP이 됨.
  // 값을 받아오는 중이거나 에러로 서버에서 값을 받아오지 못한 경우와, 실제 값이 0인 경우를 구분하기 위함.
  if (value === undefined) return 'ZERO';

  if (value >= ReviewProgressGradeCriteria.SECOND_STEP) return 'THIRD_STEP';
  if (value >= ReviewProgressGradeCriteria.FIRST_STEP) return 'SECOND_STEP';
  return 'FIRST_STEP';
};

export default function ReviewTrackProgress({
  value,
  trackFontClass,
  legendClass,
}: {
  value: number | undefined;
  trackFontClass?: 'desktop:text-body4' | 'desktop:text-caption';
  legendClass?: string;
}) {
  const reviewTrackFontClass = cn('text-caption', trackFontClass);
  const progressGrade: ReviewProgressGrade = getGradeFromValue(value);

  return (
    <>
      <ReverseProgress
        value={ReviewProgressGradeCriteria[progressGrade]}
        className="h-[13px]"
        indicatorColor="evaluation-gradient"
      />
      <div className={cn('mt-[12px] flex justify-center', legendClass)}>
        <div className="flex flex-row gap-3 self-center">
          {Object.keys(ReviewTrackRank).map((val, index) => {
            return (
              <div
                className="inline-flex items-center gap-2 text-body4 text-gray-400"
                key={index}>
                <LocalIcon
                  name="ReviewTrackCircleIcon"
                  className={ReviewTrackRank[val].color}
                  width={7}
                  height={7}
                />
                <p className={reviewTrackFontClass}>{ReviewTrackRank[val].description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
