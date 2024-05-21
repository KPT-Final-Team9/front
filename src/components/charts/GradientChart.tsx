'use client';
import React, { useState } from 'react';

import { Area, AreaChart, ResponsiveContainer, Tooltip, YAxis } from 'recharts';

import GradientTooltip from '@chart/GradientTooltip';

interface dataType {
  name: string;
  score: number;
}

const data: dataType[] = [
  {
    name: 'Jan',
    score: 40,
  },
  {
    name: 'Fed',
    score: 30,
  },
  {
    name: 'Mar',
    score: 20,
  },
  {
    name: 'Apr',
    score: 40,
  },
  {
    name: 'Jun',
    score: 18,
  },
  {
    name: 'Jul',
    score: 23,
  },
  {
    name: 'Aug',
    score: 34,
  },
  {
    name: 'Sep',
    score: 40,
  },
  {
    name: 'Oct',
    score: 30,
  },
  {
    name: 'Nov',
    score: 20,
  },
  {
    name: 'Dec',
    score: 27,
  },
];

const getMedianValueData = (data: dataType[]) => {
  const sortedData = [...data].sort((a, b) => a.score - b.score);
  const middleIndex = Math.floor(sortedData.length / 2);
  return sortedData[middleIndex];
};

const medianValueData = getMedianValueData(data);

interface GradientChartProps {
  strokeColor: string;
  gradientColor: string;
}

export default function GradientChart({ strokeColor = '#1D4ED8', gradientColor = '#D9E5FF' }: GradientChartProps) {
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  React.useEffect(() => {
    const xIndex = data.findLastIndex(d => d.score === medianValueData.score);
    const x = (xIndex / data.length) * 230; // 너비 237
    const y = ((100 - medianValueData.score) / 100) * 86 - 35; // 높이 86
    console.log('index', y);
    setTooltipPosition({ x, y });
  }, []);

  return (
    <div className="h-[86px] w-[237px] rounded-[10px] bg-gray-50">
      <ResponsiveContainer
        width="100%"
        height="100%">
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
            content={<GradientTooltip value={medianValueData.score} />}
            position={{ x: tooltipPosition.x, y: tooltipPosition.y }}
          />

          <Area
            activeDot={false}
            type="monotoneY"
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
