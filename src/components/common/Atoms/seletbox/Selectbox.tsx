'use client';
import { useEffect, useRef, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@Atoms/seletbox/CustomSelect';
import { LocalIcon } from '@icon/index';
import { BuildingSelectboxProps, DummyDataProps } from '@/types/common/selectbox';

export function Selectbox({ lists, optionKey, size, icon, showIcon, onChange }: BuildingSelectboxProps) {
  const [buildingList, setBuildingList] = useState<DummyDataProps[] | undefined>(undefined);
  const [currentOption, setCurrentOption] = useState('');
  const isShowIcon = showIcon ? '' : 'hidden';

  // 문자열 정렬
  useEffect(() => {
    const sortList = lists.slice().sort((a, b) => a[optionKey]?.localeCompare(b[optionKey]));
    setBuildingList(sortList);
  }, [lists]);

  // default value 설정
  useEffect(() => {
    if (buildingList?.length) {
      setCurrentOption(`{"title": "${buildingList[0][optionKey].toString()}", "id": "${buildingList[0].id}"}`);
    }
  }, [buildingList]);

  return (
    <Select
      value={currentOption}
      defaultValue="-"
      onValueChange={value => {
        console.log(JSON.parse(value));
        console.log(value);
        setCurrentOption(value);
        onChange(JSON.parse(value));
      }}>
      <SelectTrigger size={size}>
        <div className="flex items-center gap-3 truncate">
          <div className={`${isShowIcon}`}>
            <LocalIcon
              width={20}
              height={20}
              name={icon}
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
          {buildingList?.map(item => (
            <SelectItem
              key={item.id}
              value={`{"title": "${item[optionKey].toString()}", "id": "${item.id}"}`}
              size={`${size}`}>
              {item[optionKey]}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
