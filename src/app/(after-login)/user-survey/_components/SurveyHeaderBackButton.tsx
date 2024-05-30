'use client';

import { useRouter } from 'next/navigation';
import { LocalIcon } from '@icon/index';

export default function SurveyHeaderBackButton() {
  const router = useRouter();

  return (
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
  );
}
