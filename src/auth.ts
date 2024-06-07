import NextAuth, { CredentialsSignin, DefaultSession } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { baseApi, basePublicApi } from '@/services/api';
declare module 'next-auth' {
  interface Session {
    accessToken?: string;
    role?: string;
    user: {
      role?: string;
      accessToken?: string;
    } & DefaultSession['user'];
  }

  interface User {
    role?: string;
    accessToken?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role?: string;
    accessToken?: string;
  }
}

interface CredentialsType {
  account?: string;
  password: string;
  role: string;
  phoneNumber?: string;
}
const ERROR_MESSAGE = 'User not found.';

export const {
  handlers,
  signIn,
  signOut,
  auth,
  unstable_update: update, //Beta!!
} = NextAuth({
  providers: [
    Credentials({
      authorize: async credentials => {
        const userInfo = credentials as unknown as CredentialsType;
        try {
          // 번호가 있으면 회원가입으로 간주
          if (!userInfo.phoneNumber) {
            return await _signIn('sign-in', userInfo);
          }
          return await _signIn('sign-up', userInfo);
        } catch (error) {
          throw error;
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24, // 세션 만료 시간(sec)
  },
  pages: {
    signIn: '/login',
  },
  callbacks: {
    jwt: async ({ token, user, trigger, session }) => {
      // console.log('token', token, 'user', user, 'trigger', trigger, 'sessionr', session);
      if (user) {
        token = { ...token, ...user };
      }
      return token;
    },
    session: async ({ session, token, user }) => {
      // console.log(session, token, user);
      session.accessToken = token.accessToken;
      session.role = token.role;

      return session;
    },
  },
});

async function _signIn(
  type: 'sign-up' | 'sign-in',
  userInfo: { account?: string; password: string; role: string; phoneNumber?: string },
) {
  const { account, password, role, phoneNumber } = userInfo;
  console.log('역할이 있어요', account, password, role, phoneNumber, type, `/public-api/${type}/${role}`);
  try {
    const res = await baseApi(`/public-api/${type}/${role}`, {
      cache: 'no-store',
      method: 'POST',
      body: JSON.stringify({
        email: account,
        password: password,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      console.log(data);
      return data;
    } else {
      const errorMessage = await res.text();
      throw new Error(errorMessage);
    }
  } catch (error) {
    console.error('인증 에러:', error);
    const errorMessage = error instanceof Error ? error.message : ERROR_MESSAGE;
    throw new Error(errorMessage);
  }
}
