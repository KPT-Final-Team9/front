'use client';
import React from 'react';

import GradientChart from '@chart/GradientChart';
import { LocalIcon } from '@icon/index';

export default function TestPage() {
  return (
    <div>
      <LocalIcon
        name="TooltipIcon"
        width={48}
        height={27}
      />
      <GradientChart text="차트" />
    </div>
  );
}
