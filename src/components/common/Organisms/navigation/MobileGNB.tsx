'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { LocalIcon } from '@icon/index';
import { Button } from '@/components/ui/button';

// DesktopGNB과 동일하게 작성
export enum NAV_TYPE {
  DASH_BOARD = 'dashboard',
  ROOM_DETAIL = 'room',
  EVALUATION = 'evaluation',
}

export type NavItemsType = Record<
  NAV_TYPE,
  { path: string; label: string; icon: 'NavDashboardIcon' | 'NavRoomIcon' | 'NavRatingDetailIcon' }
>;

const NAV_ITEMS: NavItemsType = {
  [NAV_TYPE.DASH_BOARD]: { path: '/dashboard', label: '대시보드', icon: 'NavDashboardIcon' },
  [NAV_TYPE.ROOM_DETAIL]: { path: '/room', label: '호실관리', icon: 'NavRoomIcon' },
  [NAV_TYPE.EVALUATION]: { path: '/rating-detail', label: '평가상세', icon: 'NavRatingDetailIcon' },
};

export default function MobileGNB() {
  return (
    <nav className="h-gnb fixed bottom-0 left-0 right-0 z-40 border-t border-stroke bg-white px-7 desktop:hidden">
      <NavListComp />
    </nav>
  );
}

// 클릭시 scale 효과 적용(내계정 버튼과 효과 통일함)
function NavListComp() {
  const pathname = usePathname();
  const navListActive = 'fill-primary text-primary';

  return (
    <ul className="h-gnb flex min-w-[320px] items-center justify-between gap-7 text-body5">
      {Object.keys(NAV_ITEMS).map(key => {
        const item = key as NAV_TYPE;

        return (
          <li
            key={NAV_ITEMS[item].path}
            className="active:scale-[.98]">
            <Link
              href={NAV_ITEMS[item].path}
              className={cn('flex flex-col items-center fill-text-disabled text-text-disabled', {
                [navListActive]: pathname === NAV_ITEMS[item].path,
              })}>
              <LocalIcon
                name={NAV_ITEMS[item].icon}
                width={24}
                height={24}
                className="mb-[6px]"
              />
              {NAV_ITEMS[item].label}
            </Link>
          </li>
        );
      })}
      {/* TODO: 내계정은 로그아웃 기능을 대신하는 버튼이라서 active 상태표시 X, hover 효과만 적용 */}
      <li className="fill-text-disabled text-text-disabled hover:fill-text-secondary hover:text-text-secondary">
        <Button
          variant={'icon'}
          className="flex flex-col items-center gap-y-[6px] px-0 py-0 text-body5">
          <LocalIcon
            name={'NavAccountIcon'}
            width={24}
            height={24}
          />
          내계정
        </Button>
      </li>
    </ul>
  );
}
