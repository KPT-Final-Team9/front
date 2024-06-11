import { LocalIcon } from '@icon/index';
import RoomBadge from '@Atoms/badge/RoomBadge';
import RowBarComp from '@/app/(after-login)/dashboard/@MainRoomCompare/_components/RowBarComp';
import { ChartDataItem } from '@/types/api';
import { baseApis } from '@/services/api';
import MainRoomCompareLoading from '@/app/(after-login)/dashboard/@MainRoomCompare/loading';
import { QueryOptions } from '@/constants/index';
import { dashboardPageType } from '@/types/common/pageTypes';

// 차트컴포넌트 요구 양식에 맞게 매핑하는 함수입니다.
function processDataToChartData(data: any): ChartDataItem[] {
  return [
    {
      name: '임대료',
      myRoom: data.rental_price,
      diff: data?.average_rental_price,
    },
    {
      name: '재계약률',
      myRoom: data.renewal_contract_rate,
      diff: data.average_renewal_contract_rate,
    },
    { name: '공실률', myRoom: data.vacancy_rate, diff: data.average_vacancy_rate },
  ];
}
async function fetchJsonData(url: string) {
  const fetchInstance = await baseApis();
  const response = await fetchInstance(url, {
    cache: 'no-store',
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error(`Error fetching data from ${url}`);
  }
  return response.json();
}

export default async function Page({ searchParams }: dashboardPageType) {
  const buildingId = searchParams && searchParams[QueryOptions.Id];
  const buildingName = searchParams && searchParams[QueryOptions.BuildingName];
  let fetchedRepresentRoom = undefined;
  let fetchedCompareStatistics = undefined;
  let chartData = undefined;
  try {
    // 대표호실 정보 요청
    const representRoomUrl = `/buildings/${buildingId}/rooms/represent`;
    fetchedRepresentRoom = await fetchJsonData(representRoomUrl);

    // 대표호실 비교분석 데이터
    const representRoomStatisticsUrl = `/buildings/${buildingId}/rooms/${fetchedRepresentRoom?.id}/contracts/statistic`;
    fetchedCompareStatistics = await fetchJsonData(representRoomStatisticsUrl);

    // 차트컴포넌트 형식에 맞게 변환
    chartData = processDataToChartData(fetchedCompareStatistics);

    // 대표호실이름
    const representRoomName = `${buildingName ?? ''} ${fetchedRepresentRoom?.name ?? ''}`;

    // TODO: 데이터 없을경우 따로 처리필요함
    if (!chartData) {
      return <MainRoomCompareLoading />;
    }

    return (
      <div className="flex flex-col  gap-3 rounded-container bg-white px-[24px] py-[32px] desktop:min-h-[250px] desktop:w-full desktop:px-[40px]">
        <div className="flex w-[240px] flex-row items-center justify-between">
          <p className=" text-h4">대표 호실 비교분석 서비스</p>
          <LocalIcon
            name="ExclamationMark"
            className="h-[24px] w-[24px]"
          />
        </div>
        <div className="w-fit">
          <RoomBadge roomName={representRoomName} />
        </div>
        <div>
          <RowBarComp chartData={chartData} />
        </div>
      </div>
    );
  } catch (error) {
    // TODO: 패칭 에러시 처리필요
    return <MainRoomCompareLoading />;
  }
}
