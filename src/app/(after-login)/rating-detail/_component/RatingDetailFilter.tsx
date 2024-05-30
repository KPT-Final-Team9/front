import { Popover } from '@/components/ui/popover';
import PopoverContent from '@Monocles/popover-trigger/PopoverContent';
import PopoverTrigger from '@Monocles/popover-trigger/PopoverTrigger';
import { LocalIcon } from '@icon/index';
import React from 'react';

export default function RatingDetailFilter() {
  return (
    <Popover>
      <PopoverTrigger
        isHiddenOnMobile
        label="옵션 선택"
        icon={
          <LocalIcon
            width={24}
            height={24}
            name="FilterIcon"
          />
        }
      />
      <PopoverContent></PopoverContent>
    </Popover>
  );
}
