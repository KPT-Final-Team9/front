'use client';

import { useState } from 'react';

import * as Slider from '@radix-ui/react-slider';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function SliderWithTooltip() {
  const [score, setScore] = useState([50]);

  return (
    // 슬라이더 이동 속도가 빠른 경우 따라오는 툴팁 반응 속도가 느린 경우가 간혹 있음.
    <div className="relative flex h-10 w-full flex-col items-center">
      <TooltipProvider>
        <Slider.Root
          className="relative flex w-full touch-none select-none items-center"
          value={score}
          onValueChange={setScore}
          min={0}
          max={100}
          step={1}>
          <Slider.Track className="relative h-3 w-full grow overflow-hidden rounded-full bg-gray-200">
            <Slider.Range className="absolute h-full rounded-full bg-gradient-to-r from-[#98B7FC] to-primary" />
          </Slider.Track>
          <Tooltip open>
            <TooltipTrigger
              asChild
              className="relative">
              <Slider.Thumb
                className="block h-8 w-8 cursor-pointer rounded-full border-8 border-primary bg-white transition-colors focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                aria-label="Volume"
              />
            </TooltipTrigger>
            <TooltipContent
              side="top"
              sideOffset={8}
              className=" flex h-6 w-[48px] items-center justify-center border-2 border-stroke p-0 text-body3 text-gray-400 shadow-none">
              {score[0]}점
              <div className="absolute top-[20.5px] h-[6px] w-[6px] rotate-45 border-b-2 border-r-2 border-b-stroke border-r-stroke bg-white"></div>
            </TooltipContent>
          </Tooltip>
        </Slider.Root>
      </TooltipProvider>

      {/* 0, 50 ,100 점수 레이블 */}
      <div className="absolute top-2/4 pt-2 text-body3">
        <span>50</span>
      </div>
      <div className="flex w-full justify-between px-1 pt-4 text-body3">
        <span className="pl-2">0</span>
        <span>100</span>
      </div>
    </div>
  );
}
