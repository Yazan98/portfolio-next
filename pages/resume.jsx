import React from 'react';
import { PersonalPagesViewComponent } from '../components/layouts/PersonalPagesComponent';

export default function ResumeComponent() {
  return (
    <PersonalPagesViewComponent>
      <div className="ResumeContainer">
        <div className="HeaderContainer">
          <p>Software Engineer</p>
          <h2>Yazan Tarifi</h2>
        </div>
        <div className="FlexLinks">
          <div className="Item">
            <img src="/email.svg" loading="eager" alt="Email" width="30px" height="30px" />
            <p>yazantarifi98@gmail.com</p>
          </div>
          <div className="Item">
            <img src="/pin.svg" loading="eager" alt="Email" width="30px" height="30px" />
            <p>Amman , Jordan</p>
          </div>
          <div className="Item">
            <img src="/phone.svg" loading="eager" alt="Email" width="30px" height="30px" />
            <p>+962780132297</p>
          </div>
          <div className="Item">
            <img src="/website.svg" loading="eager" alt="Email" width="30px" height="30px" />
            <p>yazantarifi.com</p>
          </div>
          <div className="Item">
            <img src="/github.svg" loading="eager" alt="Email" width="30px" height="30px" />
            <p>Yazan98</p>
          </div>
        </div>

      </div>
    </PersonalPagesViewComponent>
  );
}
