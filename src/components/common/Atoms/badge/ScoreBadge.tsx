import React from 'react';

import { cva, VariantProps } from 'class-variance-authority';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { ScoreType } from '@/constants';

const scoreBadgeVariants = cva('px-[14px] py-[5px] text-[14px] font-extrabold', {
  variants: {
    type: {
      [ScoreType.MANAGEMENT]: 'bg-secondary-management text-primary-management',
      [ScoreType.FACILITY]: 'bg-secondary-facility text-primary-facility',
      [ScoreType.CLAIM]: 'bg-secondary-claim text-primary-claim',
    },
  },
});

interface ScoreBadgeProps extends VariantProps<typeof scoreBadgeVariants> {
  children: string;
}

export default function ScoreBadge({ children, type }: ScoreBadgeProps) {
  return <Badge className={cn(scoreBadgeVariants({ type }))}>{children}</Badge>;
}
