import React from 'react';

import { cva, VariantProps } from 'class-variance-authority';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const scoreBadgeVariants = cva('px-[14px] py-[5px] text-[14px] font-extrabold', {
  variants: {
    type: {
      management: 'bg-Secondary-management text-Primary-management',
      facility: 'bg-Secondary-facility text-Primary-facility',
      claim: 'bg-Secondary-claim text-Primary-claim',
    },
  },
});

interface ScoreBadgeProps extends VariantProps<typeof scoreBadgeVariants> {
  children: string;
}

export default function ScoreBadge({ children, type }: ScoreBadgeProps) {
  return <Badge className={cn(scoreBadgeVariants({ type }))}>{children}</Badge>;
}
