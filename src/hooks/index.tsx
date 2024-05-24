import { useEffect, useState } from 'react';

interface UseMediaQueryProps {
  defaultSize: number;
  changedSize: number;
}

export const UseMediaQuery = ({ defaultSize, changedSize }: UseMediaQueryProps) => {
  const BREAK_POINT = '(min-width: 430px)';
  const [size, setSize] = useState(defaultSize);

  useEffect(() => {
    // 브라우저 환경에서만 실행
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia(BREAK_POINT);

      // 브레이크 포인트에 따라 사이즈를 설정하는 함수
      const handleBreakpointChange = () => {
        if (mediaQuery.matches) {
          setSize(defaultSize); // 브레이크 포인트 이상일 때
        } else {
          setSize(changedSize); // 브레이크 포인트 미만일 때
        }
      };

      handleBreakpointChange();
      mediaQuery.addEventListener('change', handleBreakpointChange);

      return () => {
        mediaQuery.removeEventListener('change', handleBreakpointChange);
      };
    }
  }, []);

  return size;
};
