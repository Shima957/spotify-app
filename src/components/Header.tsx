import { useSession } from 'next-auth/react';
import SignIn from './SignIn';
import SignOut from './SignOut';

const Header = () => {
  const { status: authState } = useSession();

  return (
    <div className="bg-black p-4">
      {authState === 'unauthenticated' && <SignIn />}
      {authState === 'authenticated' && <SignOut />}
    </div>
  );
};

export default Header;
