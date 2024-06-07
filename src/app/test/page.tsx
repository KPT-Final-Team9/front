import { useSession } from 'next-auth/react';
import { auth } from '@/auth';
import { CustomSession } from '@/types/auth';
export default async function Page() {
  try {
    const userInfo = (await auth()) as CustomSession;
    console.log(userInfo);
    // const res = await axios.get('http://localhost:3000/api/mock');
    // console.log(res);

    // 이부분에서 세션을 가져오지 못하는 문제가 있습니다.
    // 문제는 여기가 아니라 return fetch 라이브러리나
    // @/contexts/AuthProvider 쪽에있는 useSession 쪽에서 문제가 발생하는 것 같습니다

    const { data: session, status } = useSession();
    console.log('session');
    console.log(session);
    if (status === 'authenticated') {
      return <p>Signed in as {session.user.email}</p>;
    }

    return <div>{/* <p>{res.data.hello}</p> */}</div>;
  } catch (err) {
    err;
  }
}
