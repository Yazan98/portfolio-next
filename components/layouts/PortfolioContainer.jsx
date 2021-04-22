import Head from 'next/head';
import React from 'react';

export default function PortfolioContainer({ children }) {
  return (
    <div className="Container">
      <Head>
        <title>Yazan Tarifi - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  );
}
