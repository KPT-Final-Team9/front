import { Meta, StoryObj } from '@storybook/react';
import { AvatarProfile } from '@Atoms/avatar/AvatarProfile';

const meta: Meta = {
  title: 'Atoms/Avatar/AvatarProfile',
  component: AvatarProfile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AvatarProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imgSrc: '',
  },
};

export const Profile: Story = {
  args: {
    imgSrc: 'https://buly.kr/44vYw4N',
  },
};
