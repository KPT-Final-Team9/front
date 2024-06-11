'use client';
import { Tooltip, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import BlackTooltipContent from '@Atoms/tooltip/BlackTooltipContent';
import { LocalIcon } from '@icon/index';
import React from 'react';

export default function RoomTooltip({ content }: { content: string }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <LocalIcon
            name="ExclamationMark"
            className="h-[24px] w-[24px]"
          />
        </TooltipTrigger>
        <BlackTooltipContent>
          <div className="break-keep">{content}</div>
        </BlackTooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
