import React from 'react';
import RatingManagementClientComp from './RatingManagementClientComp';

export default function RatingManagementServerComp() {
  return (
    <div className="min-h-[222px] rounded-container bg-white px-6 py-4 desktop:min-h-[282px] desktop:w-[394px] desktop:px-10 desktop:py-8">
      <h4 className="mb-8 text-h4 desktop:mb-10">내호실 평가 관리</h4>
      <RatingManagementClientComp />
    </div>
  );
}
