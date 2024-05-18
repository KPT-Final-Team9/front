import React from 'react';
import { Button } from '@/components/ui/button';
import { LocalIcon } from '@icon/index';

/**
 *  알림 개수를 표시하는 벨 아이콘 버튼 컴포넌트
 *
 * @param {{ notificationCount: number }} notificationCount 알림 갯수
 * @param {{}} ...props 추가로 전달할 속성들
 * @returns {*}
 */
export function NotiBellButton({ notificationCount, ...props }: { notificationCount: number }) {
  const displayCount = notificationCount >= 100 ? '99+' : notificationCount;

  return (
    <div className="relative w-fit">
      <Button
        {...props}
        variant={'icon'}
        className="m-0 p-0">
        <LocalIcon
          name="BellIcon"
          width={32}
          height={32}
        />
      </Button>
      {notificationCount > 0 && (
        <span className="absolute bottom-8 left-3 min-w-[30px] rounded-3xl bg-[#FF4848;] text-center text-[12px] leading-4 text-white">
          {displayCount}
        </span>
      )}
    </div>
  );
}
