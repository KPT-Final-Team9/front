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
export function NotiBellButton({ notificationCount = 0, ...props }: { notificationCount?: number }) {
  const displayCount = notificationCount >= 100 ? '99+' : notificationCount;

  return (
    <div className="relative flex h-[40px] w-[40px] items-center">
      <Button
        {...props}
        variant={'icon'}
        className="m-0 p-0">
        <LocalIcon
          name="BellIcon"
          className="h-[21px] w-[21px] desktop:h-[32px] desktop:w-[32px]"
        />
      </Button>
      {notificationCount > 0 && (
        <span className="absolute bottom-5 left-2 min-w-[24px] rounded-3xl bg-[#FF4848] text-center text-[10px] leading-[13px] text-white desktop:bottom-[30px] desktop:left-3 desktop:min-w-[30px] desktop:text-[12px]">
          {displayCount}
        </span>
      )}
    </div>
  );
}
