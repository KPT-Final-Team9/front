import React from 'react';

import { LocalIcon } from '@icon/index';

export default function GradientTooltip({ value }: { value: number }) {
  return (
    <div className="custom-tooltip relative w-fit">
      <LocalIcon
        className="z-10"
        name="TooltipIcon"
        width={48}
        height={33}
      />
      <p className="absolute left-0 right-0 top-0 z-10 flex justify-center text-[14px] font-bold text-white">
        {value}점
      </p>
      <div className=" absolute bottom-[-2px] left-[24px] h-[10px] w-[1px] border-l border-dashed border-gray-400 "></div>
    </div>
  );
}
