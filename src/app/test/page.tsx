import { useSession } from 'next-auth/react';
import { auth } from '@/auth';
import { CustomSession } from '@/types/auth';
export default async function Page() {
  try {
    const userInfo = (await auth()) as CustomSession;
    console.log(userInfo);
    // const res = await axios.get('http://localhost:3000/api/mock');
    // console.log(res);
    const { data: session, status } = useSession();
    if (status === 'authenticated') {
      return <p>Signed in as {session.user.email}</p>;
    }
    console.log(session);
    console.log('session');
    return <div>{/* <p>{res.data.hello}</p> */}</div>;
  } catch (err) {
    err;
  }
}
