import { Skeleton } from '@/components/ui/skeleton';
import { NextIconButton } from '@Atoms/buttons/NextIconButton';

export default function MainRoomScheduleLoading() {
  return (
    <>
      <div className="rounded-container bg-white px-[40px] py-[32px]">
        <div className="mb-3 flex items-center justify-between">
          <h4 className="text-h4">대표 호실 스케줄</h4>
          <NextIconButton shape={'circle'} />
        </div>
        <Skeleton className="mb-6 h-4 w-24 rounded-xl" />

        <div className="contract-container flex flex-col gap-3">
          <div>
            <p className="schedule-title">계약 기간</p>
            <Skeleton className="h-4 w-full" />
          </div>
          <div>
            <p className="schedule-title">평가 진행률</p>
            <Skeleton className="h-4 w-full" />
          </div>
        </div>
      </div>
    </>
  );
}
