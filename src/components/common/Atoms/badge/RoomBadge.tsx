import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LocalIcon } from '@icon/index';

export default function RoomBadge({ roomName }: { roomName: string }) {
  return (
    <Badge className="rounded-[10px] bg-blue-50 px-[8px] py-[4px] text-[14px] font-medium leading-[24px] text-primary">
      <Button
        variant={'icon'}
        className="mr-[6px] p-0">
        <LocalIcon
          name="StarIcon"
          width={20}
          height={20}
        />
      </Button>
      {roomName}
    </Badge>
  );
}
