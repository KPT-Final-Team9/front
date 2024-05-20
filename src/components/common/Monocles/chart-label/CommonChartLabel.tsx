import React from 'react';

import { cva, VariantProps } from 'class-variance-authority';

import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

const CommonChartLabelVariants = cva('rounded-[2px]', {
  variants: {
    size: {
      md: 'min-w-[12px] min-h-[12px] desktop:w-[14px] desktop:h-[14px]',
      sm: 'w-[12px] h-[12px]',
    },
    boxColor: {
      primary: 'bg-Primary',
      lightBlue: 'bg-blue-200',
      contract: 'bg-Primary-contract',
      empty: 'bg-Primary-empty',
    },
  },
});

const TextVariants = cva('', {
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
}

export default function CommonChartLabel({ text, boxColor, size, textType }: CommonChartLabelProps) {
  return (
    <div className="flex items-center space-x-[8px]">
      <div className={cn(CommonChartLabelVariants({ boxColor, size }))}></div>
      <Label className={cn(TextVariants({ textType }))}>{text}</Label>
    </div>
  );
}
