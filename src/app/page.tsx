import { signOutWithForm } from '@/serverActions/auth';
export default function Home() {
  return (
    <>
      <form
        action={signOutWithForm}
        className="p-16">
        <button className="btn">logout</button>
      </form>
      Hello World!!!!!!!!!!
    </>
  );
}
