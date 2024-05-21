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
    strokeColor: { control: 'color', description: 'stroke color' },
    gradientColor: { control: 'color', description: 'gradient color' },
  },
};

export default meta;

export const Default: StoryObj<typeof GradientChart> = {
  args: {
    strokeColor: '#1D4ED8',
    gradientColor: '#D9E5FF',
  },
};
