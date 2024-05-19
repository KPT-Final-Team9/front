'use client';
import React from 'react';
import { XAxis, YAxis, ResponsiveContainer, BarChart, Bar, LabelList } from 'recharts';
import { Props as LabelListProp } from '@/../node_modules/recharts/types/component/Label.js';
import { LocalIcon } from '@icon/index';

// 가로 막대 차트의 커스텀 라벨
const CustomLabel = (props: LabelListProp) => {
  const { x, y, width, value, fill } = props;

  const parsedX = typeof x === 'number' ? x : parseFloat(x || '0');
  const parsedY = typeof y === 'number' ? y : parseFloat(y || '0');
  const parsedWidth = typeof width === 'number' ? width : parseFloat(width || '0');

  return (
    <g transform={`translate(${parsedX - parsedWidth + 20}, ${parsedY - 50})`}>
      <LocalIcon
        name="SpeechBubbleIcon"
        fill={fill}
        width={60}
        height={60}
      />
      <text
        x={25}
        y={14}
        dy={5}
        dx={5}
        fill="white"
        textAnchor="middle"
        fontSize={14}
        style={{ fontFamily: 'var(--font-pretendard)', fontWeight: '600' }}
        fontWeight={'600'}>
        {value}
      </text>
    </g>
  );
};

export default function HorizontalBarChart({
  chartData,
  accentColor = '#8884d8',
}: {
  chartData: any;
  accentColor?: string;
}) {
  return (
    <div className="h-[150px] w-[394px]">
      <ResponsiveContainer
        width="100%"
        height="100%">
        <BarChart
          margin={{ top: 60, right: 0, bottom: 0, left: 0 }}
          data={chartData}
          layout="horizontal"
          barGap={13}>
          <XAxis
            type="category"
            dataKey="rent"
            hide
          />
          <YAxis
            type="number"
            domain={[0, 100]}
            hide
          />
          <Bar
            dataKey="rent"
            fill={accentColor}
            radius={[4, 4, 4, 4]}
            barSize={34} // 막대 크기 조절
          >
            <LabelList
              dataKey="rent"
              content={props => (
                <CustomLabel
                  fill={accentColor}
                  {...props}
                />
              )}
            />
          </Bar>
          <Bar
            dataKey="price"
            fill="#e5e7eb"
            radius={[4, 4, 4, 4]}
            barSize={34} // 막대 크기 조절
          ></Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
