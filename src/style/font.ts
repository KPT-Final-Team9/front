import { Roboto, Noto_Sans_KR } from 'next/font/google';

// NOTE: next/font 는 사용하지 않으면
export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-roboto',
});

export const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '400', '700', '900'],
  variable: '--font-notoSansKr',
});
