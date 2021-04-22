import React from 'react';
import PortfolioContainer from './PortfolioContainer';
import ToolbarComponent from '../ToolbarComponent';
import FooterComponent from '../FooterComponent';

export default function PersonalPagesComponent({ children }) {
  return (
    <PortfolioContainer>
      <ToolbarComponent />
      {children}
      <FooterComponent />
    </PortfolioContainer>
  );
}
