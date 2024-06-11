'use client';
import React, { useEffect, useState } from 'react';
import { Selectbox } from '@Atoms/seletbox/Selectbox';
import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import useQuarterStore from '@/app/(after-login)/dashboard/@Overview/_store';
dayjs.extend(quarterOfYear);

function getQuarterlyDates(fromDate, years) {
  const endDate = dayjs(fromDate);
  const startDate = endDate.subtract(years, 'year').startOf('quarter'); // 현재 날짜 기준 2년 전의 분기 시작
  const quarterlyDates = [];

  let currentDate = startDate;
  let index = 0;

  while (currentDate.isBefore(endDate) || currentDate.isSame(endDate)) {
    const year = currentDate.year();
    const quarter = Math.ceil((currentDate.month() + 1) / 3);
    quarterlyDates.push({
      id: index, // index를 id로 사용
      yearQuarter: `${year}년 ${quarter}분기`,
      year: year,
      quarter: quarter,
    });
    currentDate = currentDate.add(3, 'month'); // 3개월씩 더해서 다음 분기로 이동
    index++;
  }
  // 역순으로 정렬
  quarterlyDates.reverse();

  // 마지막분기 제거
  quarterlyDates.pop();
  return quarterlyDates;
}

export default function SelectComp() {
  // 셀렉트박스 onChange 함수
  const { selectedQuarter, allQuarters, setSelectedQuarter, setAllQuarters } = useQuarterStore();

  const handleBuildingChange = (newOption: { title: string; id: string }) => {
    console.log('newOption입니다');
    console.log(newOption);
    console.log(newOption.title);
    console.log(allQuarters);
    const matchedQuarter = allQuarters.find(quarter => quarter.id === parseInt(newOption.id));
    if (matchedQuarter) {
      setSelectedQuarter(matchedQuarter);
    }
  };

  useEffect(() => {
    const fromDate = dayjs(); // 현재 날짜를 기준으로
    const years = 2; // 2년 전까지
    const quarterlyDates = getQuarterlyDates(fromDate, years);
    console.log('quarterlyDates입니다', quarterlyDates);
    setAllQuarters(quarterlyDates);
    // 첫번째 분기 지정
    setSelectedQuarter(quarterlyDates[0]);
  }, []);

  return (
    <Selectbox
      lists={allQuarters}
      optionKey={'yearQuarter'}
      icon={'CalendarIcon'}
      size={'quarter'}
      showIcon={false}
      disableSort={true}
      onChange={newOption => handleBuildingChange(newOption)}
    />
  );
}
