import type { AppProps } from 'next/app';
import '../style/tailwind.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="h-screen bg-slate-200">
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
