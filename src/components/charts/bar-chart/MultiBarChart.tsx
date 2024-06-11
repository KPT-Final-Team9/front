'use client';
import React, { useId } from 'react';
import { XAxis, YAxis, ResponsiveContainer, BarChart, Bar, LabelList, CartesianGrid } from 'recharts';

// BUG: Rechart 내부에서 defaultProps 사용으로 인한 error

/**
 * chartData를 인자로 받아 수평 막대그래프차트를 반환

 * @param {*} param0.chartData *   data ex):
 * [{ name: 'Page1', rent: 90, diff: 40.5 },
 * { name: 'Page2', rent: 80, diff: 20.5 }
 * { name: 'Page3', rent: 70, diff: 60.5 }];
 * }}
 * @param {string} param0.categoryKey 위 예시의 name에 해당되는 값을 인자로 받음
 */
export default function MultiBarChart({
  chartData,
  categoryKey,
  barSize = 34,
}: {
  chartData: object[];
  categoryKey: string;
  barSize?: number;
}) {
  const varChartId = useId();
  const filteredChartData = chartData?.length ? Object.keys(chartData[0]).filter(key => key !== categoryKey) : [];
  const tickStyle = { fill: '#9b9b9b', fontSize: 14, fontWeight: 400, transform: 'translate(0, 10)' };
  console.log(chartData, '차트데이터내부입니다');
  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      minWidth={50}
      minHeight={50}>
      <BarChart
        margin={{ top: 10, right: 10, bottom: 10, left: 0 }}
        data={chartData}
        layout="horizontal"
        barGap={13}>
        <CartesianGrid vertical={false} />
        <XAxis
          tickLine={false}
          type="category"
          dataKey={categoryKey}
          tick={tickStyle}
        />
        <YAxis
          tick={tickStyle}
          tickLine={false}
          type="number"
          interval={0}
          domain={[0, 100]}
        />
        {filteredChartData.map((val, index) => {
          const barColor = (index + 1) % 2 !== 0 ? '#DBEAFE' : '#1D4ED8';
          return (
            <Bar
              key={`${varChartId}-${index}`}
              dataKey={val}
              fill={barColor}
              radius={[4, 4, 4, 4]}
              barSize={barSize}
            />
          );
        })}
      </BarChart>
    </ResponsiveContainer>
  );
}
