import React from 'react';
import RatingManagementClientComp from './RatingManagementClientComp';

export default function RatingManagementServerComp() {
  return (
    <div className="h-[222px] w-[343px] rounded-container bg-white desktop:h-[282px] desktop:w-[394px]">
      RatingManagementServerComp
      <RatingManagementClientComp />
    </div>
  );
}
