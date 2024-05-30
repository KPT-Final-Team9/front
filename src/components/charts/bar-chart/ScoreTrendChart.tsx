'use client';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ScoreTrendBarChartCustomTooltip } from '@chart/CustomTooltip';

export default function ScoreTrendChart({
  chartData,
  categoryKey,
  myRoomKey,
  otherRoomKey,
  accentColor = '#ffb775',
}: {
  chartData: object[];
  accentColor?: string;
  categoryKey: string;
  myRoomKey: string;
  otherRoomKey: string;
}) {
  return (
    <ResponsiveContainer
      width="100%"
      height="100%">
      <BarChart
        barGap={-30}
        width={600}
        height={300}
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        {/* 차트를 곂치게하기위해 X축 2개사용 */}
        <XAxis
          dataKey={categoryKey}
          xAxisId={0}
          hide
        />
        <XAxis
          dataKey={categoryKey}
          xAxisId={1}
          hide
        />
        <YAxis
          domain={[0, 100]}
          hide
        />
        <Tooltip
          content={<ScoreTrendBarChartCustomTooltip />}
          cursor={false}
        />
        <Bar
          dataKey={otherRoomKey}
          barSize={10}
          xAxisId={1}
          fill="#f3f4f6"
        />
        <Bar
          dataKey={myRoomKey}
          barSize={10}
          xAxisId={0}
          fill={accentColor}
          fillOpacity={0.7}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
