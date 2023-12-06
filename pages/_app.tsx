import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import wrapper from '../store/configure';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>Next Tweet</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(App);
