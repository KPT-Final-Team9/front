import GradientChart from '@/components/charts/GradientChart';
import type { Meta, StoryObj } from '@storybook/react';

const refData = [{ name: 'Page', rent: 100, diff: 40.5 }];

const meta: Meta<typeof GradientChart> = {
  title: 'chart/GradientChart',
  component: GradientChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text', description: 'label의 내용' },
  },
};

export default meta;

export const Default: StoryObj<typeof GradientChart> = {
  args: { text: '차트' },
};
