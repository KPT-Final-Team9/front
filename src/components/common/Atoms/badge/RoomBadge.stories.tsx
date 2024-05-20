import RoomBadge from '@Atoms/badge/RoomBadge';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/Badge/RoomBadge',
  component: RoomBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    roomName: { control: 'text', description: 'text 내용' },
  },
} satisfies Meta<typeof RoomBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    roomName: '미왕빌딩 A동 201호',
  },
};
