'use client';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ScoreTrendChartCustomTooltip } from '@chart/CustomTooltip';
import { filterChartData } from '@/utils';

export default function ScoreTrendChart({ dateKey, chartData }: { dateKey: string; chartData: any }) {
  const tickStyle = { fill: '#9b9b9b', fontSize: 14, fontWeight: 400 };
  // 기준 x 축 키값 제외한 키 필터
  const filteredChartData = filterChartData({ chartData, dataKey: dateKey });
  return (
    <div className="my-2 h-[275px] w-full">
      <ResponsiveContainer
        width="100%"
        height="100%">
        <LineChart data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            tickLine={false}
            dataKey={dateKey}
            tick={tickStyle}
            textAnchor="middle"
            height={50}
            dy={10}
          />
          <YAxis
            type="number"
            yAxisId="left"
            tickLine={false}
            tick={tickStyle}
            interval={0}
            domain={[0, 100]}
            dx={-10}
            ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          />
          <YAxis
            dataKey={dateKey}
            textAnchor="middle"
            yAxisId="right"
            orientation="right"
          />
          <Tooltip
            content={<ScoreTrendChartCustomTooltip />}
            cursor={{ fill: 'black' }}
          />
          <Line
            yAxisId="left"
            type="natural"
            dataKey={filteredChartData[0]}
            stroke="#2563EB"
            dot={false}
            activeDot={{ r: 6, stroke: '#2563EB', fill: '#ffff' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
