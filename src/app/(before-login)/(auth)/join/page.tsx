'use client';

import { z } from 'zod';
import { SubmitHandler } from 'react-hook-form';
import { signInWithCredentials } from '@/serverActions/auth';
import TabsContainer from '@/app/(before-login)/(auth)/_components/TabsContainer';
import AuthLayout from '@/app/(before-login)/(auth)/_components/AuthLayout';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { FormInput } from '@/types/auth';
import { UserRole } from '@/constants';
import { AuthInputId } from '@/constants/index';
const LOGIN_INPUT = [
  {
    title: '이메일',
    placeholder: '이메일',
    id: AuthInputId.Account,
    type: 'email',
  },
  {
    title: '비밀번호',
    placeholder: '비밀번호',
    id: AuthInputId.Password,
    type: 'password',
  },
  {
    title: '전화번호',
    placeholder: '전화번호 (010-0000-0000)',
    id: AuthInputId.PhoneNumber,
    type: 'text',
  },
];
const SIGN_Up_TABS = [
  {
    title: '입주자',
    value: UserRole.User,
    inputs: LOGIN_INPUT,
  },
  {
    title: '소유자',
    value: UserRole.Owner,
    inputs: LOGIN_INPUT,
  },
];

const phoneRegex = new RegExp(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/);
const userSchema = z.object({
  account: z
    .string()
    .min(1, { message: '이 입력란은 필수입니다.' })
    .email({ message: '유효한 이메일 주소를 입력하세요.' }),

  password: z
    .string()
    .min(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.' })
    .max(16, { message: '비밀번호는 최대 16자 를 넘을 수 없습니다.' })
    .regex(/[a-z]/, { message: '비밀번호는 최소 하나의 소문자를 포함해야 합니다.' })
    .regex(/[0-9]/, { message: '비밀번호는 최소 하나의 숫자를 포함해야 합니다.' }),
  phoneNumber: z.string().regex(phoneRegex, { message: '올바른 형식의 번호를 입력해주세요' }),

  // .regex(/[@$!%*?&]/, { message: '비밀번호는 최소 하나의 특수 문자를 포함해야 합니다.' }), // 에바인거같아서 뺌
});

export default function Page() {
  // 현재 로그인 탭 role
  const [tabState, setTabState] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');

  const handleSignUp: SubmitHandler<FormInput> = async data => {
    console.log(callbackUrl);
    setIsLoading(true);
    const req = {
      ...data,
      role: tabState,
    };
    console.log(req);
    const message = await signInWithCredentials(req, callbackUrl);
    if (message) {
      alert(message?.message);
    }

    setIsLoading(false);
  };

  return (
    <AuthLayout>
      <TabsContainer
        zodSchema={userSchema}
        onHandleSubmit={handleSignUp}
        tabs={SIGN_Up_TABS}
        setTabState={setTabState}
        isLoading={isLoading}
      />
    </AuthLayout>
  );
}
