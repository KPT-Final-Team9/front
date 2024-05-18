import { Meta, StoryObj } from '@storybook/react';
import { NextIconButton } from '@Atoms/buttons/NextIconButton';

const meta: Meta = {
  title: 'Atoms/Button/NextIconButton',
  component: NextIconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    shape: {
      control: 'select',
      options: ['circle', 'square'],
    },
  },
} satisfies Meta<typeof NextIconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NextIconButtonCircle: Story = {
  args: {
    shape: 'circle',
  },
};

export const NextIconButtonSquare: Story = {
  args: {
    shape: 'square',
  },
};
