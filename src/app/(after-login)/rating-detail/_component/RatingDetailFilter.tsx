'use client';
import { Button, buttonVariants } from '@/components/ui/button';
import { Popover } from '@/components/ui/popover';
import { Selectbox } from '@Atoms/seletbox/Selectbox';
import PopoverContent from '@Monocles/popover-trigger/PopoverContent';
import PopoverTrigger from '@Monocles/popover-trigger/PopoverTrigger';
import { LocalIcon } from '@icon/index';
import React from 'react';

export default function RatingDetailFilter() {
  return (
    <Popover>
      <PopoverTrigger
        isHiddenOnMobile
        label="옵션 선택"
        icon={
          <LocalIcon
            width={24}
            height={24}
            name="FilterIcon"
          />
        }
      />
      <PopoverContent
        className="w-[300px] desktop:w-[480px]"
        align="start">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-8 desktop:flex-row">
              <div className="flex flex-col gap-2 desktop:gap-3">
                <div>동/호실</div>
                <Selectbox
                  showIcon
                  lists={[
                    { id: 0, roomName: 'test1' },
                    { id: 1, roomName: 'test2' },
                  ]}
                  icon="RoomIcon"
                  optionKey="roomName"
                  size="addIconLarge"
                  onChange={selectedRoom => {
                    alert('호실 변경');
                  }}
                />
              </div>
              <div className="flex flex-col gap-2 desktop:gap-3">
                <div>평가 항목</div>
                <Selectbox
                  showIcon={false}
                  lists={[
                    { id: 0, category: '시설 평가' },
                    { id: 1, category: '관리 평가' },
                    { id: 2, category: '민원 평가' },
                  ]}
                  icon="RoomIcon"
                  optionKey="category"
                  size="addIconShort"
                  onChange={selectedRoom => {
                    alert('평가 항목 변경');
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 desktop:gap-3">
              <div>날짜</div>
              <Selectbox
                showIcon
                lists={[
                  { id: 0, date: 'test1' },
                  { id: 1, date: 'test2' },
                ]}
                icon="CalendarIcon"
                optionKey="date"
                size="addIconShort"
                onChange={selectedDate => {
                  alert('날짜 변경');
                }}
              />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-3 desktop:flex-row desktop:gap-8">
            <Button
              variant="outline"
              className="w-[200px] flex-grow self-center desktop:max-w-full">
              옵션 초기화
            </Button>
            <Button className="w-[200px] flex-grow self-center text-white desktop:max-w-full">옵션 적용</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
