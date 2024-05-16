'use client';

import { tree } from 'next/dist/build/templates/app-page';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import DaumPostcode from 'react-daum-postcode';

export default function Page() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const completeHandler = (data: any) => {
    console.log(data);
    router.push('/daum-post');
  };
  const visibleClass = isVisible ? 'visible' : 'invisible';
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className={visibleClass}>
      <button
        onClick={() => {
          setIsVisible(false);
          router.push('/daum-post');
        }}>
        닫기
      </button>
      <DaumPostcode
        style={{ width: '100%', height: '100vh' }}
        className="h-[100vh]"
        onComplete={completeHandler}
        autoClose={false}
      />
    </div>
  );
}
