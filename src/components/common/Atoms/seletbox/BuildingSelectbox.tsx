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

export function BuildingSelectbox({ lists, onChange }: BuildingSelectboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  const sortedData = sortedLists(lists, 'buildingName');

  return (
    <Select
      defaultValue={sortedData[0].buildingName}
      onOpenChange={setIsOpen}
      onValueChange={onChange}>
      <SelectTrigger
        isOpen={isOpen}
        size={'building'}>
        <div className="flex items-center gap-3 truncate">
          <div>
            <LocalIcon
              width={20}
              height={20}
              name="BuildingIcon"
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
              value={item.buildingName}
              size={'building'}>
              {item.buildingName}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
