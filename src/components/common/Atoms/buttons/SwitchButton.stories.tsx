import { Meta, StoryObj } from '@storybook/react';
import SwitchButtonComp from '@/components/common/Atoms/buttons/SwitchButton';
import { LocalIcon } from '@icon/index';

const meta: Meta = {
  title: 'Atoms/Button/SwitchButton',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const SwitchButton: StoryObj<typeof SwitchButtonComp> = {
  args: {
    icon: <LocalIcon name="TotalIcon" />,
    label: '버튼 테스트',
    isActive: false,
    onClick: () => {
      if (!window) return;
      alert('스위치 버튼 클릭됨');
    },
  },
  render: ({ ...args }) => <SwitchButtonComp {...args} />,
};
