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
import { BuildingSelectboxProps } from '@/types/common/selectbox';
import sortedLists from '@/lib/sortedLists';

export function QuarterSelectbox({ lists, onChange }: BuildingSelectboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  const sortedData = sortedLists(lists, 'quarter');
  return (
    <Select
      defaultValue={sortedData[0].quarter}
      onOpenChange={setIsOpen}
      onValueChange={onChange}>
      <SelectTrigger
        isOpen={isOpen}
        size={'quarter'}>
        <div className="flex items-center gap-3 truncate">
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
              value={item.quarter}
              size={'quarter'}>
              {item.quarter}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
