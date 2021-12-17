import { signIn } from 'next-auth/react';

const SignIn = () => {
  return (
    <button
      className="bg-[#1DB954] text-white text-md rounded-full py-2 px-6 drop-shadow-xl hover:bg-[#1a9c48] duration-200"
      onClick={() => signIn('spotify', { callbackUrl: '/' })}
    >
      Sign in with Spotify
    </button>
  );
};

export default SignIn;
