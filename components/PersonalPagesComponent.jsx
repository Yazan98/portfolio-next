import React from 'react';
import PortfolioContainer from './PortfolioContainer';
import ToolbarComponent from './ToolbarComponent';

export default function PersonalPagesComponent({ children }) {
  return (
    <PortfolioContainer>
      <ToolbarComponent />
      {children}
    </PortfolioContainer>
  );
}
