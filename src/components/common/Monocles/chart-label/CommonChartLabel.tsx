import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

const CommonChartLabelVariants = cva('rounded-[2px]', {
  variants: {
    size: {
      md: ' min-w-[12px] min-h-[12px] desktop:w-[14px] desktop:h-[14px]',
      sm: 'w-[12px] h-[12px]',
    },
    boxColor: {
      primary: 'bg-primary',
      lightBlue: 'bg-blue-200',
      contract: 'bg-Primary-contract',
      empty: 'bg-Primary-empty',
      gray: 'bg-gray-200',
    },
  },
});

const TextVariants = cva('text-nowrap', {
  variants: {
    textType: {
      default: 'text-[14px] desktop:text-[16px]',
      gray: 'text-gray-400 text-[12px] desktop:text-[14px]',
    },
  },
});

interface CommonChartLabelProps
  extends VariantProps<typeof CommonChartLabelVariants>,
    VariantProps<typeof TextVariants> {
  text: string;
  className?: string;
}

export default function CommonChartLabel({ text, boxColor, size, textType, className }: CommonChartLabelProps) {
  return (
    <div className={cn('flex items-center  space-x-[8px]', className)}>
      <div className={cn(CommonChartLabelVariants({ boxColor, size }))}></div>
      <Label className={cn(TextVariants({ textType }))}>{text}</Label>
    </div>
  );
}
