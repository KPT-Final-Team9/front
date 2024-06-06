'use client';
import React, { Suspense, useEffect, useState } from 'react';
import { NotiBellButton } from '@Atoms/buttons/NotiBellButton';
import { Selectbox } from '@Atoms/seletbox/Selectbox';
import { LocalIcon } from '@icon/index';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// 해당 상수는 GNB 내부에 있는것이 가독성이 좋아보여 유지.
export enum NAV_TYPE {
  DASH_BOARD = 'dashboard',
  ROOM_DETAIL = 'room',
  EVALUATION = 'evaluation',
}

export type NavItemsType = Record<NAV_TYPE, { path: string; label: string }>;

const NAV_ITEMS: NavItemsType = {
  [NAV_TYPE.DASH_BOARD]: { path: '/dashboard', label: '대시보드' },
  [NAV_TYPE.EVALUATION]: { path: '/room', label: '호실관리' },
  [NAV_TYPE.ROOM_DETAIL]: { path: '/rating-detail', label: '평가상세' },
};
const GNB_HEIGHT = 'desktop:h-gnb h-[68px] ';

export default function DesktopGNB() {
  const [NotibellCount, setNotibellCount] = useState<number | undefined>(undefined);
  useEffect(() => {
    setTimeout(() => {
      // 알람 패치 로직
      setNotibellCount(10);
    }, 100);
  }, []);

  return (
    <>
      <nav
        className={cn(
          'top-0 z-40 hidden w-full border-b-2 border-stroke bg-white p-[16px] desktop:flex desktop:px-5',
          GNB_HEIGHT,
        )}>
        <div className="mx-auto flex h-full w-[1440px] items-center justify-between">
          <div className={cn(' flex items-center gap-4', GNB_HEIGHT)}>
            <LocalIcon
              width={128}
              height={63}
              className=" desktop:w-ful h-[36px] w-[73px] desktop:h-full"
              name={'OfficenerMainLogo'}
            />
            <NavListComp />
          </div>
          <div className="flex items-center gap-16">
            <Suspense>
              <SelectBoxComp />
            </Suspense>

            <div className="inline-flex items-center gap-3">
              <NotiBellButton notificationCount={NotibellCount} />
              <Button variant={'icon'}>
                <LocalIcon
                  name={'UserIcon'}
                  className="hidden h-[40px] w-[40px] desktop:block"
                />
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

function NavListComp() {
  // 경로에따라 li 태그 스타일 조정
  const pathname = usePathname();
  const navListActive = 'box-border text-text-primary after:bg-primary';
  return (
    <ul className={cn('nav-li hidden flex-row items-center gap-4 text-body1 desktop:flex', GNB_HEIGHT)}>
      {Object.keys(NAV_ITEMS).map(key => {
        const item = key as NAV_TYPE;
        return (
          <Link
            href={NAV_ITEMS[item].path}
            key={NAV_ITEMS[item].path}
            className={cn(
              'text-nowrap-white relative box-border flex h-full items-center p-3 text-text-disabled transition-colors after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-[70%] after:-translate-x-1/2 after:transform after:transition-colors after:content-[""] hover:cursor-pointer ',
              {
                [navListActive]: pathname === NAV_ITEMS[item].path,
                'hover:after:bg-blue-200': pathname !== NAV_ITEMS[item].path,
              },
            )}>
            <li>{NAV_ITEMS[item].label}</li>
          </Link>
        );
      })}
    </ul>
  );
}

// 렌더링 최적화를 위해 분리
function SelectBoxComp() {
  const [selectBuilding, setSelectBuilding] = useState([{ buildingName: '-', id: 1 }]);
  // TODO: 선택된 빌딩 전역 상태로 추가하기
  const [currentSelectBuilding, SetCurrentSelectBuilding] = useState('');
  useEffect(() => {
    setTimeout(() => {
      const data = [
        {
          id: 1,
          buildingName: '미왕빌딩',
        },
        {
          id: 2,
          buildingName: '가산드림타워',
        },
        {
          id: 3,
          buildingName: '더스카이밸리1차',
        },
        {
          id: 4,
          buildingName: '서울숲더스페이스',
        },
      ];
      // 데이터가 없다면 기본 '-'로 유지
      if (data) {
        setSelectBuilding(data);
        // 첫 번째 빌딩 이름을 기본값으로 설정
        SetCurrentSelectBuilding(data[0].buildingName);
      }
    }, 1000);
  }, []);
  return (
    <Selectbox
      optionKey="buildingName"
      icon="BuildingIcon"
      showIcon={true}
      onChange={SetCurrentSelectBuilding}
      lists={selectBuilding}
      size={'addIconShort'}
    />
  );
}
