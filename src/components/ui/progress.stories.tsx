import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './progress';

interface CustomProgressProps {
  indicatorColor?: string | null | undefined;
  value?: number | null | undefined;
  indicatorInlineColor?: string | null | undefined;
}
const examProgress = ({ indicatorInlineColor, value, indicatorColor }: CustomProgressProps) => {
  return (
    <Progress
      value={value}
      indicatorColor={indicatorColor}
      indicatorInlineStyle={{ backgroundColor: indicatorInlineColor }}
    />
  );
};

const meta = {
  title: 'Common/ProgressBar/CommonBarProgress',
  component: examProgress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: { type: 'number', description: 'progressbar의 값' },
    indicatorInlineColor: { control: 'color', description: '인라인 스타일 조정기' },
    indicatorColor: { type: 'string', description: 'progressbar의 tailwind color' },
  },
} satisfies Meta<typeof examProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 60,
    indicatorColor: 'bg-blue-300',
  },
  decorators: [
    Story => (
      <div className="w-[500px]">
        <Story />
      </div>
    ),
  ],
};

export const Gradient: Story = {
  args: {
    value: 80,
    indicatorColor: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ',
  },
  decorators: [
    Story => (
      <div className="w-[500px]">
        <Story />
      </div>
    ),
  ],
};

export const Gradient2: Story = {
  args: {
    value: 80,
    indicatorColor: 'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%',
  },
  decorators: [
    Story => (
      <div className="w-[500px]">
        <Story />
      </div>
    ),
  ],
};

export const Gradient3: Story = {
  args: {
    value: 80,
    indicatorColor: 'bg-gradient-to-r from-cyan-500 to-blue-500',
  },
  decorators: [
    Story => (
      <div className="w-[500px]">
        <Story />
      </div>
    ),
  ],
};
