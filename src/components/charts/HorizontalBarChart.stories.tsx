import type { Meta, StoryObj } from '@storybook/react';
import HorizontalBarChart from '@chart/HorizontalBarChart';

const chartData = [{ name: 'January', rent: 100, price: 20 }];

const meta: Meta<typeof HorizontalBarChart> = {
  title: 'chart/HorizontalBarChart',
  component: HorizontalBarChart,
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
    accentColor: {
      control: 'color',
    },
  },
};

export default meta;

export const Default: StoryObj<typeof HorizontalBarChart> = {
  args: { chartData: chartData, accentColor: '#6bb9d1' },
  decorators: [
    Story => (
      <div className="h-[200px]">
        <Story />
      </div>
    ),
  ],
};
