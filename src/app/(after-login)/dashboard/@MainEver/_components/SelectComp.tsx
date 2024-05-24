'use client';
import React from 'react';
import { Selectbox } from '@Atoms/seletbox/Selectbox';

export default function SelectComp() {
  const SelectData = [
    {
      id: 1,
      room: 'Q동 201호',
      buildingName: '미왕빌딩',
      quarter: '1분기',
    },
    {
      id: 2,
      room: 'E동 801호',
      buildingName: '가산드림타워',
      quarter: '2분기',
    },
    {
      id: 3,
      room: 'C동 601호',
      buildingName: '더스카이밸리1차',
      quarter: '3분기',
    },
    {
      id: 4,
      room: 'B동 501호',
      buildingName: '서울숲더스페이스',
      quarter: '4분기',
    },
  ];
  const testFunc = () => {
    console.log('hi');
  };
  return (
    <Selectbox
      lists={SelectData}
      optionKey={'quarter'}
      icon={'CalendarIcon'}
      size={'quarter'}
      showIcon={false}
      onChange={testFunc}
    />
  );
}
