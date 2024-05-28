import { Switch } from '@/components/ui/switch';

import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const ToggleSwitchVariants = cva('w-[51px] h-[31px] [&>span]:w-[27px] [&>span]:h-[27px]');

// TODO: ToggleSwitchVariants variants 추가없을 시 삭제하기
interface ToggleSwitchProps extends VariantProps<typeof ToggleSwitchVariants> {}

interface ToggleSwitchProps {
  isActive: boolean;
  handleToggleChange: () => void;
}

// TODO: 토글버튼 상태값에 따른 기능은 API 나온 이후 연결하기
export default function ToggleSwitch({ isActive, handleToggleChange }: ToggleSwitchProps) {
  return (
    <>
      <Switch
        checked={isActive}
        onCheckedChange={handleToggleChange}
        className={cn(ToggleSwitchVariants())}
      />
    </>
  );
}
