import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { TooltipContent } from '@/components/ui/tooltip';
import { TooltipContentProps } from '@radix-ui/react-tooltip';
import React from 'react';
import { cn } from '@/lib/utils';
import { LocalIcon } from '@icon/index';

export default function BlackTooltipContent({ title, ...props }: TooltipContentProps & { title?: string }) {
  return (
    <TooltipContent
      {...props}
      align={props.align ?? 'start'}
      alignOffset={-20}
      className={cn(
        'flex max-w-[220px] flex-col gap-1 rounded-[20px] border-black bg-black px-4 py-3 text-overline text-white desktop:max-w-[442px] desktop:gap-2 desktop:px-8 desktop:py-4 desktop:text-body2',
        props.className,
      )}>
      {title && (
        <div className="flex items-center gap-2">
          <LocalIcon
            className="h-4 w-4 desktop:h-6 desktop:w-6"
            name="ExclamationMark"
            color="white"
          />
          {title}
        </div>
      )}
      {props.children}
      <TooltipPrimitive.Arrow />
    </TooltipContent>
  );
}
