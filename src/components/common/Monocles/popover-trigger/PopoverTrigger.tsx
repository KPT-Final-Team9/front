import { PopoverTrigger as PopoverTriggerComp } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import React from 'react';

export default function PopoverTrigger({
  className,
  isActive,
  icon,
  label,
  ...props
}: PopoverPrimitive.PopoverTriggerProps & { isActive?: boolean; icon?: React.ReactNode; label?: React.ReactNode }) {
  return (
    <PopoverTriggerComp
      className={cn(
        'flex items-center gap-2 rounded-mobile-stroke border bg-white px-[10px] py-1 text-body1 text-text-primary active:scale-[.97] desktop:rounded-desktop-stroke desktop:py-2',
        { ['border-primary']: isActive, ['bg-blue-50']: isActive },
        className,
      )}
      {...props}>
      {icon}
      <div>{label}</div>
    </PopoverTriggerComp>
  );
}
