import type { Meta, StoryObj } from '@storybook/react';
import MainVerticalBarChart from '@/components/charts/MainVerticalBarChart';
const refData = [{ name: 'Page', rent: 100, diff: 40.5 }];

const meta: Meta<typeof MainVerticalBarChart> = {
  title: 'chart/MainVerticalBarChart',
  component: MainVerticalBarChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    chartData: {
      control: 'object',

      rent: {
        control: 'number',
        description: 'Rent value',
      },
      diff: {
        control: 'number',
        description: 'Difference value',
      },
    },
  },
};

export default meta;

export const Default: StoryObj<typeof MainVerticalBarChart> = {
  args: { chartData: refData },
};
