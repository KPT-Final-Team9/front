import { AVATAR_BUILDING_COLORS } from '@/constants';
import { LocalIcon } from '@icon/index';

export function BuildingRoomAvatar({ idx }: { idx: number }) {
  // 순차적 배경 렌더링을 위한 인덱스 처리
  const color = AVATAR_BUILDING_COLORS[idx % AVATAR_BUILDING_COLORS.length];

  return (
    <>
      <div className={`flex h-8 w-8 items-center justify-center rounded-full ${color}`}>
        <LocalIcon
          width={16}
          height={16}
          name={'BuildingIcon'}
          className="fill-white"
        />
      </div>
    </>
  );
}
