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
