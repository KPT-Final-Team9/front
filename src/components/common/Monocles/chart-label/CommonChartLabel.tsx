import React from 'react';

import { cva, VariantProps } from 'class-variance-authority';

import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

const CommonChartLabelVariants = cva('rounded-[2px]', {
  variants: {
    size: {
      md: 'w-[14px] h-[14px]',
      sm: 'w-[12px] h-[12px]',
    },
    color: {
      primary: 'bg-Primary',
      lightBlue: 'bg-blue-200',
      contract: 'bg-Primary-contract',
      empty: 'bg-Primary-empty',
    },
  },
});

interface CommonChartLabelProps extends VariantProps<typeof CommonChartLabelVariants> {
  text: string;
}

export default function CommonChartLabel({ text, color, size }: CommonChartLabelProps) {
  return (
    <div className="flex items-center space-x-[8px]">
      <div className={cn(CommonChartLabelVariants({ color, size }))}></div>
      <Label className={cn(size === 'sm' ? 'text-[14px] text-gray-400' : 'text-[16px]')}>{text}</Label>
    </div>
  );
}
