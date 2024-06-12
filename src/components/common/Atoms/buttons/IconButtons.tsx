import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { LocalIcon } from '@icon/index';
import { cn } from '@/lib/utils';

export function XIconButton({
  className,
  variant,
  iconWidth,
  iconHeight,
  ...props
}: ButtonProps & { iconWidth?: number; iconHeight?: number }) {
  return (
    <Button
      {...props}
      variant={variant || 'icon'}
      className={cn('xbtn-icon m-0 p-0', className)}>
      <LocalIcon
        width={iconWidth}
        height={iconHeight}
        name="XIcon"
      />
    </Button>
  );
}

interface StarIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  toggle?: boolean;
}
export function StarIconButton({ toggle = false, ...props }: StarIconButtonProps) {
  return (
    <Button
      variant={'icon'}
      className="p-0"
      {...props}>
      <LocalIcon
        width={24}
        height={24}
        name="RoundStarIcon"
        className={cn('transition-colors hover:fill-[#FFD233] active:scale-[.88]', {
          'fill-[#FFD233]': toggle,
          'fill-white stroke-[#D1D5DB]': !toggle,
        })}
      />
    </Button>
  );
}
