'use client';
import { Button } from '@/components/ui/button';
import { Popover } from '@/components/ui/popover';
import { XIconButton } from '@Atoms/buttons/IconButtons';
import { Selectbox } from '@Atoms/seletbox/Selectbox';
import PopoverContent from '@Monocles/popover-trigger/PopoverContent';
import { LocalIcon } from '@icon/index';
import React, { useEffect, useState } from 'react';
import { PopoverClose } from '@radix-ui/react-popover';
import RatingDetailDateRangePicker from '@/app/(after-login)/rating-detail/_component/RatingDetailDateRangePicker';
import { RatingCategory } from '@/app/(after-login)/rating-detail/_component/RatingDetailDataTable';
import {
  CategorySelectId,
  DEFAULT_CATEGORY_ID,
  DEFAULT_DATE_RANGE,
  DEFAULT_ROOM_ID,
  useRatingDetailStore,
} from '@/app/(after-login)/rating-detail/_store';
import PopoverTrigger from '@Monocles/popover-trigger/PopoverTrigger';
import { isSameDateRange } from '@/utils';

const CATEGORY_LIST = [
  { id: CategorySelectId.ALL, category: RatingCategory.ALL },
  { id: CategorySelectId.FACILITY, category: RatingCategory.FACILITY },
  { id: CategorySelectId.MANAGEMENT, category: RatingCategory.MANAGEMENT },
  { id: CategorySelectId.COMPLAINT, category: RatingCategory.COMPLAINT },
];

// FIXME: dummy
const DUMMY_ROOM_LIST = [
  { id: 0, roomName: 'test1' },
  { id: 1, roomName: 'test2' },
];

export default function RatingDetailFilter() {
  const [roomData, setRoomData] = useState<Array<{ roomName: string; id: number }>>([]);
  const roomId = useRatingDetailStore(state => state.roomId);
  const setRoomId = useRatingDetailStore(state => state.setRoomId);
  const selectedRoom = JSON.stringify(roomData?.find(data => data.id === roomId));
  const categoryId = useRatingDetailStore(state => state.categoryId);
  const setCategoryId = useRatingDetailStore(state => state.setCategoryId);
  const selectedCategory = JSON.stringify(CATEGORY_LIST?.find(data => data.id === categoryId));
  const dateRange = useRatingDetailStore(state => state.dateRange);
  const setDateRange = useRatingDetailStore(state => state.setDateRange);

  const isFilterActive =
    roomId !== DEFAULT_ROOM_ID || categoryId !== DEFAULT_CATEGORY_ID || !isSameDateRange(dateRange, DEFAULT_DATE_RANGE);

  const handleRoomChange = (newRoomOption: { title: string; id: string }) => {
    setRoomId(parseInt(newRoomOption.id));
  };

  const handleCategoryChange = (newCategoryOption: { title: string; id: string }) => {
    setCategoryId(parseInt(newCategoryOption.id));
  };

  const setDefaultFilterValue = () => {
    setRoomId(DEFAULT_ROOM_ID);
    setCategoryId(DEFAULT_CATEGORY_ID);
    setDateRange(DEFAULT_DATE_RANGE);
  };

  // FIXME: fetch하는 로직으로 수정하기
  useEffect(() => {
    setTimeout(() => {
      setRoomData(DUMMY_ROOM_LIST);
    }, 100);
  }, []);

  return (
    <Popover>
      <PopoverTrigger
        isActive={isFilterActive}
        icon={
          <LocalIcon
            name="FilterIcon"
            width={24}
            height={24}
          />
        }
        label="옵션 선택"
      />
      <PopoverContent
        headerSlot={
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <LocalIcon
                width={20}
                height={20}
                name="FilterIcon"
              />
              <div className="text-body1 text-text-primary">옵션 선택</div>
            </div>
            <PopoverClose>
              <XIconButton
                variant="ghost"
                className="p-1"
                iconWidth={20}
                iconHeight={20}
              />
            </PopoverClose>
          </div>
        }
        className="w-[310px] desktop:w-[480px]"
        align="start">
        <div className="flex flex-col gap-9 desktop:gap-16">
          <div className="flex flex-col gap-6 desktop:gap-9">
            <div className="flex flex-col gap-6 desktop:flex-row desktop:gap-8">
              <div className="flex flex-col gap-2 desktop:gap-3">
                <div>동/호실</div>
                <Selectbox
                  showIcon
                  lists={roomData}
                  icon="RoomIcon"
                  optionKey="roomName"
                  size="addIconLarge"
                  value={selectedRoom}
                  onChange={newOption => handleRoomChange(newOption)}
                />
              </div>
              <div className="flex flex-col gap-2 desktop:gap-3">
                <div>평가 항목</div>
                <Selectbox
                  showIcon={false}
                  lists={CATEGORY_LIST}
                  icon="RoomIcon"
                  optionKey="category"
                  size="addIconShort"
                  value={selectedCategory}
                  onChange={newOption => handleCategoryChange(newOption)}
                  disableSort
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 desktop:gap-3">
              <div>날짜</div>
              <RatingDetailDateRangePicker
                dateRange={dateRange}
                setDateRange={setDateRange}
              />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-3 desktop:flex-row desktop:gap-8">
            <Button
              onClick={() => setDefaultFilterValue()}
              variant="outline"
              className="h-[48px] w-[200px] flex-grow self-center desktop:h-[54px] desktop:max-w-full">
              옵션 초기화
            </Button>
            <Button className="h-[48px] w-[200px] flex-grow self-center text-white desktop:h-[54px] desktop:max-w-full">
              옵션 적용
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
