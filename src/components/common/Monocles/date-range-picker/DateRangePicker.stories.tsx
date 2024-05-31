import { Meta, StoryObj } from '@storybook/react';
import DateRangePickerComp from '@/components/common/Monocles/date-range-picker/DateRangePicker';

const meta: Meta = {
  title: 'Monocles/DatePicker/DateRangePicker',
  component: DateRangePickerComp,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Popover: StoryObj<typeof DateRangePickerComp> = {
  render: () => <DateRangePickerComp />,
};
