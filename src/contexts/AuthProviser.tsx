'use client';
// import AuthUserSateCheckProvider from '@/context/AuthUserSateCheckProvider';
import { SessionProvider } from 'next-auth/react';
import { useSession, signOut } from 'next-auth/react';
import { useEffect } from 'react';
import dayjs from 'dayjs';
// import { decodedJWT } from '@/utils/decodeJWT';

function AuthUserStateCheck({ children }) {
  const { data, status } = useSession();

  useEffect(() => {
    // 세션 만료 체크 로직
    const handleSessionExpiration = () => {
      //   const expire = data?.user?.exp;
      //   const currentTime = dayjs().unix();
      // JWT로부터 만료 시간을 추출합니다.
      //   const cookieUserExp = decodedJWT(data?.user.token)?.exp;
      // 만료되었는지 확인합니다.
      //   const shouldSignOut = status === 'authenticated' && expire && cookieUserExp - currentTime < 0;
      //   if (shouldSignOut) {
      //     alert('세션이 만료되어 로그인이 해제됩니다.');
      //     signOut();
      //   }
    };

    handleSessionExpiration();
  }, [data, status]);

  return <>{children}</>;
}

export default function AuthProvider({ children, session }) {
  return (
    <SessionProvider session={session}>
      <AuthUserStateCheck>{children}</AuthUserStateCheck>
    </SessionProvider>
  );
}
