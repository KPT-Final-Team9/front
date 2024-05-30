import { PopoverContent as PopoverContentComp } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import React from 'react';

export default function PopoverContent({
  className,
  headerSlot,
  children,
  ...props
}: PopoverPrimitive.PopoverContentProps & { headerSlot?: React.ReactNode }) {
  return (
    <PopoverContentComp
      className={className}
      // className으로 PopoverContent의 borderRadius를 우선순위를 이길 수가 없어서 인라인 스타일을 사용함.
      // padding은 header와 main 따로 줘야해서 0으로 설정.
      style={{ borderRadius: '20px', padding: 0 }}
      {...props}>
      {headerSlot && <header className="border-b px-6 py-4">{headerSlot}</header>}
      <main className="px-8 py-6">{children}</main>
    </PopoverContentComp>
  );
}
