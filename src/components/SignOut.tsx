import { signOut } from 'next-auth/react';

const SignOut = () => {
  return (
    <button
      className="bg-[#1DB954] text-white text-md py-2 px-6 rounded-full"
      onClick={() => signOut()}
    >
      Sign out
    </button>
  );
};

export default SignOut;
