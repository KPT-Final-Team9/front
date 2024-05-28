'use client';
import React from 'react';
import { NextIconButton } from '@Atoms/buttons/NextIconButton';
import GradientChart from '@chart/GradientChart';
import { BuildingRoomAvatar } from '@Atoms/avatar/BuildingRoomAvatar';
import { StarIconButton } from '@Atoms/buttons/IconButtons';
import { motion } from 'framer-motion';

const chartData = [
  {
    month: 'Jan',
    score: 40,
  },
  {
    month: 'Fed',
    score: 30,
  },
  {
    month: 'Mar',
    score: 20,
  },
  {
    month: 'Apr',
    score: 40,
  },
  {
    month: 'Jun',
    score: 18,
  },
  {
    month: 'Jul',
    score: 23,
  },
  {
    month: 'Aug',
    score: 34,
  },
  {
    month: 'Sep',
    score: 40,
  },
  {
    month: 'Oct',
    score: 30,
  },
  {
    month: 'Nov',
    score: 20,
  },
  {
    month: 'Dec',
    score: 27,
  },
];

export default function LineChartComp({ mainRoom = false }: { mainRoom?: boolean }) {
  return (
    <motion.div
      whileHover={{ scale: 0.9 }}
      transition={{ type: 'just', stiffness: 300 }}>
      <div className=" rounded-container bg-white py-[16px] pl-[23px] pr-[40px]">
        <div className="mb-[24px] flex flex-row gap-1">
          <BuildingRoomAvatar idx={0} />
          <div className="flex grow flex-col">
            <p className="text-[16px] text-gray-500">미왕빌딩</p>
            <div className="flex justify-between">
              <p className="text-body3">C동 601호</p>
            </div>
          </div>
          <div className="flex items-center p-[4px]">
            <StarIconButton toggle={mainRoom} />
          </div>
        </div>
        <div className="flex justify-between">
          <GradientChart
            data={chartData}
            gradientColor="#D9E5FF"
            strokeColor="#1D4ED8"
          />
          <NextIconButton
            className="self-center"
            shape={'square'}
          />
        </div>
      </div>
    </motion.div>
  );
}
