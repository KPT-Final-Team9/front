'use client';
import React from 'react';
import { XAxis, YAxis, ResponsiveContainer, BarChart, Bar, LabelList } from 'recharts';
import { Props as LabelListProp } from '@/../node_modules/recharts/types/component/Label.js';

// 가로 막대 차트의 커스텀 라벨
const CustomLabel = (props: LabelListProp) => {
  const { x, y, width, height, value } = props;

  const parsedX = typeof x === 'number' ? x : parseFloat(x || '0');
  const parsedY = typeof y === 'number' ? y : parseFloat(y || '0');
  const parsedWidth = typeof width === 'number' ? width : parseFloat(width || '0');
  const parsedHeight = typeof height === 'number' ? height : parseFloat(height || '0');

  return (
    <text
      x={parsedX + parsedWidth + 10}
      y={parsedY + parsedHeight / 2}
      dy={5}
      dx={5}
      fill="#000"
      textAnchor="start"
      fontSize={17}
      style={{ fontFamily: 'var(--font-pretendard)', fontWeight: '600' }}
      fontWeight={'600'}>
      {value}
    </text>
  );
};

export default function MainVerticalBarChart({
  chartData,
  accentColor = '#8884d8',
}: {
  chartData: any;
  accentColor?: string;
}) {
  return (
    <div className="w-[394px]">
      <ResponsiveContainer
        width="100%"
        height={500}>
        {/* Fixme: type error, 동작함 */}
        <BarChart
          overflow="visible"
          data={chartData}
          layout="vertical"
          barGap={16}>
          <XAxis
            type="number"
            hide
          />
          <YAxis
            type="category"
            dataKey="name"
            hide
          />
          <Bar
            dataKey="rent"
            fill={accentColor}
            radius={[0, 2, 2, 0]}
            barSize={20} // 막대 크기 조절
          >
            <LabelList
              dataKey="rent"
              content={props => <CustomLabel {...props} />}
            />
          </Bar>
          <Bar
            dataKey="diff"
            fill="#e5e7eb"
            radius={[0, 2, 2, 0]}
            barSize={20}>
            <LabelList
              dataKey="diff"
              content={props => <CustomLabel {...props} />}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
