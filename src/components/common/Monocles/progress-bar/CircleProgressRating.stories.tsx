import CircleProgressRating from '@Monocles/progress-bar/CircleProgressRating';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Monocles/ProgressBar/Circles',
  component: CircleProgressRating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { type: 'string', description: 'progressbar의 색상을 지정' },
    percent: { type: 'number', description: 'progressbar의 퍼센트' },
  },
} satisfies Meta<typeof CircleProgressRating>;

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
