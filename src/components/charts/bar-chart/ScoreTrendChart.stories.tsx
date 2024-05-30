import { Meta, StoryObj } from '@storybook/react';
import ScoreTrendChart from '@chart/bar-chart/ScoreTrendChart';

const data = [
  { name: '2021 Q1', uv: 100, pv: 20 },
  { name: '2021 Q2', uv: 10, pv: 20 },
  { name: '2021 Q3', uv: 10, pv: 20 },
  { name: '2021 Q4', uv: 10, pv: 20 },
  { name: '2021 Q1', uv: 10, pv: 20 },
  { name: '2021 Q2', uv: 10, pv: 20 },
  { name: '2021 Q3', uv: 10, pv: 20 },
  { name: '2021 Q4', uv: 10, pv: 20 },
  { name: '2021 Q1', uv: 20, pv: 20 },
  { name: '2021 Q2', uv: 10, pv: 20 },
  { name: '2021 Q3', uv: 10, pv: 20 },
  { name: '2021 Q4', uv: 10, pv: 20 },
];

const quarterData = [
  { name: '2021 Q1', uv: 100, pv: 20 },
  { name: '2021 Q2', uv: 10, pv: 20 },
  { name: '2021 Q3', uv: 10, pv: 20 },
  { name: '2021 Q4', uv: 10, pv: 20 },
];

const meta: Meta<typeof ScoreTrendChart> = {
  title: 'chart/ScoreTrendBarChart',
  component: ScoreTrendChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const Default: StoryObj<typeof ScoreTrendChart> = {
  args: { chartData: data, categoryKey: 'name', myRoomKey: 'uv', otherRoomKey: 'pv' },
  decorators: [
    Story => (
      <div className="h-[150px] w-[150px]">
        <Story />
      </div>
    ),
  ],
};
export const Quarter: StoryObj<typeof ScoreTrendChart> = {
  args: { chartData: quarterData, categoryKey: 'name', myRoomKey: 'uv', otherRoomKey: 'pv', accentColor: '#487cee' },
  decorators: [
    Story => (
      <div className="h-[150px] w-[150px]">
        <Story />
      </div>
    ),
  ],
};
