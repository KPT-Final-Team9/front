import React from 'react';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

interface ErrorMessageProps {
  children: string;
  className?: string;
}

const labelVariants = cva('text-xs text-error');

export default function ErrorMessage({ className, children, ...props }: ErrorMessageProps) {
  return (
    <p
      className={cn(labelVariants(), className)}
      {...props}>
      {children}
    </p>
  );
}
