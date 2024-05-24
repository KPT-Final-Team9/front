// FIXME: 라이브러리 인식하지 못하는문제, 정상작동
import { Flat } from '@ajvls98/react-circular-progress-bar-fork-lamyzm';
import React from 'react';
import { z } from 'zod';

// Zod 스키마
const CircleProgressBarSchema = z.object({
  percent: z.number().min(0).max(100).default(50),
  color: z.string().default('#000000'),
});
interface CircleProgressBar {
  percent?: number | undefined;
  color?: string | undefined;
}

export default function CircleProgressBar({ percent = 50, color = '#000000' }: CircleProgressBar) {
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
          barWidth: 8,
        }}
      />
    </>
  );
}
