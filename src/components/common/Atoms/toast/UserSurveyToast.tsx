'use client';

import { useEffect } from 'react';
import { LocalIcon } from '@icon/index';

export default function ToastMessage({
  firstMessage,
  secondMessage,
  setToast,
}: {
  firstMessage: string;
  secondMessage?: string;
  setToast: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);

  return (
    <div className="toast absolute bottom-32 flex w-full min-w-0 flex-row p-0">
      <div className="alert flex justify-start rounded-desktop-stroke bg-[#3B82F6] text-body1 text-white">
        <div className="flex items-center gap-3 text-wrap break-all">
          <div className="flex-none">
            <LocalIcon
              name={'DangerTriangle'}
              width={24}
              height={24}
            />
          </div>
          <div className="grow text-left">
            {firstMessage} <br /> {secondMessage}
          </div>
        </div>
      </div>
    </div>
  );
}
