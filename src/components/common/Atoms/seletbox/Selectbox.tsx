'use client';

import { useState } from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@Atoms/seletbox/CustomSelect';
import { LocalIcon } from '@icon/index';
import { BuildingSelectboxProps } from '@/types/common/selectbox';
import sortedLists from '@/lib/sortedLists';

export function Selectbox({ lists, optionKey, size, icon, showIcon, onChange }: BuildingSelectboxProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const getSelectBoxOptions = lists.map(item => ({ id: item.id, [optionKey]: item[optionKey] }));

  // FIXME: API 형식에 따라 함수 수정 필요
  const sortedData = sortedLists(getSelectBoxOptions, optionKey);

  const isShowIcon = showIcon ? '' : 'hidden';

  return (
    <Select
      value={sortedData[0][optionKey] as string}
      onOpenChange={setIsOpen}
      onValueChange={onChange}>
      <SelectTrigger
        isOpen={isOpen}
        size={`${size}`}>
        <div className="flex items-center gap-3 truncate">
          <div className={`${isShowIcon}`}>
            <LocalIcon
              width={20}
              height={20}
              name={`${icon}`}
              className="fill-text-primary desktop:h-[24px] desktop:w-[24px]"
            />
          </div>
          <div className="truncate">
            <SelectValue />
          </div>
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {sortedData.map(item => (
            <SelectItem
              key={item.id}
              value={item[optionKey] as string}
              size={`${size}`}>
              {item[optionKey]}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
