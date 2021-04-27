import React from 'react';
import Head from 'next/head';
import PortfolioContainer from './PortfolioContainer';
import { FooterComponent } from '../FooterComponent';
import { ToolbarViewComponent } from '../ToolbarComponent';

export default function PersonalPagesComponent({ children, title }) {
  return (
    <PortfolioContainer>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToolbarViewComponent />
      {children}
      <FooterComponent />
    </PortfolioContainer>
  );
}

export const PersonalPagesViewComponent = React.memo(PersonalPagesComponent);
