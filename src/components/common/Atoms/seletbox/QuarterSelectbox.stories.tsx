import { Meta, StoryObj } from '@storybook/react';
import { QuarterSelectbox } from '@Atoms/seletbox/QuarterSelectbox';

const meta: Meta = {
  title: 'Atoms/SelectBox/QuarterSelectbox',
  component: QuarterSelectbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { table: { disable: true } },
  },
} satisfies Meta<typeof QuarterSelectbox>;

export default meta;

type Story = StoryObj<typeof meta>;

const data = [
  {
    id: 1,
    room: 'Q동 201호',
    buildingName: '미왕빌딩',
    quarter: '1분기',
  },
  {
    id: 2,
    room: 'E동 801호',
    buildingName: '가산드림타워',
    quarter: '2분기',
  },
  {
    id: 3,
    room: 'C동 601호',
    buildingName: '더스카이밸리1차',
    quarter: '3분기',
  },
  {
    id: 4,
    room: 'B동 501호',
    buildingName: '서울숲더스페이스',
    quarter: '4분기',
  },
];

const testFunc = () => {
  console.log('테스트함수');
};

export const QuarterSelect: Story = {
  render: args => (
    <QuarterSelectbox
      lists={data}
      onChange={testFunc}
    />
  ),
  args: {},
};
