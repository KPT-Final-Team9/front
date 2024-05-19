import React from 'react';

import { cva, VariantProps } from 'class-variance-authority';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const scoreBadgeVariants = cva('rounded-[2px] px-[14px] py-[5px] text-[14px] font-extrabold', {
  variants: {
    type: {
      default: 'bg-[#a8a8a8]',
      rent: 'bg-Primary-rent',
      contract: 'bg-Primary-contract',
      empty: 'bg-Primary-empty',
    },
  },
});

interface ScoreBadgeProps extends VariantProps<typeof scoreBadgeVariants> {
  text: string;
}

export default function ScoreBadge({ text, type }: ScoreBadgeProps) {
  return <Badge className={cn(scoreBadgeVariants({ type }))}>{text}</Badge>;
}
