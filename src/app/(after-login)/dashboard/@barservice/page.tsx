import { LocalIcon } from '@icon/index';
import RoomBadge from '@Atoms/badge/RoomBadge';
import RowBarComp from '@/app/(after-login)/dashboard/@barservice/_components/RowBarComp';

export default function Page() {
  return (
    <div className="flex w-[343px]  flex-col gap-3 rounded-container bg-white px-[24px] py-[32px] desktop:w-full desktop:px-[40px]">
      <div className="flex w-[240px] flex-row items-center justify-between">
        <p className=" text-h4">대표 호실 비교분석 서비스</p>
        <LocalIcon
          name="ExclamationMark"
          className="h-[24px] w-[24px]"
        />
      </div>
      <div className="w-fit">
        <RoomBadge roomName="미왕빌딩 A동 201호" />
      </div>
      <div>
        <RowBarComp />
      </div>
    </div>
  );
}
