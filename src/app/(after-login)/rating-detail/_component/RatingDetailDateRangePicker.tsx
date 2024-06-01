'use client';
import { formatDateToYYYY_MM_DD } from '@/utils';
import DatePicker from '@Monocles/date-picker/DatePicker';
import { LocalIcon } from '@icon/index';
import { Popover } from '@/components/ui/popover';
import React from 'react';
import PopoverTrigger from '@Monocles/popover-trigger/PopoverTrigger';
import { useRatingDetailStore } from '../_store';

export default function RatingDetailDateRangePicker() {
  const dateRange = useRatingDetailStore(state => state.dateRange);
  const setDateRange = useRatingDetailStore(state => state.setDateRange);

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
        className="px-4 py-2"
      />
      <DatePicker
        mode="range"
        selected={dateRange}
        onSelect={setDateRange}
        numberOfMonths={1}
      />
    </Popover>
  );
}
