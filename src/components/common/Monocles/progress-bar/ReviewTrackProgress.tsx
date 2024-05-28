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

export default function ReviewTrackProgress({
  value,
  trackFontClass,
  legendClass,
}: {
  value: number;
  trackFontClass?: 'desktop:text-body4' | 'desktop:text-caption';
  legendClass?: string;
}) {
  const reviewTrackFontClass = cn('text-caption', trackFontClass);
  return (
    <>
      <ReverseProgress
        value={value}
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
