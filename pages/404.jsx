import React from 'react';
import { PersonalPagesViewComponent } from '../components/layouts/PersonalPagesComponent';

export default function NotFoundPageComponent() {
  return (
    <PersonalPagesViewComponent>
      <div className="NotFoundContainer">
        <div className="Content">
          <h1>404</h1>
          <p>Page Not Found</p>
        </div>
      </div>
    </PersonalPagesViewComponent>
  );
}
