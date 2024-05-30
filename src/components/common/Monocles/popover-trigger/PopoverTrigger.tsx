import { PopoverTrigger as PopoverTriggerComp } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import React from 'react';

export default function PopoverTrigger({ className, ...props }: PopoverPrimitive.PopoverTriggerProps) {
  return (
    <PopoverTriggerComp
      className={cn('border', className)}
      {...props}></PopoverTriggerComp>
  );
}
