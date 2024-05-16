import { Flat } from '@/lib/@alptugidin/react-circular-progress-bar';
import React from 'react';
import { z } from 'zod';

// Zod 스키마
const CircleProgressBarSchema = z.object({
  percent: z.number().min(0).max(100).default(50),
  color: z.string().default('#000000'),
});
interface HalfCircleProgressBar {
  percent?: number | undefined;
  color?: string | undefined;
}

export default function HalfCircleProgressBar({ percent = 50, color = '#000000' }: HalfCircleProgressBar) {
  const result = CircleProgressBarSchema.safeParse({ percent, color });
  // 검증 실패 시 기본값
  const validatedData = result.success ? result.data : { percent: 50, color: '#000000' };
  return (
    <>
      <Flat
        progress={validatedData.percent}
        showValue={false}
        showMiniCircle={false}
        sx={{
          strokeColor: validatedData.color,
          bgStrokeColor: '#f3f4f6',
          barWidth: 5,
          shape: 'half',
        }}
      />
    </>
  );
}
