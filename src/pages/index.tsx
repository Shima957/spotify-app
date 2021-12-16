import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import LoginButton from '../components/LoginButton';
import SignOut from '../components/SignOut';

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <div className="h-screen flex justify-center items-center">
      {!session && <LoginButton />}
      {session && <SignOut />}
    </div>
  );
};

export default Home;
