import { Meta, StoryObj } from '@storybook/react';
import { Popover as PopoverComp, PopoverContent } from '@/components/ui/popover';
import DateInputComp from '@Monocles/date-input/DateInput';
import DateInputAtomComp from '@Monocles/date-input/DateInputAtom';
import PopoverTrigger from '@Monocles/popover-trigger/PopoverTrigger';
import { LocalIcon } from '@icon/index';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';
import { addMonths } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { formatDateToYYYY_MM_DD } from '@/utils';

const meta: Meta = {
  title: 'Monocles/DatePicker/DateInput',
  component: DateInputComp,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    hiddenPreset: {
      control: 'boolean',
    },
  },
};

export default meta;

export const DatePicker: StoryObj<typeof DateInputComp> = {
  args: {
    hiddenPreset: false,
  },
  render: args => {
    const [date, setDate] = useState<DateRange | undefined>({
      from: addMonths(new Date(), -1),
      to: new Date(),
    });

    const onDateChange = (newDateRange: DateRange | undefined) => {
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
          label={
            <div>
              {formatDateToYYYY_MM_DD(date?.from)} ~ {formatDateToYYYY_MM_DD(date?.to)}
            </div>
          }
          className="px-4 py-2"
        />
        <PopoverContent
          className="flex w-fit flex-col px-2 py-2"
          align="start">
          <DateInputComp
            {...args}
            mode="range"
            selected={date}
            onSelect={onDateChange}
            numberOfMonths={1}
          />
        </PopoverContent>
      </PopoverComp>
    );
  },
};

export const TestDateInput: StoryObj = {
  render: () => {
    const [date, setDate] = useState<DateRange | undefined>();
    return (
      <Calendar
        mode="range"
        selected={date}
        onSelect={setDate}
      />
    );
  },
};

export const DateInputAtom: StoryObj = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>();
    return (
      <DateInputAtomComp
        mode="single"
        selected={date}
        onSelect={setDate}
      />
    );
  },
};
