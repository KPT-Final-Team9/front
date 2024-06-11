'use client';
import React, { useEffect, useState } from 'react';
import SingleCategoryVerticalBarChart from '@chart/MainVerticalBarChart';
import IndicateBadge from '@Atoms/badge/IndicateBadge';
import { Skeleton } from '@/components/ui/skeleton';
import { RENT_DATA } from '@/constants/index';
import { LocalIcon } from '@icon/index';
import { z } from 'zod';
import RoomTooltip from '../../_component/RoomTooltip';

const mockRoomData = [
  {
    title: '재계약률',
    myRoom: {
      rate: 80,
    },
    otherRoom: {
      rate: 77.7,
    },
  },
  {
    title: '공실률',
    myRoom: {
      rate: 5,
    },
    otherRoom: {
      rate: 6,
    },
  },
  {
    title: '임대료',
    myRoom: {
      rate: 50,
      deposit: 1000,
    },
    otherRoom: {
      rate: 51.7,
      deposit: 800,
    },
  },
];

export default function RatingCompareComp() {
  const rentDataArray = Object.values(RENT_DATA);
  const [reContractData, setReContractData] = useState<undefined | any[]>(undefined);
  const [roomData, setRoomData] = useState<undefined | any[]>(undefined);

  useEffect(() => {
    // 차트데이터,
    setReContractData([{ name: 'Page', rent: 100, diff: 40 }]);
    setTimeout(() => {
      // 임대, 재계약, 공실률 정보
      setRoomData(mockRoomData);
    }, 1000);
  }, []);

  return (
    <div className="flex h-full min-w-[325px] flex-col gap-2 desktop:p-8">
      <div className=" flex items-center">
        <h3 className="mr-2 text-h3 text-text-primary">임대 지표 비교 </h3>
        <RoomTooltip
          content="비슷한 면적과 점수를 가진 다른 호실들의 
재계약률, 공실률, 임대료 평균을 확인하실 수 있어요."
        />
      </div>
      <p className="text-body2 text-text-secondary">내 호실과 유사한 조건을 가진 타 호실과 임대 지표를 비교해 드려요</p>

      <div className="flex h-full flex-col justify-between gap-2 desktopMaxW:flex-row">
        {rentDataArray.map((val, index) => {
          const currentRoom = roomData?.filter(item => item.title === val.title);
          return (
            <BarChartCompare
              key={index}
              chartData={reContractData}
              accentColor={val.color}
              title={val.title}
              roomData={currentRoom && currentRoom[0]}
            />
          );
        })}
      </div>
    </div>
  );
}

const BarChartCompare = ({
  chartData,
  accentColor,
  title,
  roomData,
}: {
  chartData: any;
  accentColor: string;
  title: string;
  roomData: any;
}) => {
  // 스켈레톤
  if (!chartData) {
    return (
      <>
        <div className="flex h-full flex-col space-y-3 px-[24px] py-[26px]">
          <Skeleton className="h-full w-full rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-2 w-[250px]" />
            <Skeleton className="h-2 w-[200px]" />
          </div>
        </div>
      </>
    );
  }
  return (
    <div className=" flex h-full justify-between gap-8 text-nowrap rounded-container border-[1px] border-stroke bg-white py-[26px] pl-[24px] desktop:min-w-[320px]">
      {/* titles */}
      <div className="flex flex-col justify-between gap-6">
        {/* my room */}
        <div className=" flex flex-col gap-1 ">
          <IndicateBadge
            text="내호실"
            Bgcolor={accentColor}
          />

          <TitleComp
            title={title}
            roomData={roomData}
          />
        </div>
        {/* other room */}
        <div className=" flex flex-col gap-1">
          <IndicateBadge
            type={'default'}
            text="타호실"
          />
          <TitleComp
            title={title}
            roomData={roomData}
          />
        </div>
      </div>

      {/* bar chart */}
      <div className="flex h-full items-end">
        <div className="h-[200px] min-w-[120px]">
          <SingleCategoryVerticalBarChart
            chartData={chartData}
            categoryKey="name"
            accentColor={accentColor}
          />
        </div>
      </div>
    </div>
  );
};

// 값이 없을경우 - 처리
const RoomDataSchema = z.object({
  myRoom: z
    .object({
      rate: z.number().optional(),
      deposit: z.number().optional(),
    })
    .optional(),
});

const TitleComp = ({ title, roomData }: { title: string; roomData: any }) => {
  const result = RoomDataSchema.safeParse(roomData);
  const validRoomData = result.success ? result.data : undefined;
  const isRent = title === '임대료';

  //NOTE: 이후 지표가 많아지면 switch case로 개선해야할듯
  const displayRate = validRoomData?.myRoom?.rate
    ? isRent
      ? `${validRoomData.myRoom.deposit}/${validRoomData.myRoom.rate} 만 원`
      : `${validRoomData.myRoom.rate}%`
    : '-';
  return (
    <>
      <p className="mt-2 text-body1">{title}</p>
      <p className="text-body1">{displayRate}</p>
    </>
  );
};
