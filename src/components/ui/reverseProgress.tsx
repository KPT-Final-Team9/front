'use client';

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '@/lib/utils';

/**
 * React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>을 확장하고,
 * indicatorColor라는 필드를 추가로 가집니다.
 */
interface CustomProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  /**
   * Tailwind CSS 클래스 이름을 나타내는 문자열입니다.
   */
  indicatorColor?: string | null | undefined;
}

const ReverseProgress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, CustomProgressProps>(
  ({ className, value, indicatorColor, ...props }, ref) => (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(`relative h-4 w-full overflow-hidden rounded-full   ${indicatorColor}`, className)}
      {...props}>
      <ProgressPrimitive.Indicator
        className={`h-full w-full flex-1 bg-secondary transition-all`}
        style={{ transform: `translateX(${value || 0}%)` }}
      />
    </ProgressPrimitive.Root>
  ),
);
ReverseProgress.displayName = ProgressPrimitive.Root.displayName;

export { ReverseProgress };
