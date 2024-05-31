import { Meta, StoryObj } from '@storybook/react';
import { Popover as PopoverComp } from '@/components/ui/popover';
import PopoverTrigger from './PopoverTrigger';
import PopoverContent from './PopoverContent';
import { LocalIcon } from '@icon/index';

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
      <PopoverTrigger
        icon={
          <LocalIcon
            width={20}
            height={20}
            name="FilterIcon"
          />
        }
        label="Trigger"
      />
      <PopoverContent headerSlot={<div>header test</div>}>Popover Content 테스트</PopoverContent>
    </PopoverComp>
  ),
};
