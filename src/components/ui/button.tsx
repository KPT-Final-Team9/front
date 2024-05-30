import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center desktop:rounded-desktop-stroke rounded-mobile-stroke whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[.98]',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-text-secondary text-text-secondary bg-none hover:bg-accent',
        primary: 'bg-primary text-white hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        orange: '',
        ghost: 'border-none text-text-secondary hover:bg-accent',
        link: 'text-primary underline-offset-4 hover:underline',
        icon: 'rounded-full',
        none: 'rounded-none',
      },
      size: {
        default: 'text-body1 py-4 px-4',
        sm: 'text-body3 py-2 px-4',
        md: 'text-body1 py-4 px-4',
        lg: 'text-h4 py-6 px-4',
        icon: 'h-10 w-10',
      },
      colors: {
        default: '',
        mono: 'bg-black text-white',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, colors, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, colors, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
