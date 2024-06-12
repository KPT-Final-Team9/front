import React from 'react';

import { Badge } from '@/components/ui/badge';
import { LocalIcon } from '@icon/index';
import { cn } from '@/lib/utils';

export default function RoomBadge({ roomName, className }: { roomName: string | undefined; className?: string }) {
  return (
    <Badge
      className={cn(
        'item-center flex rounded-[10px] bg-blue-50 px-[10px] py-[4px] text-[14px] font-medium leading-[24px] text-primary',
        className,
      )}>
      <LocalIcon
        className="mr-[6px]"
        name="RoundStarIcon"
        width={20}
        height={20}
      />
      {roomName}
    </Badge>
  );
}
