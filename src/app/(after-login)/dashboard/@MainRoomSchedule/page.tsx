'use client';
import { Progress } from '@/components/ui/progress';
import RoomBadge from '@Atoms/badge/RoomBadge';
import { ContractProgress, ContractProgressProps } from '@Monocles/progress-bar/ContractProgress';
import { NextIconButton } from '@Atoms/buttons/NextIconButton';
import ReviewTrackProgress from '@Monocles/progress-bar/ReviewTrackProgress';

const contractProgressDate = {
  start: '2023.05.07',
  end: '2025.05.07',
  current: '024.05.07',
};

export default function Page() {
  return (
    <div className="rounded-container bg-white px-[40px] py-[32px]">
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-h4">대표 호실 스케줄</h4>
        <NextIconButton shape={'circle'} />
      </div>
      <RoomBadge
        roomName="asd"
        className="mb-6 w-fit min-w-9"
      />
      <div className="contract-container flex flex-col gap-3">
        <div>
          <p className="schedule-title">계약 기간</p>
          <ContractProgress
            value={50}
            percentageFont={'body1'}
            periodFontClassName="text-gray-400"
            contractDate={contractProgressDate}
          />
        </div>
        <div>
          <p className="schedule-title">평가 진행률</p>
          <ReviewTrackProgress
            value={40}
            trackFontClass="desktop:text-body4"
          />
        </div>
      </div>
    </div>
  );
}
