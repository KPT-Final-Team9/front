import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';

export default function SwitchButton({
  isActive,
  icon,
  label,
  ...props
}: ButtonProps & { isActive?: boolean; icon?: React.ReactNode; label?: React.ReactNode }) {
  return (
    <Button
      {...props}
      variant={'icon'}
      className={cn(
        'flex gap-2 rounded-mobile-stroke border bg-white px-[10px] py-1 text-body1 text-text-primary active:scale-[.97] desktop:rounded-desktop-stroke desktop:py-2',
        { ['border-primary']: isActive, ['bg-blue-50']: isActive },
      )}>
      {icon}
      <div>{label}</div>
    </Button>
  );
}
