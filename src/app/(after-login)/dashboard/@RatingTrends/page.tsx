'use client';
import LineChartComp from '@/app/(after-login)/dashboard/@RatingTrends/_components/LineChartComp';
import {
  MainRoomSetting,
  MainRoomSettingComplete,
} from '@/app/(after-login)/dashboard/@RatingTrends/_components/Modal';

export default function Page() {
  return (
    //메인 룸은 true false 로 결정된다고 함.

    <>
      <div className="flex flex-row gap-6 after:h-4 after:content-[''] desktop:flex-col">
        <LineChartComp
          mainRoom={true}
          roomId={1}
        />
        <LineChartComp roomId={2}></LineChartComp>
        <LineChartComp></LineChartComp>
        <LineChartComp></LineChartComp>
        <LineChartComp></LineChartComp>
        <LineChartComp></LineChartComp>
        <LineChartComp></LineChartComp>
        <LineChartComp></LineChartComp>
        <LineChartComp></LineChartComp>
        <LineChartComp></LineChartComp>
        <LineChartComp></LineChartComp>
        <LineChartComp></LineChartComp>
        <LineChartComp></LineChartComp>
        <LineChartComp></LineChartComp>
      </div>
      <MainRoomSetting />
      <MainRoomSettingComplete />
    </>
  );
}
