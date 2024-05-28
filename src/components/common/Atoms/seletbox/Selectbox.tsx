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

  // FIXME: optionKey를 바꾸면 브라우저에서 렌더링될 때 trigger에서 변경된 defaultValue가 바로 반영안되고 빈값으로 렌더링되는 이슈(SelectContent는 제대로 반영됨)
  return (
    <Select
      defaultValue={sortedData[0][optionKey] as string}
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
