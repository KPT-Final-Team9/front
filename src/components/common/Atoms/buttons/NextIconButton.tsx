import React from 'react';
import { Button } from '@/components/ui/button';
import { LocalIcon } from '@icon/index';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva('m-0 box-border bg-[#f2f6ff] fill-blue-500 p-0', {
  variants: {
    shape: {
      square: 'h-[20px] w-[20px] rounded-[2px]',
      circle: 'h-[32px] w-[32px] rounded-full',
    },
    btnSize: {
      '32': 'h-[32px] w-[32px]',
      '24': 'h-[24px] w-[24px]',
    },
  },
});

interface NextIconButton extends VariantProps<typeof buttonVariants> {
  className?: string;
}

export function NextIconButton({ shape, btnSize, className, ...props }: NextIconButton) {
  return (
    <Button
      {...props}
      variant={'none'}
      className={cn(buttonVariants({ shape, className, btnSize }))}>
      <LocalIcon
        size={30}
        name="NextIcon"
        className="fill-blue-500"
      />
    </Button>
  );
}
