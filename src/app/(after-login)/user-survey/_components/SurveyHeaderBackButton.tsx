'use client';

import { useRouter } from 'next/navigation';
import { LocalIcon } from '@icon/index';

export default function SurveyHeaderBackButton({ searchParams }: { searchParams: string | null }) {
  // 뒤로가기 기능을 구현하려면 useRouter 사용이 필요하여 client 컴포넌트를 분리함.
  const router = useRouter();
  const isSearchParams = !searchParams;
  const showButton = searchParams === 'done';

  const handleRoute = () => {
    isSearchParams ? router.replace('/user-survey') : router.back();
  };

  return (
    <>
      {!showButton ? (
        <button
          type="button"
          onClick={handleRoute}>
          <LocalIcon
            name={'ArrowLeftIcon'}
            width={24}
            height={24}
            className="fill-text-primary"
          />
        </button>
      ) : (
        <div className="h-6 w-6 bg-white"></div>
      )}
    </>
  );
}
