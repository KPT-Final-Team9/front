import React from 'react';

import { Badge } from '@/components/ui/badge';
import { LocalIcon } from '@icon/index';

export default function RoomBadge({ roomName }: { roomName: string }) {
  return (
    <Badge className="item-center flex rounded-[10px] bg-blue-50 px-[10px] py-[4px] text-[14px] font-medium leading-[24px] text-primary">
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
