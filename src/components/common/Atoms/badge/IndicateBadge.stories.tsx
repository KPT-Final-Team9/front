import IndicateBadge from '@Atoms/badge/IndicateBadge';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/Badge/IndicateBadge',
  component: IndicateBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text', description: 'text 내용' },
    type: {
      control: 'select',
      options: ['default', 'rent', 'contract', 'empty'],
    },
  },
} satisfies Meta<typeof IndicateBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: '다른호실',
    type: 'default',
  },
};

export const Empty: Story = {
  args: {
    text: '현재',
    type: 'empty',
  },
};

export const Rent: Story = {
  args: {
    text: '현재',
    type: 'rent',
  },
};

export const Contract: Story = {
  args: {
    text: '현재',
    type: 'contract',
  },
};
