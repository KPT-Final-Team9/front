'use client';
import CircleProgressRating from '@Monocles/progress-bar/CircleProgressRating';
import CommonChartLabel from '@Monocles/chart-label/CommonChartLabel';
import SelectComp from '@/app/(after-login)/dashboard/@Overview/_components/SelectComp';
import BarChart from '@/app/(after-login)/dashboard/@Overview/_components/BarChart';
import HalfCircleProgress from '@/app/(after-login)/dashboard/@Overview/_components/HalfCircleProgress';
import { fetchJsonData, baseApis } from '@/services/api';
import { useEffect, useState } from 'react';
import useQuarterStore from '@/app/(after-login)/dashboard/@Overview/_store';
import { getRoundedValue } from '@/utils/index';
import { useSearchParams } from 'next/navigation';
import { QueryOptions } from '@/constants/index';

// /api/buildings/{buildingId}/my-quarterly-score

interface quarterlyData {
  complaint_avg: number;
  facility_avg: number;
  management_avg: number;
  selected_quarter: number;
  selected_year: number;
  total_avg: number;
}

interface Marge {
  room_id: number;
  room_name: string;
  total_avg: number;
}
interface mappedData {
  room_name: string;
  beforeTotalAvg: number;
  currentTotalAvg: number | null;
}

// 이번분기와 지난분기 평균값 차트컴포넌트에 맞게 매핑하는 함수입니다.
const mergedData = ({ before, current }: { before: Marge[]; current: Marge[] }): mappedData[] => {
  return before.reduce((acc, beforeItem) => {
    const currentItem = current.find(item => item.room_id === beforeItem.room_id);

    acc.push({
      room_name: beforeItem.room_name,
      beforeTotalAvg: beforeItem.total_avg,
      currentTotalAvg: currentItem ? currentItem.total_avg : null,
    });
    return acc;
  }, [] as mappedData[]);
};

export default function Page() {
  const { selectedQuarter } = useQuarterStore();
  const [fetchedQuarters, setFetchedQuarters] = useState<quarterlyData | undefined>(undefined);
  const [fetchedMyRoomsQuarter, setFetchedMyRoomsQuarter] = useState<mappedData[] | undefined>(undefined);
  const searchParams = useSearchParams();

  const buildingName = searchParams.get(QueryOptions.BuildingName);
  const buildingId = searchParams.get(QueryOptions.Id);

  // 분기별 관리 민원 시설, 평균호실점수
  const fetchQuarterlyScore = async (buildingId: string, selectedQuarter: { year: number; quarter: number }) => {
    return await fetchJsonData(
      `/buildings/${buildingId}/my-quarterly-score?year=${selectedQuarter.year}&quarter=${selectedQuarter.quarter}`,
      { cache: 'no-store', method: 'GET' },
    );
  };
  // 이번분기와 지난분기의 내 호실점수 비교
  const fetchRoomsQuarterlyScore = async (buildingId: string, selectedQuarter: { year: number; quarter: number }) => {
    return await fetchJsonData(
      `/buildings/${buildingId}/my-rooms-quarterly-score?year=${selectedQuarter.year}&quarter=${selectedQuarter.quarter}`,
      { cache: 'no-store', method: 'GET' },
    );
  };

  useEffect(() => {
    if (!selectedQuarter || !buildingId) return;

    const fetchAndSetData = async () => {
      try {
        const [quarterlyScoreResult, roomsQuarterlyScoreResult] = await Promise.allSettled([
          fetchQuarterlyScore(buildingId, selectedQuarter),
          fetchRoomsQuarterlyScore(buildingId, selectedQuarter),
        ]);
        if (quarterlyScoreResult.status === 'fulfilled') {
          // console.log('빌딩 setFetchedQuarters', quarterlyScoreResult.value);
          setFetchedQuarters(quarterlyScoreResult.value);
        } else {
          console.error('Error fetching quarterly score', quarterlyScoreResult.reason);
        }

        if (roomsQuarterlyScoreResult.status === 'fulfilled') {
          setFetchedMyRoomsQuarter(
            mergedData({
              before: roomsQuarterlyScoreResult.value.before,
              current: roomsQuarterlyScoreResult.value.current,
            }),
          );
        } else {
          console.error('Error fetching rooms quarterly score', roomsQuarterlyScoreResult.reason);
        }
      } catch (error) {
        //  TODO: 에러핸들링 추가
        console.error('Error in fetching data', error);
      }
    };
    fetchAndSetData();
  }, [selectedQuarter, buildingId]);

  return (
    <section className="flex w-full flex-row  flex-wrap justify-center rounded-container  bg-white px-[24px] py-[32px] desktop:gap-0 desktop:px-[40px]">
      {/* 서클 프로그래스 */}
      <div className="flex w-full flex-row flex-wrap justify-center desktop:flex-nowrap ">
        <div className="mb-[47px] w-full items-center justify-center text-nowrap desktop:w-[320px]">
          <p className="text-body2 text-text-secondary ">이번 분기에 진행된 {buildingName ?? '-- 빌딩'}</p>
          <h4 className="mb-[32px] text-h4 text-text-primary">내 소유 호실들의 평균 호실 점수는</h4>
          <div className=" mb-5 desktop:hidden">
            <SelectComp />
          </div>
          <div className=" flex justify-center">
            <CircleProgressRating
              percent={getRoundedValue(fetchedQuarters?.total_avg)}
              color="#1D4ED8"
            />
          </div>
        </div>
        {/* 바 차트 */}
        <div className="w-full">
          <div className="mb-1 flex flex-row items-center justify-end gap-3">
            <CommonChartLabel
              text="지난 분기"
              boxColor="lightBlue"
              size="md"
              textType="gray"
            />
            <CommonChartLabel
              text="이번 분기"
              boxColor="primary"
              size="md"
              textType="gray"
            />
            <div className="mb-[16px] hidden  desktop:mb-0  desktop:block">
              <SelectComp />
            </div>
          </div>
          <div className="relative right-10 mb-[40px] h-[174px]  desktop:right-0 desktop:h-[255px] ">
            {fetchedMyRoomsQuarter && <BarChart chartData={fetchedMyRoomsQuarter} />}
          </div>
        </div>
      </div>
      {/* 반원 진행바 */}
      <HalfCircleProgress
        complaintAvg={getRoundedValue(fetchedQuarters?.complaint_avg)}
        facilityAvg={getRoundedValue(fetchedQuarters?.facility_avg)}
        managementAvg={getRoundedValue(fetchedQuarters?.management_avg)}
      />
    </section>
  );
}
