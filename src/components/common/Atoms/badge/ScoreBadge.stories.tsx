import ScoreBadge from '@Atoms/badge/ScoreBadge';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/Badge/ScoreBadge',
  component: ScoreBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', description: 'text 내용' },
    type: {
      control: 'select',
      options: ['management', 'facility', 'claim'],
    },
  },
} satisfies Meta<typeof ScoreBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '보통 수준',
    type: 'management',
  },
};

export const Claim: Story = {
  args: {
    children: '보통 수준',
    type: 'claim',
  },
};

export const Facility: Story = {
  args: {
    children: '보통 수준',
    type: 'facility',
  },
};
