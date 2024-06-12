import React from 'react';

import { LocalIcon } from '@icon/index';

export default function GradientTooltip({ ...props }: { value: number; fill: string }) {
  return (
    <div className="custom-tooltip relative w-fit">
      <LocalIcon
        className="z-10 h-[22px] w-[44px] desktop:h-[27px] desktop:w-[48px]"
        name="TooltipIcon"
        fill={props.fill}
      />
      <p className="absolute left-0 right-0 top-0 z-10 flex justify-center text-[12px] font-bold text-white desktop:text-[14px]">
        {Math.round(props.value)}점
      </p>
      <div className=" desktop:24px absolute bottom-[-2px] left-[22px] z-0 h-[10px] w-[1px] border-l border-dashed border-gray-400 "></div>
    </div>
  );
}
