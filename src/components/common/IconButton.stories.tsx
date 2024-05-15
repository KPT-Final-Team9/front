import type { Meta, StoryObj } from '@storybook/react';
import IconButton from './IconButton';
import { XIcon } from '@/components/icon/Icons';
import React from 'react';

const meta: Meta<typeof IconButton> = {
  title: 'Button/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;

export const Default: StoryObj<typeof IconButton> = {
  args: {
    children: <XIcon />,
    onClick: () => {
      console.log('hi');
    },
  },
};
