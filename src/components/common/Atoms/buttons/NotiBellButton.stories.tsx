import { XIconButton } from '@Atoms/buttons/IconButtons';
import { NotiBellButton } from '@Atoms/buttons/NotiBellButton';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Atoms/Button/NotiBellButton',
  component: NotiBellButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    notificationCount: {
      control: 'number',
    },
  },
};

export default meta;

export const NoNotifications: StoryObj<typeof NotiBellButton> = {
  args: {
    notificationCount: 0,
  },
};

export const FewNotifications: StoryObj<typeof NotiBellButton> = {
  args: {
    notificationCount: 12,
  },
};

export const ManyNotifications: StoryObj<typeof NotiBellButton> = {
  args: {
    notificationCount: 100,
  },
};
