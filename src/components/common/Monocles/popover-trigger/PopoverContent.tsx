import { PopoverContent as PopoverContentComp } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import React from 'react';

export default function PopoverContent({ className, ...props }: PopoverPrimitive.PopoverContentProps) {
  return (
    <PopoverContentComp
      className={cn('spx-4 py-3', className)}
      style={{ borderRadius: '20px' }} // className으로 PopoverContent의 borderRadius를 우선순위를 이길 수가 없어서 인라인 스타일을 사용함.
      {...props}></PopoverContentComp>
  );
}
