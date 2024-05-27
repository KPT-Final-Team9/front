'use client';
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

const DUMMY_ROOM_NAME = '미왕빌딩 A동 201호';
const DUMMY_DEPOSIT = 1000;
const DUMMY_MONTHLY = 80;
const DUMMY_START_DATE = '2023-05-07';
const DUMMY_END_DATE = '2025-05-07';

// 컴포넌트 분리할 수 있을 것 같아서 분리해서 작성함.
export function ContractRentInfo({
  roomDeposit,
  roomMonthly,
}: {
  roomDeposit: number | undefined;
  roomMonthly: number | undefined;
}) {
  return (
    <div className="mb-6 mt-4 flex h-[62px] w-[212px] items-center justify-center gap-2 rounded-mobile-stroke bg-white desktop:rounded-desktop-stroke">
      <div className="flex flex-col items-center">
        <span className="text-overline text-primary">보증금</span>
        <span className="text-h4">{roomDeposit ? roomDeposit : '-'} / </span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-overline text-primary">임대료</span>
        <span className="text-h4">{roomMonthly ? roomMonthly : '-'} 만 원</span>
      </div>
    </div>
  );
}

export function ContractBadge() {
  return (
    <div className="flex h-[19px] w-[60px] items-center justify-center rounded-full bg-white text-overline text-primary">
      계약 기간
    </div>
  );
}

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
        <ContractBadge />
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
