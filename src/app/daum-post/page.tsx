'use client';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';

export default function Page() {
  const [a, b] = useState(false);
  const completeHandler = (data: any) => {
    b(false);
    console.log(data);
  };
  return (
    <div>
      {a && (
        <div className={cn({ visible: a, invisible: !a })}>
          <DaumPostcode
            style={{ width: '100%', height: '100vh' }}
            className="h-[100vh]"
            onComplete={completeHandler}
            autoClose={false}
          />
        </div>
      )}

      <button onClick={() => b(!a)}>hi</button>
    </div>
  );
}
