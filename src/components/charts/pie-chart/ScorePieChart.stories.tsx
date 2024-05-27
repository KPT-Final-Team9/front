import { Meta, StoryObj } from '@storybook/react';
import ScorePieChart from '@chart/pie-chart/ScorePieChart';

const meta: Meta = {
  title: 'chart/PieChart',
  component: ScorePieChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScorePieChart>;

export default meta;

type Story = StoryObj<typeof meta>;

const dummyData = [
  { name: '시설 점수', value: 45 },
  { name: '관리 점수', value: 80 },
  { name: '민원 점수', value: 30 },
];

export const PieChartCustom: Story = {
  render: args => <ScorePieChart scoreData={dummyData} />,
  args: {},
};
