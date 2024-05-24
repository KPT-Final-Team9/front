import React from 'react';
import { Button } from '@/components/ui/button';
import { LocalIcon } from '@icon/index';

export function XIconButton({ ...props }) {
  return (
    <Button
      {...props}
      variant={'icon'}
      className="xbtn-icon m-0 p-0">
      <LocalIcon name="XIcon" />
    </Button>
  );
}

export function StarIconButton({ toggle = false, ...props }: { toggle?: boolean }) {
  return (
    <Button
      {...props}
      variant={'icon'}
      className="xbtn-icon m-0 p-0">
      {toggle ? (
        <LocalIcon
          width={24}
          height={24}
          name="RoundStarIcon"
        />
      ) : (
        <LocalIcon
          width={24}
          height={24}
          name="RoundUnselectedStarIcon"
        />
      )}
    </Button>
  );
}
