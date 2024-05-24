import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './progress';

interface CustomProgressProps {
  indicatorColor?: string | null | undefined;
  value?: number | null | undefined;
  className?: string;
}
const examProgress = ({ value, indicatorColor, className }: CustomProgressProps) => {
  return (
    <Progress
      value={value}
      indicatorColor={indicatorColor}
      className={className}
    />
  );
};

const meta = {
  title: 'ui/ProgressBar/Progress',
  component: examProgress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: { type: 'number', description: 'progressbar의 값' },
    indicatorColor: { type: 'string', description: 'progressbar의 tailwind color' },
  },
} satisfies Meta<typeof examProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EvaluationGradient100: Story = {
  args: {
    value: 100,
    className: 'h-[16px] ',
    indicatorColor: 'evaluation-gradient',
  },
  decorators: [
    Story => (
      <div className="w-[500px]">
        <Story />
      </div>
    ),
  ],
};

export const EvaluationGradient60: Story = {
  args: {
    value: 60,
    className: 'h-[16px] ',
    indicatorColor: 'evaluation-gradient',
  },
  decorators: [
    Story => (
      <div className="w-[500px]">
        <Story />
      </div>
    ),
  ],
};

export const EvaluationGradient20: Story = {
  args: {
    value: 20,
    className: 'h-[16px] ',
    indicatorColor: 'evaluation-gradient',
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

export const SlashProgress: Story = {
  args: {
    value: 60,

    className: 'slash-progress',
  },
  decorators: [
    Story => (
      <div className="w-[500px]">
        <Story />
      </div>
    ),
  ],
};
