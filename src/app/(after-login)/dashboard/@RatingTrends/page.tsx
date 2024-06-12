import LineChartComp from '@/app/(after-login)/dashboard/@RatingTrends/_components/LineChartComp';
import {
  MainRoomSetting,
  MainRoomSettingComplete,
  MainRoomSettingFailed,
} from '@/app/(after-login)/dashboard/@RatingTrends/_components/Modal';
import { dashboardPageType } from '@/types/common/pageTypes';
import { QueryOptions } from '@/constants/index';
import { fetchJsonData } from '@/services/api';

interface AvgByMonth {
  selected_month: string;
  total_avg: number;
  evaluation_progress: number;
  facility_avg: number;
  management_avg: number;
  complaint_avg: number;
}

interface RepresentRoom {
  room_id: number;
  room_name: string;
  all_avg_by_month_list: AvgByMonth[];
}

// 모든호실 연간 평균치
export default async function Page({ searchParams }: dashboardPageType) {
  const buildingName = searchParams && searchParams[QueryOptions.BuildingName];
  const buildingId = searchParams && searchParams[QueryOptions.Id];

  try {
    const representRoomUrl = `/buildings/${buildingId}/rooms/represent`;
    const representRoom = await fetchJsonData(representRoomUrl, {
      cache: 'no-store',
      method: 'GET',
    });
    const roomsYearScoreUrl = `/buildings/${buildingId}/my-rooms-year-score`;
    const roomsYearScore: RepresentRoom[] = await fetchJsonData(roomsYearScoreUrl, {
      cache: 'no-store',
      method: 'GET',
    });
    return (
      <>
        <div className="flex flex-row gap-6 after:h-4 after:content-[''] desktop:flex-col">
          {roomsYearScore &&
            roomsYearScore.map(val => {
              return (
                <LineChartComp
                  mainRoom={representRoom.id === val.room_id}
                  key={val.room_id}
                  val={val}
                  roomId={val.room_id}
                  roomName={val.room_name}
                  buildingName={buildingName}
                />
              );
            })}
        </div>
        {/* 모달 컴포넌트 */}
        <MainRoomSetting />
        <MainRoomSettingComplete />
        <MainRoomSettingFailed />
      </>
    );
  } catch (err) {
    return null;
  }
}
