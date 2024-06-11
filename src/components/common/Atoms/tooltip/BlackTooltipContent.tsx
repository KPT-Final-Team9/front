import { TooltipContent } from '@/components/ui/tooltip';
import { TooltipContentProps, TooltipProps } from '@radix-ui/react-tooltip';
import React from 'react';

export default function BlackTooltipContent(props: TooltipContentProps) {
  return <TooltipContent {...props} />;
}
