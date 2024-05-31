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

export function StarIconButton({ toggle = false, ...props }: { toggle?: boolean }) {
  return (
    <Button
      {...props}
      variant={'icon'}
      className="xbtn-icon m-0 p-0">
      {toggle ? (
        <LocalIcon
          width={24}
          height={24}
          name="RoundStarIcon"
        />
      ) : (
        <LocalIcon
          width={24}
          height={24}
          name="RoundUnselectedStarIcon"
        />
      )}
    </Button>
  );
}
