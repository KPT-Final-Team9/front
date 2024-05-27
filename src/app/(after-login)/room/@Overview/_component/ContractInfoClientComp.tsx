'use client';
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { calculateDateProgress } from '@/utils';
import ContractRentInfo from './ContractRentInfo';

const DUMMY_ROOM_NAME = '미왕빌딩 A동 201호';
const DUMMY_DEPOSIT = 1000;
const DUMMY_MONTHLY = 80;
const DUMMY_START_DATE = '2023-05-07';
const DUMMY_END_DATE = '2025-05-07';

export function DummyChart({
  start,
  end,
  current,
  value,
}: {
  start: Date | undefined;
  end: Date | undefined;
  current: Date | undefined;
  value: number | undefined;
}) {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <span>{start ? dayjs(start).format('YYYY.MM.DD') : '-'}</span>
        <span>{end ? dayjs(end).format('YYYY.MM.DD') : '-'}</span>
      </div>
      <span>{value ? value : '-'}%</span>
      <span>{current ? dayjs(current).format('YYYY.MM.DD') : '-'}</span>
    </div>
  );
}

export default function ContractInfoClientComp() {
  const [roomName, setRoomName] = useState<string | undefined>(undefined);
  const [roomDeposit, setRoomDeposit] = useState<number | undefined>(undefined);
  const [roomMonthly, setRoomMonthly] = useState<number | undefined>(undefined);
  const [contractStartDate, setContractStartDate] = useState<Date | undefined>(undefined);
  const [contractEndDate, setContractEndDate] = useState<Date | undefined>(undefined);
  const [currentDate, setCurrentDate] = useState<Date | undefined>(undefined);
  const [contractProgressValue, setContractProgressValue] = useState<number | undefined>(undefined);

  useEffect(() => {
    setTimeout(() => {
      setRoomName(DUMMY_ROOM_NAME);
      setRoomDeposit(DUMMY_DEPOSIT);
      setRoomMonthly(DUMMY_MONTHLY);

      const dummyStartDate = new Date(DUMMY_START_DATE);
      const dummyEndDate = new Date(DUMMY_END_DATE);
      const dummyCurrentDate = new Date();
      setContractStartDate(dummyStartDate);
      setContractEndDate(dummyEndDate);
      setCurrentDate(dummyCurrentDate);

      const calculatedContractProgressValue = calculateDateProgress(dummyStartDate, dummyEndDate, dummyCurrentDate);
      setContractProgressValue(calculatedContractProgressValue);
    }, 100);
  }, []);

  return (
    <>
      <p className="text-body3 text-white">{roomName ? roomName : '-'}</p>
      <ContractRentInfo
        roomDeposit={roomDeposit}
        roomMonthly={roomMonthly}
      />
      <div>
        <div className="flex h-[19px] w-[60px] items-center justify-center rounded-full bg-white text-overline text-primary">
          계약 기간
        </div>
        <DummyChart
          start={contractStartDate}
          end={contractEndDate}
          current={currentDate}
          value={contractProgressValue}
        />
      </div>
    </>
  );
}
