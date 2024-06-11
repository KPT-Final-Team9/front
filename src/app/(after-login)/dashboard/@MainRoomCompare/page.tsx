import RoomBadge from '@Atoms/badge/RoomBadge';
import RowBarComp from '@/app/(after-login)/dashboard/@MainRoomCompare/_components/RowBarComp';
import { ChartDataItem } from '@/types/api';
import IndexTooltip from '@/app/(after-login)/dashboard/_components/IndexTooltip';

const chartData: ChartDataItem[] = [
  { name: '임대료', myRoom: 100, diff: 20 },
  { name: '재계약률', myRoom: 20, diff: 60 },
  { name: '공실률', myRoom: 80, diff: 20 },
];

export default async function Page() {
  const awaitTime = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('hello');
    }, 1000);
  });

  const result = await awaitTime;

  return (
    <div className="flex flex-col  gap-3 rounded-container bg-white px-[24px] py-[32px] desktop:min-h-[250px] desktop:w-full desktop:px-[40px]">
      <div className="flex w-[240px] flex-row items-center justify-between">
        <p className=" text-h4">대표 호실 비교분석 서비스</p>
        <IndexTooltip />
      </div>
      <div className="w-fit">
        <RoomBadge roomName="미왕빌딩 A동 201호" />
      </div>
      <div>
        <RowBarComp chartData={chartData} />
      </div>
    </div>
  );
}
