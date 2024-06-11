'use client';
import React, { useState, useEffect } from 'react';
import MultiBarChart from '@chart/bar-chart/MultiBarChart';

export default function BarChart({ chartData }) {
  const [size, setSize] = useState(34); // 기본 사이즈를 'small'로 설정합니다.

  useEffect(() => {
    // 브레이크 포인트 정의
    const breakpoint = '(min-width: 430px)';
    const mediaQuery = window.matchMedia(breakpoint);

    // 브레이크 포인트에 따라 사이즈를 설정하는 함수
    function handleBreakpointChange() {
      if (mediaQuery.matches) {
        setSize(34); // 브레이크 포인트 이상일 때
      } else {
        setSize(16); // 브레이크 포인트 미만일 때
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
    <>
      {chartData && (
        <MultiBarChart
          chartData={chartData}
          categoryKey="room_name"
          barSize={size}
        />
      )}
    </>
  );
}
