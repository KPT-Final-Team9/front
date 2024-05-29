'use client';

import { useRouter } from 'next/navigation';
import { LocalIcon } from '@icon/index';

export default function SurveyHeader() {
  const router = useRouter();

  return (
    <>
      <header className="relative flex h-[44px] w-full items-center justify-between bg-slate-100">
        <div className="absolute left-0 flex items-center p-4">
          <button
            type="button"
            onClick={() => router.back()}>
            <LocalIcon
              name={'ArrowLeftIcon'}
              width={24}
              height={24}
              className="fill-text-primary "
            />
          </button>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <span className="flex shrink-0 items-center text-h4">내 호실 평가하기</span>
        </div>
      </header>
    </>
  );
}
