import type { Meta, StoryObj } from '@storybook/react';
import HalfCircleProgressBar from '@/components/common/HalfCircleProgressBar';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'ProgressBar/HalfCircles',
  component: HalfCircleProgressBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { type: 'string', description: 'progressbar의 색상을 지정' },
    percent: { type: 'number', description: 'progressbar의 퍼센트' },
  },
} satisfies Meta<typeof HalfCircleProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {
  args: {
    color: '#77d276',
    percent: 70,
  },
};

export const Middle: Story = {
  args: {
    color: '#ffb775',
    percent: 80,
  },
};

export const High: Story = {
  args: {
    color: '#2563eb',
    percent: 100,
  },
};
