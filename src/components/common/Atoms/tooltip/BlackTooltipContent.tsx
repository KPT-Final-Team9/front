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
      className={cn(
        'border-black bg-black px-4 py-3 text-overline text-white desktop:px-8 desktop:py-4',
        props.className,
      )}>
      {title && <div>{title}</div>}
      {props.children}
      <TooltipPrimitive.Arrow />
    </TooltipContent>
  );
}
