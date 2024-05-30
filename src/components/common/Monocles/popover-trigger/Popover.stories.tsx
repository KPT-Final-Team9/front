import { Meta, StoryObj } from '@storybook/react';
import { Popover as PopoverComp } from '@/components/ui/popover';
import PopoverTrigger from './PopoverTrigger';
import PopoverContent from './PopoverContent';

const meta: Meta = {
  title: 'Atoms/Popover/Popover',
  component: PopoverComp,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Popover: StoryObj<typeof PopoverComp> = {
  render: ({ ...args }) => (
    <PopoverComp>
      <PopoverTrigger>Popover Trigger</PopoverTrigger>
      <PopoverContent>Popover Content 테스트</PopoverContent>
    </PopoverComp>
  ),
};
