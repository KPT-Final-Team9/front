import { signOutWithForm } from '@/serverActions/auth';
export default function Home() {
  return (
    <>
      <form action={signOutWithForm}>
        <button>logout</button>
      </form>
      Hello World!!!!!!!!!!
    </>
  );
}
