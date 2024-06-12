import { LocalIcon } from '@icon/index';
import RoomBadge from '@Atoms/badge/RoomBadge';
export default function MainRoomCompareLoading() {
  return (
    <div className="flex flex-col gap-3 rounded-container bg-white px-[24px] py-[32px]  desktop:w-full desktop:px-[40px]">
      <div className="flex w-[240px] flex-row items-center justify-between">
        <h4 className=" text-h4">대표 호실 비교분석 서비스</h4>
        <LocalIcon
          name="ExclamationMark"
          className="h-[24px] w-[24px]"
        />
      </div>
      <div className="w-fit">
        <div className="flex grow flex-col gap-4">
          <div className="skeleton h-4 w-28"></div>
        </div>
      </div>
      <div className="flex w-full flex-col desktop:flex-row">
        <div className="z-10 flex min-h-[250px]  w-full flex-col gap-9 bg-white desktop:flex-row">
          <div className="flex grow flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
          </div>
          <div className="flex grow flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
          </div>
          <div className="flex grow flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
