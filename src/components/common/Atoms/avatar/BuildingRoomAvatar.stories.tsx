import { Meta, StoryObj } from '@storybook/react';
import { BuildingRoomAvatar } from '@Atoms/avatar/BuildingRoomAvatar';

const meta: Meta = {
  title: 'Atoms/Avatar/BuildingRoomAvatar',
  component: BuildingRoomAvatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    idx: { table: { disable: true } }, // prop을 테이블에서 숨김
  },
} satisfies Meta<typeof BuildingRoomAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = [
  { id: 1, room: '101' },
  { id: 2, room: '204' },
  { id: 3, room: '305' },
  { id: 4, room: '402' },
];

export const Icon: Story = {
  render: args => (
    <div className="flex gap-3">
      {data.map((list, idx) => (
        <BuildingRoomAvatar
          key={list.id}
          idx={idx}
          {...args}
        />
      ))}
    </div>
  ),
  args: {},
};
