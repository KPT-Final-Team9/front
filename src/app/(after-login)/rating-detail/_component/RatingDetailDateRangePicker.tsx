'use client';
import { formatDateToYYYY_MM_DD } from '@/utils';
import DatePicker from '@Monocles/date-picker/DatePicker';
import { LocalIcon } from '@icon/index';
import { Popover, PopoverContent } from '@/components/ui/popover';
import React from 'react';
import PopoverTrigger from '@Monocles/popover-trigger/PopoverTrigger';
import { useRatingDetailStore } from '../_store';
import DateInput from '@Monocles/date-input/DateInput';
import { DateRange } from 'react-day-picker';

export default function RatingDetailDateRangePicker({
  dateRange,
  setDateRange,
}: {
  dateRange: DateRange | undefined;
  setDateRange: (newDateRange: DateRange | undefined) => void;
}) {
  return (
    <Popover>
      <PopoverTrigger
        icon={
          <LocalIcon
            width={20}
            height={20}
            name="CalendarIcon"
          />
        }
        label={`${formatDateToYYYY_MM_DD(dateRange?.from)} ~ ${formatDateToYYYY_MM_DD(dateRange?.to)}`}
        labelClassName="px-2"
        className="w-fit px-4 py-2 text-body4 desktop:text-body1"
      />
      <PopoverContent
        align="start"
        className="w-[254px] p-3 desktop:w-[455px] desktop:p-0">
        <DateInput
          mode="range"
          selected={dateRange}
          onSelect={setDateRange}
          containerClassName="flex flex-col desktop:hidden"
        />
        <DatePicker
          mode="range"
          selected={dateRange}
          onSelect={setDateRange}
          numberOfMonths={1}
          containerClassName="hidden desktop:flex"
        />
      </PopoverContent>
    </Popover>
  );
}
