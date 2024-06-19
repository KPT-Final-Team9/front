import RoomBadge from '@Atoms/badge/RoomBadge';
import RowBarComp from '@/app/(after-login)/dashboard/@MainRoomCompare/_components/RowBarComp';
import { ChartDataItem } from '@/types/api';
import IndexTooltip from '@/app/(after-login)/dashboard/_components/IndexTooltip';
import { baseApis, fetchServerJsonData } from '@/services/api';
import MainRoomCompareLoading from '@/app/(after-login)/dashboard/@MainRoomCompare/loading';
import { QueryOptions } from '@/constants/index';
import { dashboardPageType } from '@/types/common/pageTypes';
import { LocalIcon } from '@icon/index';
import { getAuth } from '@/serverActions/index';

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

export default async function Page({ searchParams }: dashboardPageType) {
  const userInfo = await getAuth();

  const buildingId = searchParams && searchParams[QueryOptions.Id];
  const buildingName = searchParams && searchParams[QueryOptions.BuildingName];
  let fetchedRepresentRoom = undefined;
  let fetchedCompareStatistics = undefined;
  let chartData = undefined;
  try {
    // 대표호실 정보 요청
    const representRoomUrl = `${process.env.API_BASE_URL}/api/buildings/${buildingId}/rooms/represent`;
    const test1 = await fetch(representRoomUrl, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    fetchedRepresentRoom = await test1.json();

    // 대표호실 비교분석 데이터
    const representRoomStatisticsUrl = `${process.env.API_BASE_URL}/api/buildings/${buildingId}/rooms/${fetchedRepresentRoom?.id}/contracts/statistic`;
    const test2 = await fetch(representRoomStatisticsUrl, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    });

    fetchedCompareStatistics = await test2.json();

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
          <IndexTooltip />
        </div>
        <div className="w-fit">
          <RoomBadge roomName={representRoomName} />
        </div>
        <div>
          <RowBarComp chartData={chartData} />
        </div>
      </div>
    );
  } catch (err) {
    console.log(err);
    // TODO: 패칭 에러시 처리필요
    return <MainRoomCompareLoading />;
  }
}
