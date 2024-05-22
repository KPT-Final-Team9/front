import SingleCategoryHorizontalBarChart from '@chart/bar-chart/SingleCategoryHorizontalBarChart';
import type { Meta, StoryObj } from '@storybook/react';
import ScoreTrendChart from '@chart/line-chart/ScoreTrendChart';

const chartData = [
  { name: '1월', uv: 100 },
  { name: '2월', uv: 82 },
  { name: '3월', uv: 52 },
  { name: '4월', uv: 12 },
  { name: '5월', uv: 62 },
  { name: '6월', uv: 32 },
  { name: '7월', uv: 82 },
  { name: '8월', uv: 52 },
  { name: '9월', uv: 92 },
  { name: '10월', uv: 22 },
  { name: '11월', uv: 82 },
  { name: '12월', uv: 72 },
];

const meta: Meta<typeof ScoreTrendChart> = {
  title: 'chart/ScoreTrendChart',
  component: ScoreTrendChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    chartData: {
      control: 'object',
      description: 'title과 날짜로 이루어진 object[] 입니다',
    },
    dateKey: {
      description: '객체의 날짜의 key값입니다.',
    },
  },
  decorators: [],
};

export default meta;

export const Default: StoryObj<typeof ScoreTrendChart> = {
  args: { chartData: chartData, dateKey: 'name' },
  decorators: [
    Story => (
      <div className="h-[250px] w-[1085px]">
        <Story />
      </div>
    ),
  ],
};
