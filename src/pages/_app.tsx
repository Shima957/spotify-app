import type { AppProps } from 'next/app';
import '../style/tailwind.css';
import { SessionProvider } from 'next-auth/react';

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  return (
    <SessionProvider session={session}>
      <div className="h-screen bg-slate-200">
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
};

export default MyApp;
