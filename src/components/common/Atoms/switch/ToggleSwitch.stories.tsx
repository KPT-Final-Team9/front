'use client';
import { Meta, StoryObj } from '@storybook/react';
import ToggleSwitch from '@Atoms/switch/ToggleSwitch';
import { useState } from '@storybook/preview-api';

const meta: Meta = {
  title: 'atoms/ToggleSwitch',
  component: ToggleSwitch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ToggleSwitch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Switch: Story = {
  render: function Render(args) {
    const [isActive, setIsActive] = useState<boolean>(false);

    const handleToggleChange = () => {
      setIsActive(!isActive);
    };
    return (
      <ToggleSwitch
        isActive={isActive}
        handleToggleChange={handleToggleChange}
      />
    );
  },
};
