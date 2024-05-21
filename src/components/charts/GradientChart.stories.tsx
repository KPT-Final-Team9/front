import GradientChart from '@/components/charts/GradientChart';
import type { Meta, StoryObj } from '@storybook/react';

const chartData = [
  {
    month: 'Jan',
    score: 40,
  },
  {
    month: 'Fed',
    score: 30,
  },
  {
    month: 'Mar',
    score: 20,
  },
  {
    month: 'Apr',
    score: 40,
  },
  {
    month: 'Jun',
    score: 18,
  },
  {
    month: 'Jul',
    score: 23,
  },
  {
    month: 'Aug',
    score: 34,
  },
  {
    month: 'Sep',
    score: 40,
  },
  {
    month: 'Oct',
    score: 30,
  },
  {
    month: 'Nov',
    score: 20,
  },
  {
    month: 'Dec',
    score: 27,
  },
];

const meta: Meta<typeof GradientChart> = {
  title: 'chart/GradientChart',
  component: GradientChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',

      month: {
        control: 'string',
        description: 'month',
      },
      score: {
        control: 'number',
        description: 'score',
      },
    },
    strokeColor: { control: 'color', description: 'stroke color' },
    gradientColor: { control: 'color', description: 'gradient color' },
  },
};

export default meta;

export const Default: StoryObj<typeof GradientChart> = {
  args: {
    strokeColor: '#1D4ED8',
    gradientColor: '#D9E5FF',
    data: chartData,
  },
};
