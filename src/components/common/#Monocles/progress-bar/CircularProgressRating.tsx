import React from 'react';
import { z } from 'zod';

// Zod 스키마
const CircleProgressBarSchema = z.object({
  percent: z.number().min(0).max(100).default(50),
  color: z.string().default('#000000'),
});
interface CircularProgressRating {
  percent?: number | undefined;
  color?: string | undefined;
}

// NOTE: 반응형 추가했으나 크기 너무 작은문제
export default function CircularProgressRating({ percent = 50, color = '#000000' }: CircularProgressRating) {
  const result = CircleProgressBarSchema.safeParse({ percent, color });
  // 검증 실패 시 기본값
  const validatedData = result.success ? result.data : { percent: 50, color: '#000000' };
  return (
    <>
      <div className="half-circle-progress relative w-[85px] md:w-[249px]">
        <CircularProgressRating
          percent={validatedData.percent}
          color={validatedData.color}
        />
        <div className="absolute left-1/2 top-1/4 flex -translate-x-1/2 -translate-y-4 transform flex-col  items-center justify-center text-3xl">
          <p className="text-[9px] font-extrabold md:text-[27px]">{validatedData.percent}점</p>
          <p className="text-text-secondary text-sm">/100점</p>
        </div>
      </div>
    </>
  );
}
