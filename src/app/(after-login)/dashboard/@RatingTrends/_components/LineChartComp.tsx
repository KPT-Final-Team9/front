'use client';
import React, { useEffect } from 'react';
import { NextIconButton } from '@Atoms/buttons/NextIconButton';
import GradientChart from '@chart/GradientChart';
import { BuildingRoomAvatar } from '@Atoms/avatar/BuildingRoomAvatar';
import { StarIconButton } from '@Atoms/buttons/IconButtons';
import { motion } from 'framer-motion';
import { useMainModalStore } from '@/app/(after-login)/dashboard/@RatingTrends/_store';
import Link from 'next/link';
import { useRepresentRoomStore } from '@/app/(after-login)/dashboard/@RatingTrends/_store/index';
import { AVATAR_BUILDING_GRADIENT } from '@/constants';

export default function LineChartComp({
  mainRoom = false,
  roomId,
  val,
  roomName,
  buildingName,
}: {
  mainRoom?: boolean;
  roomId?: number;
  val?: any;
  roomName: string | undefined;
  buildingName: string | undefined;
}) {
  const { setRoomId, setRoomName, setModal } = useMainModalStore();
  const { representRoomId } = useRepresentRoomStore();

  const color = AVATAR_BUILDING_GRADIENT[val.room_id % AVATAR_BUILDING_GRADIENT.length];
  const isRepresentRoomId = representRoomId ? representRoomId === roomId : mainRoom;
  const reversedData = [...val?.all_avg_by_month_list]?.reverse();

  return (
    <motion.div
      whileHover={{ scale: 0.95 }}
      transition={{ type: 'just', stiffness: 300 }}>
      <div className=" rounded-container bg-white py-[16px] pl-[23px] pr-[40px] ">
        <div className="mb-[24px] flex flex-row gap-1">
          <BuildingRoomAvatar idx={val.room_id} />
          <div className="flex grow flex-col">
            <p className="text-[16px] text-gray-500">{buildingName}</p>
            <div className="flex justify-between">
              <p className="text-body3">{roomName}</p>
            </div>
          </div>
          <div className="flex items-center p-[4px]">
            <StarIconButton
              toggle={isRepresentRoomId}
              onClick={() => {
                setRoomId(roomId);
                setRoomName(roomName);
                setModal(true);
              }}
              disabled={isRepresentRoomId}
            />
          </div>
        </div>
        <Link
          className="cursor-pointer"
          href={'#'}>
          <div className="flex justify-between">
            <GradientChart
              data={reversedData}
              strokeColor={color.strokeColor}
              gradientColor={color.gradientColor}
            />
            <NextIconButton
              className="self-center"
              shape={'square'}
            />
          </div>
        </Link>
      </div>
    </motion.div>
  );
}
