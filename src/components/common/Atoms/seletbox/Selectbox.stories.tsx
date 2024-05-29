import { Meta, StoryObj } from '@storybook/react';
import { Selectbox } from '@Atoms/seletbox/Selectbox';

const meta: Meta = {
  title: 'Atoms/SelectBox',
  component: Selectbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ optionKey 변경시 선택창은 빈값으로 보이지만, 셀렉트 박스 클릭하면 변경된 리스트 확인 가능합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { table: { disable: true } },
    lists: { table: { disable: true } },
    optionKey: {
      control: 'select',
      options: ['room', 'buildingName', 'quarter', 'month'],
    },
  },
} satisfies Meta<typeof Selectbox>;

export default meta;

type Story = StoryObj<typeof meta>;

const data = [
  {
    id: 1,
    room: '미왕동 201호',
    buildingName: '현대지식산업센터',
    quarter: '23년 3분기',
    month: '1개월',
  },
  {
    id: 2,
    room: 'E동 801호',
    buildingName: '펜타플렉스메트로',
    quarter: '23년 1분기',
    month: '3개월',
  },
  {
    id: 3,
    room: 'C동 601호',
    buildingName: '미왕빌딩',
    quarter: '24년 4분기',
    month: '12개월',
  },
  {
    id: 4,
    room: 'B동 501호',
    buildingName: '서울숲더스페이스',
    quarter: '24년 1분기',
    month: '24개월',
  },
];

const testFunc = () => {
  console.log('테스트함수');
};

export const Select: Story = {
  args: {
    lists: data,
    optionKey: 'month',
    icon: 'CalendarIcon',
    size: 'addIconShort',
    showIcon: true,
    onChange: testFunc,
  },
};
