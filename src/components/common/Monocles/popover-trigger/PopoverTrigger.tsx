import { PopoverTrigger as PopoverTriggerComp } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import React from 'react';
import { ClassNameValue } from 'tailwind-merge';

export default function PopoverTrigger({
  className,
  isActive,
  isHiddenOnMobile,
  icon,
  label,
  labelClassName,
  ...props
}: PopoverPrimitive.PopoverTriggerProps & {
  isActive?: boolean;
  isHiddenOnMobile?: boolean;
  icon?: React.ReactNode;
  label?: React.ReactNode;
  labelClassName?: ClassNameValue;
}) {
  return (
    <PopoverTriggerComp
      className={cn(
        'flex items-center gap-2 rounded-mobile-stroke border bg-white px-1 py-1 text-body1 text-text-primary active:scale-[.97] desktop:rounded-desktop-stroke desktop:px-2 desktop:py-2',
        { ['border-primary']: isActive, ['bg-blue-50']: isActive },
        className,
      )}
      {...props}>
      {icon}
      <div className={cn(labelClassName, { 'hidden desktop:block': isHiddenOnMobile })}>{label}</div>
    </PopoverTriggerComp>
  );
}
