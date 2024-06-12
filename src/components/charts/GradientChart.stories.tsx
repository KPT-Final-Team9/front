import GradientChart from '@/components/charts/GradientChart';
import type { Meta, StoryObj } from '@storybook/react';

const chartData = [
  {
    selected_month: 'Jan',
    total_avg: 40,
  },
  {
    selected_month: 'Fed',
    total_avg: 30,
  },
  {
    selected_month: 'Mar',
    total_avg: 20,
  },
  {
    selected_month: 'Apr',
    total_avg: 40,
  },
  {
    selected_month: 'Jun',
    total_avg: 18,
  },
  {
    selected_month: 'Jul',
    total_avg: 23,
  },
  {
    selected_month: 'Aug',
    total_avg: 34,
  },
  {
    selected_month: 'Sep',
    total_avg: 40,
  },
  {
    selected_month: 'Oct',
    total_avg: 30,
  },
  {
    selected_month: 'Nov',
    total_avg: 20,
  },
  {
    selected_month: 'Dec',
    total_avg: 27,
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

      selected_month: {
        control: 'string',
        description: 'selected_month',
      },
      total_avg: {
        control: 'number',
        description: 'total_avg',
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
