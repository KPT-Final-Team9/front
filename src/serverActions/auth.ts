'use server';
import { auth, signIn, signOut, update } from '@/auth';
import { redirect } from 'next/navigation';
import { AuthInputId } from '@/constants/index';

interface CustomError extends Error {
  cause?: {
    err?: {
      message?: string;
    };
  };
}

export const signInWithCredentials = async (formData: any, redirectUrl?: string | null) => {
  try {
    await signIn('credentials', {
      role: formData.role,
      [AuthInputId.PhoneNumber]: formData.phoneNumber || '',
      [AuthInputId.Account]: formData.account || '',
      [AuthInputId.Password]: formData.password || '',
      redirect: false, // BUG: 리디렉션 false안하면 에러반환하는 오류존재
    });
  } catch (error) {
    const customError = error as CustomError;
    const errorMessage = customError?.cause?.err?.message || 'Unknown error occurred';
    return {
      message: errorMessage,
    };
  }
  // 리디렉션
  if (redirectUrl) {
    redirect(redirectUrl);
  }
  redirect('/');
};

export const signOutWithForm = async (formData: FormData) => {
  await signOut();
};

export { auth, update };
