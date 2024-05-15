import React from 'react';
import { Button } from '../ui/button';

interface IconButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
export default function IconButton({ onClick, children }: IconButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant={'icon'}
      className="m-0 p-0">
      {children}
    </Button>
  );
}
