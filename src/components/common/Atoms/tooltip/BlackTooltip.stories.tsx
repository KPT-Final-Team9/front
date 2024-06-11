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
  args: {},
  render: args => {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div>hover me</div>
          </TooltipTrigger>
          <BlackTooltipContentComp>Tooltip</BlackTooltipContentComp>
        </Tooltip>
      </TooltipProvider>
    );
  },
};
