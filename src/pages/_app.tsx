import type { AppProps } from 'next/app';
import '../style/tailwind.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
