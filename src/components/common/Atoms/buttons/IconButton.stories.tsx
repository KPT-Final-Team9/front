import { XIconButton } from '@Atoms/buttons/IconButtons';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Atoms/Button/IconButton',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const XButton: StoryObj<typeof XIconButton> = {
  args: {
    onClick: () => {
      console.log('hi');
    },
  },
  render: ({ ...args }) => <XIconButton {...args} />,
};
