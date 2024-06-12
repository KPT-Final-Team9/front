'use client';
import React, { useState } from 'react';

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import GradientTooltip from '@chart/GradientTooltip';

interface chartDataType {
  selected_month: string;
  total_avg: number;
}

interface GradientChartProps {
  strokeColor: string;
  gradientColor: string;
  data: chartDataType[];
}

export default function GradientChart({
  strokeColor = '#1D4ED8',
  gradientColor = '#D9E5FF',
  data,
}: GradientChartProps) {
  const gradientId = `colorPv-${gradientColor}`;

  return (
    <div className="h-[77px] w-[220px] rounded-[10px] bg-gray-50 desktop:h-[86px] desktop:w-[237px]">
      <ResponsiveContainer
        width="100%"
        height="100%"
        minWidth={50}
        minHeight={50}>
        <AreaChart
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}>
          <defs>
            <linearGradient
              id={gradientId}
              x1="0"
              y1="0"
              x2="0"
              y2="1">
              <stop stopColor={gradientColor} />
              <stop
                offset="1"
                stopColor="white"
              />
            </linearGradient>
          </defs>
          <YAxis
            hide={true}
            domain={[0, 100]}
            dataKey={'total_avg'}
          />
          <XAxis
            hide={true}
            dataKey={'selected_month'}
          />

          <Tooltip
            cursor={false}
            allowEscapeViewBox={{ x: true }}
            wrapperStyle={{ visibility: 'visible' }}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const currentData = payload[0].payload;
                return (
                  <GradientTooltip
                    value={currentData.total_avg}
                    fill={strokeColor}
                  />
                );
              }
              return null;
            }}
          />

          <Area
            activeDot={false}
            type="linear"
            dataKey="total_avg"
            stroke={strokeColor}
            fillOpacity={1}
            fill={`url(#${gradientId})`} // 그라디언트 id와 맞춰줘야함
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
