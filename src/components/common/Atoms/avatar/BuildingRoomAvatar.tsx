import { AVATAR_BUILDING_COLORS } from '@/constants';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { LocalIcon } from '@icon/index';

export function BuildingRoomAvatar({ idx }: { idx: number }) {
  // 순차적 배경 렌더링을 위한 인덱스 처리
  const color = AVATAR_BUILDING_COLORS[idx % AVATAR_BUILDING_COLORS.length];

  return (
    <>
      <Avatar className="h-8 w-8">
        <AvatarFallback className={`flex items-center justify-center ${color}`}>
          <LocalIcon
            width={16}
            height={16}
            name={'BuildingIcon'}
            className="fill-white"
          />
        </AvatarFallback>
      </Avatar>
    </>
  );
}
