'use client';
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

export default function CircleProgressRating({ percent = 0, color = '#000000' }: CircleProgressBarProps) {
  const result = CircleProgressBarSchema.safeParse({ percent, color });
  // 검증 실패 시 기본값
  const validatedData = result.success ? result.data : { percent: 50, color: '#000000' };

  return (
    <>
      <div className="half-circle-progress relative h-[150px] w-[150px] desktop:h-[206px] desktop:w-[206px]">
        <CircleProgressBar
          percent={validatedData.percent}
          color={validatedData.color}
        />
        <div className="absolute left-1/2 top-1/2 flex w-fit -translate-x-1/2 -translate-y-4 transform flex-col items-center justify-center desktop:-translate-y-5 ">
          <p
            style={{ color: color }}
            className="text-nowrap text-h3 font-extrabold desktop:text-h1">
            {validatedData.percent}점
          </p>
        </div>
      </div>
    </>
  );
}
