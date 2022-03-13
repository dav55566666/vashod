import '../styles/globals.css'
import Head from 'next/head';
import React from 'react';
import '../styles/_app.scss';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta
        name="description"
        content="InvestKz"
        key="description"
      />
      <meta property="og:title" content="InvestKz" key="og:title" />
      <meta
        property="og:description"
        content="InvestKz"
        key="og:description"
      />
      <title>InvestKz</title>
      <link rel="stylesheet" href="/fonts/fonts.css" />
      <link rel="stylesheet" href="/fonts/fonts.css" />
      <link href="https://fonts.googleapis.com/css2?family=Commissioner:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    </Head>

    <Component {...pageProps} />
  </>
}

export default MyApp
