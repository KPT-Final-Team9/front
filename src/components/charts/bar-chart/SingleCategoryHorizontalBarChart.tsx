'use client';
import React from 'react';
import { XAxis, YAxis, ResponsiveContainer, BarChart, Bar, LabelList } from 'recharts';
import { TextCustomLabel as CustomLabel } from '@chart/CustomLables';

// BUG: Rechart 내부에서 defaultProps 사용으로 인한 error

/**
 * chartData를 인자로 받아 수평 막대그래프차트를 반환

 * @param {*} param0.chartData *   data ex):
 * [{ name: 'Page1', rent: 90, diff: 40.5 },
 * { name: 'Page2', rent: 80, diff: 20.5 }
 * { name: 'Page3', rent: 70, diff: 60.5 }];
 * }}
 * @param {string} param0.categoryKey 위 예시의 name에 해당되는 값을 인자로 받음
 * @param {string} [param0.accentColor='#ffb775']
 */
export default function SingleCategoryHorizontalBarChart({
  chartData,
  categoryKey,
  accentColor = '#ffb775',
  size = 34,
}: {
  chartData: object[];
  accentColor?: string;
  categoryKey: string;
  size?: number;
}) {
  const filteredChartData = chartData?.length ? Object.keys(chartData[0]).filter(key => key !== categoryKey) : [];

  const DEFAULT_RADIUS: [number, number, number, number] = [4, 4, 4, 4];
  return (
    <ResponsiveContainer
      width="100%"
      height="100%">
      <BarChart
        margin={{ top: 0, right: 50, bottom: 0, left: 0 }}
        data={chartData}
        layout="vertical"
        barGap={16}>
        <XAxis
          type="number"
          domain={[0, 100]}
          hide
        />
        <YAxis
          type="category"
          dataKey={categoryKey}
          hide
        />
        {filteredChartData.map((val, index) => {
          const barColor = (index + 1) % 2 !== 0 ? accentColor : '#e5e7eb';
          return (
            <Bar
              key={index}
              dataKey={val}
              fill={barColor}
              radius={DEFAULT_RADIUS}
              barSize={size}>
              <LabelList
                dataKey={val}
                content={props => <CustomLabel {...props} />}
              />
            </Bar>
          );
        })}
      </BarChart>
    </ResponsiveContainer>
  );
}
