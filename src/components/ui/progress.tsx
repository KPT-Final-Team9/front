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
  indicatorInlineStyle?: object | null | undefined;
}

const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, CustomProgressProps>(
  ({ className, value, indicatorColor, indicatorInlineStyle, ...props }, ref) => (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn('relative h-4 w-full overflow-hidden rounded-full bg-secondary', className)}
      {...props}>
      <ProgressPrimitive.Indicator
        className={`h-full w-full flex-1 transition-all ${indicatorColor}`}
        style={{ transform: `translateX(-${100 - (value || 0)}%)`, ...indicatorInlineStyle }}
      />
    </ProgressPrimitive.Root>
  ),
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
