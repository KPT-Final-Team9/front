import LineChartComp from '@/app/(after-login)/dashboard/@RatingTrends/_components/LineChartComp';
import {
  MainRoomSetting,
  MainRoomSettingComplete,
  MainRoomSettingFailed,
} from '@/app/(after-login)/dashboard/@RatingTrends/_components/Modal';
import { dashboardPageType } from '@/types/common/pageTypes';
import { QueryOptions } from '@/constants/index';
import { getAuth } from '@/serverActions/index';
import returnFetch from 'return-fetch';
import { baseApis, fetchServerJsonData } from '@/services/api';

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

const fetchExtended = returnFetch({
  baseUrl: 'https://jsonplaceholder.typicode.com',
  headers: { Accept: 'application/json' },
  interceptors: {
    request: async args => {
      console.log('********* before sending request *********');
      console.log('url:', args[0].toString());
      console.log('requestInit:', args[1], '\n\n');
      return args;
    },

    response: async (response, requestArgs) => {
      console.log('********* after receiving response *********');
      console.log('url:', requestArgs[0].toString());
      console.log('requestInit:', requestArgs[1], '\n\n');
      return response;
    },
  },
});

// 모든호실 연간 평균치
export default async function Page({ searchParams }: dashboardPageType) {
  const buildingName = searchParams && searchParams[QueryOptions.BuildingName];
  const buildingId = searchParams && searchParams[QueryOptions.Id];

  try {
    const representRoomUrl = `/api/buildings/${buildingId}/rooms/represent`;
    const representRoom = await fetchServerJsonData(representRoomUrl, {
      cache: 'no-store',
      method: 'GET',
    });
    const roomsYearScoreUrl = `/api/buildings/${buildingId}/my-rooms-year-score`;
    const roomsYearScore: RepresentRoom[] = await fetchServerJsonData(roomsYearScoreUrl, {
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
