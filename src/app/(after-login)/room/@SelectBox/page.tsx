'use client';
import { Selectbox } from '@Atoms/seletbox/Selectbox';

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

// TODO:form 으로 wrap 해서 action으로 서버 액션 보내서 상태 변경하거나 클라이언트 사이드로 분리하기.
export default function Page() {
  return (
    <div className="flex gap-4 pt-8">
      <Selectbox
        icon="RoomIcon"
        lists={data}
        optionKey={'room'}
        onChange={() => {}}
        size="addIconLarge"
        showIcon={true}
      />

      <Selectbox
        icon="CalendarIcon"
        lists={data}
        optionKey={'month'}
        onChange={() => {}}
        size="addIconLarge"
        showIcon={true}
      />
    </div>
  );
}
