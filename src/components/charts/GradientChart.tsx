'use client';
import React, { useState } from 'react';

import { Area, AreaChart, ResponsiveContainer, Tooltip, YAxis } from 'recharts';

import GradientTooltip from '@chart/GradientTooltip';

interface chartDataType {
  month: string;
  score: number;
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
  const getMedianValueData = (data: chartDataType[]) => {
    const sortedData = [...data].sort((a, b) => a.score - b.score);
    const middleIndex = Math.floor(sortedData.length / 2);
    return sortedData[middleIndex];
  };

  const medianValueData = getMedianValueData(data);

  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  React.useEffect(() => {
    const xIndex = data.findLastIndex(d => d.score === medianValueData.score);
    const x = (xIndex / data.length) * 230; // 너비 237
    const y = ((100 - medianValueData.score) / 100) * 86 - 35; // 높이 86
    console.log('index', y);
    setTooltipPosition({ x, y });
  }, []);

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
              id="colorPv"
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
          />
          <Tooltip
            active={false}
            cursor={false}
            allowEscapeViewBox={{ x: true, y: true }}
            wrapperStyle={{ visibility: 'visible' }}
            content={
              <GradientTooltip
                value={medianValueData.score}
                fill={strokeColor}
              />
            }
            position={{ x: tooltipPosition.x, y: tooltipPosition.y }}
          />

          <Area
            activeDot={false}
            type="linear"
            dataKey="score"
            stroke={strokeColor}
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

const PrimaryGradient = () => {
  return (
    <linearGradient
      id="colorPv"
      x1="0"
      y1="0"
      x2="0"
      y2="1">
      <stop stopColor="#D9E5FF" />
      <stop
        offset="1"
        stopColor="white"
      />
    </linearGradient>
  );
};

const lightBlueGradient = () => {
  return (
    <linearGradient
      id="paint0_linear_1587_4260"
      x1="119.5"
      y1="24.6593"
      x2="119.5"
      y2="68"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="#D7F8FF" />
      <stop
        offset="1"
        stop-color="white"
      />
    </linearGradient>
  );
};

const orangeGradient = () => {
  return (
    <linearGradient
      id="paint0_linear_1587_4285"
      x1="119.5"
      y1="42.6593"
      x2="119.5"
      y2="86"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFDBBA" />
      <stop
        offset="1"
        stop-color="white"
      />
    </linearGradient>
  );
};

const greenGradient = () => {
  return (
    <linearGradient
      id="paint0_linear_1671_6038"
      x1="110.5"
      y1="23.6912"
      x2="110.5"
      y2="64.0081"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="#BBE3BB" />
      <stop
        offset="1"
        stop-color="white"
      />
    </linearGradient>
  );
};
