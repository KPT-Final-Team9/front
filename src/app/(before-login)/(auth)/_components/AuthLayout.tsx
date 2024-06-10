import React from 'react';
import { LocalIcon } from '@icon/index';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  let title;
  switch (pathname) {
    case '/join':
      title = '회원가입';
      break;
    case '/login':
      title = '로그인';
      break;
    default:
      title = '';
  }
  return (
    <div className="flex h-full flex-col items-center justify-center gap-16">
      <div className="flex flex-col items-center justify-center gap-7">
        {/* TODO: 추후 랜딩페이지로 연결하거나 루트페이지로 이동 */}
        <Link href={'/'}>
          <LocalIcon
            className="h-[81px] w-[156px]"
            name={'OfficenerMainLogo'}
          />
        </Link>
        <h1 className="text-h2">{title}</h1>
      </div>
      {children}
    </div>
  );
}
