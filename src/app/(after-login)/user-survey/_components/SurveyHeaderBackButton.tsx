'use client';

import { useRouter } from 'next/navigation';
import { LocalIcon } from '@icon/index';

export default function SurveyHeaderBackButton() {
  // 뒤로가기 기능을 구현하려면 useRouter 사용이 필요하여 client 컴포넌트를 분리함.
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}>
      <LocalIcon
        name={'ArrowLeftIcon'}
        width={24}
        height={24}
        className="fill-text-primary"
      />
    </button>
  );
}
