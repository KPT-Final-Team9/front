'use client';
import HalfCircleProgressBar from '@Atoms/progress-bar/HalfCircleProgressBar';
import React from 'react';
import { z } from 'zod';

const CircleProgressBarSchema = z.object({
  percent: z.number().min(0).max(100).default(50),
  color: z.string().default('#000000'),
});
interface HalfCircularProgressRating {
  percent?: number | undefined;
  color?: string | undefined;
}

// NOTE: 반응형 추가했으나 크기 너무 작은문제
export default function HalfCircularProgressRating({ percent = 50, color = '#000000' }: HalfCircularProgressRating) {
  const result = CircleProgressBarSchema.safeParse({ percent, color });
  // 검증 실패 시 기본값
  const validatedData = result.success ? result.data : { percent: 50, color: '#000000' };
  return (
    <>
      <HalfCircleProgressBar
        percent={validatedData.percent}
        color={validatedData.color}
      />
      <div className="absolute left-1/2 top-1/4 flex -translate-x-1/2 -translate-y-1 transform flex-col items-center justify-center">
        <p className="text-[14px] font-extrabold desktop:text-[27px]">{validatedData.percent}점</p>
        <p className="text-[10px] text-text-secondary desktop:text-[14px]">/100점</p>
      </div>
    </>
  );
}
