import { Flat } from '@/lib/@alptugidin/react-circular-progress-bar';
import CircleProgressBar from '@Atoms/progress-bar/CircleProgressBar';
import React from 'react';
import { z } from 'zod';

const CircleProgressBarSchema = z.object({
  percent: z.number().min(0).max(100).default(50),
  color: z.string().default('#000000'),
});

interface CircleProgressBarProps {
  percent?: number;
  color?: string;
}

export default function CircleProgressRating({ percent = 50, color = '#000000' }: CircleProgressBarProps) {
  const result = CircleProgressBarSchema.safeParse({ percent, color });
  // 검증 실패 시 기본값
  const validatedData = result.success ? result.data : { percent: 50, color: '#000000' };

  return (
    <>
      <div className="half-circle-progress relative h-[120px] w-[120px] desktop:h-[206px] desktop:w-[206px]">
        <CircleProgressBar
          percent={validatedData.percent}
          color={validatedData.color}></CircleProgressBar>
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-3 transform flex-col items-center justify-center desktop:-translate-y-5 ">
          <p className="text-[16px] font-extrabold desktop:text-[27px]">{validatedData.percent}점</p>
        </div>
      </div>
    </>
  );
}