import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded- text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        primary: '',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        orange: '',
        ghost: 'rounded-full',
        link: 'text-primary underline-offset-4 hover:underline',
        icon: 'rounded-full',
        none: 'rounded-none',
      },
      size: {
        default: 'text-body1 desktop:rounded-desktop-stroke rounded-mobile-stroke py-4 px-4',
        sm: 'text-body3 desktop:rounded-desktop-stroke rounded-mobile-stroke py-2 px-4',
        lg: 'text-h4 desktop:rounded-desktop-stroke rounded-mobile-stroke py-6 px-4',
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
