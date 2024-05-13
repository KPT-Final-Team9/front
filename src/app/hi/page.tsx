'use client';

import { useEffect, useLayoutEffect } from 'react';

export default function Page() {
  const fetchData = async () => {
    try {
      const response = await fetch('https://example.com/user');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };
  useEffect(() => {
    fetchData();
  });
  return (
    <div>
      <div className="text-filed">
        <p className="text-base font-bold">pretendard 안녕하세요 123</p>
      </div>

      <p className="">pretendard 안녕하세요 123</p>
      <p className="font-roboto">roboto 안녕하세요 123</p>
      <p className="font-notoSansKr">notoSansKr 안녕하세요 123</p>
      <button onClick={fetchData}>hi</button>
    </div>
  );
}
