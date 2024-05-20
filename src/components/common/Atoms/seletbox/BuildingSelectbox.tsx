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

export function BuildingSelectbox({ lists, onChange }: BuildingSelectboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  const sortedLists = lists.sort((a, b) => (a.buildingName < b.buildingName ? -1 : 0));

  return (
    <Select
      defaultValue={sortedLists[0].buildingName}
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
          {sortedLists.map(item => (
            <SelectItem
              key={item.id}
              value={item.buildingName}>
              {item.buildingName}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
