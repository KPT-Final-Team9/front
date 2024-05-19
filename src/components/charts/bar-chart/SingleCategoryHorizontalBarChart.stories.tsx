import SingleCategoryVerticalBarChart from '@chart/bar-chart/SingleCategoryVerticalBarChart';
import { Meta, StoryObj } from '@storybook/react';

const chartData = [{ name: 'January', rent: 100, price: 20 }];

const meta: Meta<typeof SingleCategoryVerticalBarChart> = {
  title: 'chart/SingleCategoryHorizontalBarChart',
  component: SingleCategoryVerticalBarChart,
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

export const Default: StoryObj<typeof SingleCategoryVerticalBarChart> = {
  args: { chartData: chartData, categoryKey: 'name' },
  decorators: [
    Story => (
      <div className="h-[200px]">
        <Story />
      </div>
    ),
  ],
};
