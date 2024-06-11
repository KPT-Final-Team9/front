import { Meta, StoryObj } from '@storybook/react';
import BlackTooltipContentComp from './BlackTooltipContent';
import { Tooltip, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const meta: Meta = {
  title: 'Atoms/Tooltip/BlackTooltip',
  component: BlackTooltipContentComp,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const BlackTooltip: StoryObj<typeof BlackTooltipContentComp> = {
  args: {
    title: '툴팁 제목 테스트',
  },
  render: args => {
    return (
      <TooltipProvider>
        <Tooltip open>
          <TooltipTrigger>
            <div>hover me</div>
          </TooltipTrigger>
          <BlackTooltipContentComp {...args}>
            <div>툴팁 내용 테스트</div>
          </BlackTooltipContentComp>
        </Tooltip>
      </TooltipProvider>
    );
  },
};
