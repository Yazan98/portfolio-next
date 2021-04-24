import React from 'react';
import PortfolioContainer from './PortfolioContainer';
import { FooterComponent } from '../FooterComponent';
import { ToolbarViewComponent } from '../ToolbarComponent';

export default function PersonalPagesComponent({ children }) {
  return (
    <PortfolioContainer>
      <ToolbarViewComponent />
      {children}
      <FooterComponent />
    </PortfolioContainer>
  );
}

export const PersonalPagesViewComponent = React.memo(PersonalPagesComponent);
