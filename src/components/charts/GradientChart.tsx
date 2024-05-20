'use client';
import React from 'react';

import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';

import { LocalIcon } from '@icon/index';

const data = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Fed',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Jun',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jul',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Aug',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Sep',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Oct',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Nov',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Dec',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];

export default function GradientChart({ text }: { text: string }) {
  return (
    <div className="h-[86px] w-[237px]">
      <span>{text}</span>
      <ResponsiveContainer
        width="100%"
        height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
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
              <stop stop-color="#D9E5FF" />
              <stop
                offset="1"
                stop-color="white"
              />
            </linearGradient>
          </defs>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          {/* <XAxis dataKey="name" />
          <YAxis /> */}
          <Tooltip
            content={
              <LocalIcon
                name="TooltipIcon"
                width={48}
                height={27}
              />
            }
          />
          {/* <Tooltip content={<CustomTooltip />} /> */}
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#1D4ED8"
            fillOpacity={1}
            fill="url(#colorPv)"
            // fill="#1D4ED8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

const CustomTooltip = () => {
  return (
    <div className="custom-tooltip">
      <p className="desc">Anything you want can be displayed here.</p>
    </div>
  );
};
