import SingleCategoryHorizontalBarChart from '@chart/bar-chart/SingleCategoryHorizontalBarChart';
import type { Meta, StoryObj } from '@storybook/react';

const chartData = [
  { name: 'Page', rent: 100, diff: 40.5 },
  { name: 'Page', rent: 100, diff: 40.5 },
  { name: 'Page', rent: 100, diff: 40.5 },
];

const meta: Meta<typeof SingleCategoryHorizontalBarChart> = {
  title: 'chart/SingleCategoryVerticalBarChart',
  component: SingleCategoryHorizontalBarChart,
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

export const Default: StoryObj<typeof SingleCategoryHorizontalBarChart> = {
  args: { chartData: chartData, categoryKey: 'name' },
};
