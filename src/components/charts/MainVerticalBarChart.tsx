'use client';
import React, { useId } from 'react';

import { Bar, BarChart, LabelList, ResponsiveContainer, XAxis, YAxis } from 'recharts';

import { SpeechBubbleCustomLabel as CustomLabel } from '@chart/CustomLables';

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
export default function SingleCategoryVerticalBarChart({
  chartData,
  categoryKey,
  accentColor = '#ffb775',
}: {
  chartData: object[];
  accentColor?: string;
  categoryKey: string;
}) {
  const varChartId = useId();
  const filteredChartData = chartData?.length ? Object.keys(chartData[0]).filter(key => key !== categoryKey) : [];
  return (
    <div className="h-full w-full">
      <ResponsiveContainer
        width="100%"
        height="100%">
        <BarChart
          margin={{ top: 60, right: 5, bottom: 0, left: 5 }}
          data={chartData}
          layout="horizontal"
          barGap={13}>
          <XAxis
            type="category"
            dataKey={categoryKey}
            hide
          />
          <YAxis
            type="number"
            domain={[0, 100]}
            hide
          />
          {filteredChartData.map((val, index) => {
            const barColor = (index + 1) % 2 !== 0 ? accentColor : '#e5e7eb';
            return (
              <Bar
                key={`${varChartId}-${index}`}
                dataKey={val}
                fill={barColor}
                radius={[4, 4, 4, 4]}
                barSize={34}>
                {(index + 1) % 2 !== 0 ? (
                  <LabelList
                    dataKey={val}
                    content={props => (
                      <CustomLabel
                        fill={barColor}
                        {...props}
                      />
                    )}
                  />
                ) : null}
              </Bar>
            );
          })}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
