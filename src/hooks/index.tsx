import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

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

// ?로 시작하는 쿼리스트링을 받아서 현재 주소에서 해당 쿼리스트링을 포함한 주소로 이동하는 훅
export const useUpdateUrlWithQuery = () => {
  const router = useRouter();
  const pathname = usePathname();

  const pushUrlWithQuery = ({ queryString }: { queryString: string }) => {
    const newUrl = `${pathname}${queryString}`;
    router.push(newUrl);
  };

  return { pushUrlWithQuery };
};
