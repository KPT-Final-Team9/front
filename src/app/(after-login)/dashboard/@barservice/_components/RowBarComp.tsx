'use client';

import React, { useEffect, useState } from 'react';
import SingleCategoryHorizontalBarChart from '@chart/bar-chart/SingleCategoryHorizontalBarChart';
import CommonChartLabel from '@Monocles/chart-label/CommonChartLabel';

const chartData = [
  { name: 'January', rent: 100, price: 20 },
  { name: 'January', rent: 20, price: 60 },
  { name: 'January', rent: 80, price: 20 },
];

const Box = ({ chartData }: { chartData: any }) => {
  const [size, setSize] = useState(34); // 기본 사이즈를 'small'로 설정합니다.

  useEffect(() => {
    // 브레이크 포인트 정의
    const breakpoint = '(min-width: 430px)';
    const mediaQuery = window.matchMedia(breakpoint);

    // 브레이크 포인트에 따라 사이즈를 설정하는 함수
    function handleBreakpointChange() {
      if (mediaQuery.matches) {
        setSize(28); // 브레이크 포인트 이상일 때
      } else {
        setSize(21); // 브레이크 포인트 미만일 때
      }
    }

    // 초기 실행
    handleBreakpointChange();

    // 브레이크 포인트가 변경될 때마다 handleBreakpointChange 함수를 호출합니다.
    mediaQuery.addEventListener('change', handleBreakpointChange);

    // 컴포넌트 언마운트 시 이벤트 리스너를 제거합니다.
    return () => {
      mediaQuery.removeEventListener('change', handleBreakpointChange);
    };
  }, []);

  return (
    <div className="flex w-[295px] grow  flex-col rounded-box border-[0.74px] p-4 desktop:w-[394px] ">
      <p className="mb-2 text-body1">임대료</p>
      <div className="flex flex-row ">
        <div className="mr-2 flex flex-col justify-between py-[16px] desktop:py-2">
          <CommonChartLabel
            boxColor={'primary'}
            size={'md'}
            textType={'default'}
            text="내호실"
          />
          <CommonChartLabel
            boxColor={'gray'}
            size={'md'}
            textType={'default'}
            text="타호실"
          />
        </div>
        <div className="h-[90px] grow">
          <SingleCategoryHorizontalBarChart
            size={size}
            chartData={chartData}
            categoryKey="name"
            accentColor="#2563EB"
          />
        </div>
      </div>
    </div>
  );
};

export default function RowBarComp() {
  return (
    <div className="flex flex-col gap-6 desktop:flex-row">
      {chartData.map((val, index) => {
        return (
          <Box
            chartData={[val]}
            key={index}></Box>
        );
      })}
    </div>
  );
}
