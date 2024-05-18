import React from 'react';
import { Button } from '@/components/ui/button';
import { LocalIcon } from '@icon/index';

export function NotiBellButton({ notificationCount, ...props }: { notificationCount: number }) {
  const displayCount = notificationCount >= 100 ? '99+' : notificationCount;

  return (
    <div className="relative w-fit">
      <Button
        {...props}
        variant={'icon'}
        className="m-0 p-0">
        <LocalIcon name="BellIcon" />
      </Button>
      {notificationCount > 0 && (
        <span className="absolute bottom-8 left-3 min-w-[30px] rounded-3xl bg-[#FF4848;] text-center text-[12px] leading-4 text-white">
          {displayCount}
        </span>
      )}
    </div>
  );
}
