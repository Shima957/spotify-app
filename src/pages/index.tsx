import type { NextPage } from 'next';
import NextLink from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <NextLink href="/login">
        <a className="bg-[#1DB954] text-white text-lg py-2 px-6 rounded-full">
          Login
        </a>
      </NextLink>
    </div>
  );
};

export default Home;
