import React from 'react';
import MyRoomScoreClientComp from '@/app/(after-login)/room/@Overview/_component/MyRoomScoreClientComp';

// 레이아웃 시프트를 최소화하기 위헤 서버 컴포넌트와 클라이언트 컴포넌트를 분리함.
export default function MyRoomScoreServerComp() {
  return (
    // 모바일에서 height도 변경될 수 있을 것 같아서 class 분리해둠.
    <div className="flex h-[175px] w-full flex-col gap-1 rounded-container bg-primary px-6 py-4 desktop:h-[175px] desktop:w-[264px]">
      <h4 className="text-h4 text-white">내호실 점수</h4>
      <MyRoomScoreClientComp />
    </div>
  );
}
