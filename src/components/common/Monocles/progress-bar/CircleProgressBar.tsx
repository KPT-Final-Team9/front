import { Flat } from '@/lib/@alptugidin/react-circular-progress-bar';
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

export default function CircleProgressBar({ percent = 50, color = '#000000' }: CircleProgressBarProps) {
  const result = CircleProgressBarSchema.safeParse({ percent, color });
  // 검증 실패 시 기본값
  const validatedData = result.success ? result.data : { percent: 50, color: '#000000' };

  return (
    <>
      <div className="half-circle-progress relative w-[206px]">
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
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-5 transform flex-col items-center justify-center text-3xl">
          <p className="text-[27px] font-extrabold">{validatedData.percent}점</p>
        </div>
      </div>
    </>
  );
}
