import { Meta, StoryObj } from '@storybook/react';
import { Popover as PopoverComp } from '@/components/ui/popover';
import DatePickerComp from '@Monocles/date-picker/DatePicker';
import PopoverTrigger from '@Monocles/popover-trigger/PopoverTrigger';
import { LocalIcon } from '@icon/index';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';
import { addDays } from 'date-fns';

const meta: Meta = {
  title: 'Monocles/DatePicker/DatePicker',
  component: DatePickerComp,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const DatePicker: StoryObj<typeof DatePickerComp> = {
  render: () => {
    const [date, setDate] = useState<DateRange | undefined>({
      from: new Date(2024, 4, 20),
      to: addDays(new Date(2024, 4, 20), 7),
    });

    const onDateChange = (newDateRange: DateRange | undefined) => {
      console.log(newDateRange);
      setDate(newDateRange);
    };

    return (
      <PopoverComp>
        <PopoverTrigger
          icon={
            <LocalIcon
              width={20}
              height={20}
              name="CalendarIcon"
            />
          }
          label="Trigger"
          className="px-4 py-2"
        />
        <DatePickerComp
          mode="range"
          selected={date}
          onSelect={onDateChange}
          numberOfMonths={1}
        />
      </PopoverComp>
    );
  },
};
