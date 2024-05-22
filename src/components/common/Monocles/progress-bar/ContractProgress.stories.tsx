import type { Meta, StoryObj } from '@storybook/react';
import { ContractProgress } from '@Monocles/progress-bar/ContractProgress';

const meta = {
  title: 'Monocles/ProgressBar/ContractProgress',
  component: ContractProgress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: { type: 'number' },
  },
} satisfies Meta<typeof ContractProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: 30,
  },
  decorators: [
    Story => (
      <div className="w-[591px]">
        <Story></Story>
      </div>
    ),
  ],
};
