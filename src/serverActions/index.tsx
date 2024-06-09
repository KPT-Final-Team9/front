'use server';
import { auth } from '@/auth';
import { CustomSession } from '@/types/auth';

export async function wait(duration = 1000): Promise<{ message: string }> {
  console.log('Run wait function');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ message: `waited for ${duration}` });
    }, duration);
  });
}

// 클라이언트 사이드에서 auth 정보 취득용
export async function getAuth() {
  const a = (await auth()) as CustomSession;
  console.log(a);
  return (await auth()) as CustomSession;
}
