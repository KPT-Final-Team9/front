'use client';
import ReviewTrackProgress from '@Monocles/progress-bar/ReviewTrackProgress';
import React, { useEffect, useState } from 'react';

const MOCK_RATING_PROGRESS_VALUE = 85;

export default function RatingManagementClientComp() {
  const [isRatingActive, setIsRatingActive] = useState<boolean>(true);
  const [ratingProgressValue, setRatingPrgressValue] = useState<number | undefined>(undefined);

  const handleRatingActiveChange = () => {
    setIsRatingActive(prev => !prev);
    if (window) window.alert('호실 평가 변경됨');
  };

  useEffect(() => {
    setTimeout(() => {
      setRatingPrgressValue(MOCK_RATING_PROGRESS_VALUE);
    }, 100);
  }, []);

  return (
    <div>
      <div className="mb-6 flex gap-4 desktop:mb-9 desktop:gap-9">
        <div>
          <div className="text-body4 text-text-primary">내호실 평가받기 설정</div>
          <span className="text-overline text-text-secondary">내호실의 평가 내용을 요약하여 받아볼 수 있어요</span>
        </div>
        <div>스위치</div>
      </div>
      <div className="flex flex-col">
        <p className="mb-2 text-body4">평가 진행률</p>
        <ReviewTrackProgress
          value={ratingProgressValue}
          trackFontClass="desktop:text-caption"
          legendClass="mt-2"
        />
      </div>
    </div>
  );
}
