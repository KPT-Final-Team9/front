'use client';
import React from 'react';

import GradientChart from '@chart/GradientChart';

export default function TestPage() {
  return (
    <div className="ml-[100px] mt-[100px]">
      {/* <GradientTooltip value={80} /> */}
      <GradientChart text="차트" />
    </div>
  );
}
