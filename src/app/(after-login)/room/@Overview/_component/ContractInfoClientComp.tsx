'use client';
import React, { useEffect, useState } from 'react';
import { calculateDateProgress, formatDateToYYYY_MM_DD } from '@/utils';
import ContractRentInfo from './ContractRentInfo';
import { ContractProgress } from '@Monocles/progress-bar/ContractProgress';

const DUMMY_ROOM_NAME = '미왕빌딩 A동 201호';
const DUMMY_DEPOSIT = 1000;
const DUMMY_MONTHLY = 80;
const DUMMY_START_DATE = '2023-05-07';
const DUMMY_END_DATE = '2025-05-07';

export default function ContractInfoClientComp() {
  const [roomName, setRoomName] = useState<string | undefined>(undefined);
  const [roomDeposit, setRoomDeposit] = useState<number | undefined>(undefined);
  const [roomMonthly, setRoomMonthly] = useState<number | undefined>(undefined);
  const [contractStartDate, setContractStartDate] = useState<Date | undefined>(undefined);
  const [contractEndDate, setContractEndDate] = useState<Date | undefined>(undefined);
  const [currentDate, setCurrentDate] = useState<Date | undefined>(undefined);
  const [contractProgressValue, setContractProgressValue] = useState<number | undefined>(undefined);

  // TODO: 이후 진행율 컴포넌트 확인 & API 명세 나오면 되돌리기
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
      <div className="flex flex-col gap-2">
        <div className="flex h-[19px] w-[60px] items-center justify-center rounded-full bg-white text-overline text-primary">
          계약 기간
        </div>
        <ContractProgress
          value={contractProgressValue}
          percentageFont={'body1'}
          percentageFontClassName="text-white"
          periodFontClassName="text-gray-200"
          contractDate={{
            start: formatDateToYYYY_MM_DD(contractStartDate),
            end: formatDateToYYYY_MM_DD(contractEndDate),
            current: formatDateToYYYY_MM_DD(currentDate),
          }}
          indicatorColor="evaluation-gradient"
        />
      </div>
    </>
  );
}
