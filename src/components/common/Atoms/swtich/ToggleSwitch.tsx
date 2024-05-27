import { Switch } from '@/components/ui/switch';

import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const ToggleSwitchVariants = cva('w-[51px] h-[31px] [&>span]:w-[27px] [&>span]:h-[27px]', {
  variants: {
    variant: {
      default: ' ',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface ToggleSwitchProps extends VariantProps<typeof ToggleSwitchVariants> {}

export default function ToggleSwitch() {
  return (
    <>
      <Switch className={cn(ToggleSwitchVariants())} />
    </>
  );
}
