'use client';
import React, { Suspense, useEffect, useLayoutEffect, useState } from 'react';
import { NotiBellButton } from '@Atoms/buttons/NotiBellButton';
import { Selectbox } from '@Atoms/seletbox/Selectbox';
import { LocalIcon } from '@icon/index';
import { cn } from '@/lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { baseApis } from '@/services/api';
import { useUpdateUrlWithQuery } from '@/hooks/index';
import { QueryOptions } from '@/constants/index';
import { Search } from 'lucide-react';

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
  const searchParams = useSearchParams();
  console.log(searchParams.toString());
  const navListActive = 'box-border text-text-primary after:bg-primary';
  return (
    <ul className={cn('nav-li hidden flex-row items-center gap-4 text-body1 desktop:flex', GNB_HEIGHT)}>
      {Object.keys(NAV_ITEMS).map(key => {
        const item = key as NAV_TYPE;
        return (
          <Link
            href={{ pathname: NAV_ITEMS[item].path, query: searchParams.toString() }}
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

interface BuildingData {
  id: number;
  buildingName: string;
}

// 서버에서 받아온 데이터 -> state -> url(push) -> 전체 리렌더링

// 1. url -> state -> 렌더링
// 2. url 없는 경우 -> default state -> 렌더링
// 1. url -> state -> 렌더링
// 2. url 없는 경우 -> server에서 데이터를 가지고 오고 default setState -> 렌더링

// 1. url에 (buildingId) -> state -> 렌더링
// 2. url 없는 경우 (buildingId가 undefined 인 경우) -> server에서 데이터를 가지고 오고 default setState -> 렌더링

// 1. url이 없다 : undefined -> 기본 값 렌더링
// 2. url이 있다 : url에 들어있는 buildingId -> 해당 buildingId 렌더링

// 렌더링 최적화를 위해 분리
function SelectBoxComp() {
  const { pushUrlWithQuery } = useUpdateUrlWithQuery();
  const [selectBuildingOptions, setSelectBuildingOptions] = useState([{ name: '-', id: 1 }]);
  // TODO: 선택된 빌딩 전역 상태로 추가하기
  const [currentSelectBuilding, setCurrentSelectBuilding] = useState<number | undefined>(undefined);
  const selectedBuilding = JSON.stringify(selectBuildingOptions.find(data => data.id === currentSelectBuilding));

  const handleBuildingChange = (newOption: { title: string; id: string }) => {
    setCurrentSelectBuilding(parseInt(newOption.id));
    pushUrlWithQuery({
      queryString: `?${QueryOptions.Id}=${newOption.id}&${QueryOptions.BuildingName}=${newOption.title}`,
    });
  };

  async function fetchData() {
    const fetchInstance = await baseApis();
    const response = await fetchInstance(`/buildings`, {
      cache: 'no-store',
      method: 'GET',
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('데이터를 가져오지 못했습니다.');
    }
  }

  useEffect(() => {
    const loadBuildingData = async () => {
      try {
        const data = await fetchData();
        setSelectBuildingOptions(data);
        pushUrlWithQuery({
          queryString: `?${QueryOptions.Id}=${data[0]?.id}&${QueryOptions.BuildingName}=${data[0]?.name}`,
        });
      } catch (error) {
        setSelectBuildingOptions([{ name: '-', id: 1 }]);
      }
    };
    loadBuildingData();
  }, []);

  return (
    <Selectbox
      optionKey="name"
      icon="BuildingIcon"
      showIcon={true}
      value={selectedBuilding}
      onChange={newOption => handleBuildingChange(newOption)}
      lists={selectBuildingOptions}
      size={'addIconShort'}
    />
  );
}
