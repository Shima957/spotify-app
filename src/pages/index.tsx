import { useSession } from 'next-auth/react';
import LoginButton from '../components/LoginButton';
import SignOut from '../components/SignOut';

const Home = () => {
  const { status: authState } = useSession();

  return (
    <div className="h-screen flex justify-center items-center">
      {authState === 'unauthenticated' && <LoginButton />}
      {authState === 'authenticated' && <SignOut />}
    </div>
  );
};

export default Home;
