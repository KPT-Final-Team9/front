'use client';

import React, { useCallback, useState } from 'react';
import { Cell, PieChart, Pie, ResponsiveContainer, Sector } from 'recharts';

const dummyData = [
  { name: '시설 점수', value: 45 },
  { name: '관리 점수', value: 80 },
  { name: '민원 점수', value: 30 },
];

const COLORS = ['#2563EB', '#7DCB70', '#F3B570'];

export default function ScorePieChart() {
  const [activeIndex, setActiveIndex] = useState(1);
  const onPieEnter = useCallback(
    (_: unknown, index: number) => {
      setActiveIndex(index);
    },
    [setActiveIndex],
  );
  return (
    <div className="h-[144px] w-[144px]">
      <ResponsiveContainer
        width="100%"
        height="100%">
        {/* FIXME: pieChart overflow 타입 에러 */}
        {/* @ts-ignore */}
        <PieChart overflow="visible">
          <Pie
            activeIndex={activeIndex}
            activeShape={PieActiveShape}
            paddingAngle={5}
            data={dummyData}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={80}
            dataKey="value"
            labelLine={PieTextCustomizedLabelLine}
            label={PieTextCustomizedLabel}
            onMouseEnter={onPieEnter}>
            {dummyData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

interface CustomCommonProps {
  cx: number;
  cy: number;
  midAngle: number;
  outerRadius: number;
}

interface PieTextCustomizedLabelProps extends CustomCommonProps {
  value: number;
  name: string;
}

const RADIAN = Math.PI / 180;
const PieActiveShape = ({ ...props }) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius - 1}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
    </g>
  );
};

const PieTextCustomizedLabel = (props: PieTextCustomizedLabelProps) => {
  const { cx, cy, midAngle, outerRadius, value, name } = props;

  const RADIAN = Math.PI / 180;

  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 18;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text
        x={ex + (cos >= 0 ? -12 : 12)}
        y={ey}
        textAnchor={textAnchor}
        fill="#111827"
        className="text-body4">
        {`${name}`}
      </text>
      <text
        x={ex + (cos >= 0 ? -2 : 3)}
        y={ey + 7}
        dy={18}
        textAnchor={textAnchor}
        fill="#111827"
        className="text-h4">
        {value}점
      </text>
    </g>
  );
};

const PieTextCustomizedLabelLine = (props: CustomCommonProps) => {
  const { cx, cy, midAngle, outerRadius } = props;

  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius - 10) * cos;
  const sy = cy + (outerRadius - 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ey = my;
  return (
    <g>
      <path
        d={`M${sx},${sy}L${mx},${my}L${ey}`}
        stroke={'#D1D5DB'}
        stroke-width="2"
        fill="none"
      />
      <circle
        cx={sx}
        cy={sy}
        r={3}
        fill={'#D1D5DB'}
        stroke="none"
      />
    </g>
  );
};
