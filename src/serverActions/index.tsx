'use server';

export async function wait(duration = 1000): Promise<{ message: string }> {
  console.log('Run wait function');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ message: `waited for ${duration}` });
    }, duration);
  });
}
