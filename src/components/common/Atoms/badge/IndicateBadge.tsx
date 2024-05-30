import React from 'react';

import { cva, VariantProps } from 'class-variance-authority';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const IndicateBadgeVariants = cva('rounded-[2px] w-fit px-[10px] py-[2px] text-body3 text-white', {
  variants: {
    type: {
      default: 'bg-gray-400',
      rent: 'bg-primary-rent',
      contract: 'bg-primary-contract',
      empty: 'bg-primary-empty',
    },
  },
});

interface ScoreBadgeProps extends VariantProps<typeof IndicateBadgeVariants> {
  text: string;
  className?: string;
  Bgcolor?: string;
}

export default function IndicateBadge({ text, type, className, Bgcolor }: ScoreBadgeProps) {
  return (
    <Badge
      style={{ background: Bgcolor }}
      className={cn(IndicateBadgeVariants({ type }), className)}>
      {text}
    </Badge>
  );
}
