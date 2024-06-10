'use client';
import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import SurveyHeaderBackButton from '@/app/(after-login)/user-survey/_components/SurveyHeaderBackButton';

export default function SurveyHeader() {
  const [pathValue, setPathValue] = useState('');
  const pathname = usePathname();
  const searchParams = useSearchParams().get('id');

  useEffect(() => {
    if (!searchParams) {
      setPathValue('내 호실 평가하기');
    } else if (searchParams === 'manage') {
      setPathValue('관리 평가');
    } else if (searchParams === 'facility') {
      setPathValue('시설 평가');
    } else if (searchParams === 'complaint') {
      setPathValue('민원 평가');
    } else {
      setPathValue('');
    }
  }, [pathname, searchParams]);

  return (
    <>
      <header className="relative flex h-[44px] w-full items-center justify-between bg-white">
        <div className="absolute inset-y-0 left-0 flex items-center px-4">
          <SurveyHeaderBackButton searchParams={searchParams} />
        </div>

        <div className="flex flex-1 items-center justify-center">
          <span className="inset-y-0 flex shrink-0 items-center text-h4">{pathValue}</span>
        </div>
      </header>
    </>
  );
}
