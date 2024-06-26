import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { auth } from '@/auth';
import { match } from 'path-to-regexp';
import { CustomSession } from '@/types/auth';

const matchersForAuth = [
  // '/dashboard/:path*', // '/dashboard', '/dashboard/1', '/dashboard/1/2'
  '/myaccount/:path+', // '/myaccount/1', '/myaccount/1/2/3'
  '/dashboard/:path*', // '/dashboard', '/dashboard
  '/settings/:path', // '/settings/1'
  '/user-survey',
  '/user-survey/scores', // '/user-survey/scores', '/user-survey/scores?id=manage&num={scoreId}', '/user-survey/scores?id=done'
];

const secret = process.env.AUTH_SECRET as string;
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // AuthJS JWE 토큰.
  const token = await getToken({
    req: request,
    secret,
    salt: process.env.NODE_ENV === 'production' ? '__Secure-authjs.session-token' : 'authjs.session-token',
    raw: true,
  });

  // 유저 정보
  const userInfo = (await auth()) as CustomSession;

  // 임시로 유저 정보없을시 인증로직 이동을 위해 대시보드로 이동
  // TODO: 이후 랜딩페이지 제작시 해당 로직 제거
  if (!userInfo && pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // user role 이 소유자고 / 일때 dashboard로 리디렉션
  if (userInfo && userInfo.role === 'OWNER' && pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // 유저토큰 없을시 join으로 리디렉션
  if (isMatch(pathname, matchersForAuth)) {
    return userInfo
      ? NextResponse.next()
      : // 이전 url 위치 기억
        NextResponse.redirect(new URL(`/login?callbackUrl=${request.url}`, request.url));
  }

  // 유저토큰 있을시 로그인,회원가입 이동 차단
  if (pathname.startsWith('/login') || pathname.startsWith('/join')) {
    if (userInfo) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }
}

export const config = {
  matcher: ['/', '/login', '/join', ...matchersForAuth],
};

function isMatch(pathname: string, urls: string[]) {
  return urls.some(url => !!match(url)(pathname));
}
