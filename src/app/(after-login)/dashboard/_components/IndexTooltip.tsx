'use client';
import React from 'react';
import { Tooltip, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import BlackTooltipContent from '@Atoms/tooltip/BlackTooltipContent';
import { LocalIcon } from '@icon/index';

export default function IndexTooltip() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <LocalIcon
            name="ExclamationMark"
            className="h-[24px] w-[24px]"
          />
        </TooltipTrigger>
        <BlackTooltipContent title={'내호실과 타 호실을 비교하기 위해 사용된 기준이에요.'}>
          <div className="flex flex-col gap-1 break-keep desktop:gap-2">
            <p>· 점수 구간: 현재 내 소유 호실의 평균 점수를 기준으로 비슷한 구간에 있는 호실의 점수를 비교 합니다.</p>
            <p>· 전용 면적: 내 소유 호실과 비슷한 전용 면적을 가진 호실과 비교합니다.</p>
          </div>
        </BlackTooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
