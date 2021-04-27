import React from 'react';
import ComponentLayout from './layouts/ComponentLayout';
import { getProfileInfo } from '../info/ProfileInformation';
import ToolbarComponent from './ToolbarComponent';

export default function PageHeaderComponent() {
  return (
    <ComponentLayout>
      <div className="PageHeaderComponent">
        <ToolbarComponent />
        <div className="HomeHeaderContainer">
          <div className="HeaderLinks">
            <div className="Content">
              <img src="/github.svg" width="25px" height="25px" loading="eager" />
              <img src="/github.svg" width="25px" height="25px" loading="eager" />
              <img src="/github.svg" width="25px" height="25px" loading="eager" />
              <img src="/github.svg" width="25px" height="25px" loading="eager" />
              <div className="LineContainer">
                <hr width="1" size="100" />
              </div>
            </div>
          </div>
          <div className="Description">
            <div className="Content">
              <p className="SubTitle">Software Engineer</p>
              <label>{getProfileInfo().Name}</label>

              <div className="BigArea">
                <p className="Tags">
                  <div id="Item" className="Circle" />
                  <span id="Item">Android Apps</span>
                  <div id="Item" className="Circle" />
                  <span id="Item">Restful Api</span>
                  <div id="Item" className="Circle" />
                  <span id="Item">Websites</span>
                </p>
                <p className="DescriptionText">{getProfileInfo().Description}</p>
              </div>

              <p className="TechTitle">Few technologies I&apos;ve been working with</p>
              <div className="Technologies">
                <ul className="Technologies">
                  <li>Android - Kotlin</li>
                  <li>React, Next.js</li>
                  <li>Spring Boot</li>
                  <li>Laravel</li>
                  <li>Node.js (Nest)</li>
                  <li>Terminal Tools (Ruby)</li>
                </ul>
              </div>

              <div className="Buttons">
                <a className="HeaderButton" href="https://www.github.com/Yazan98">Github</a>
              </div>
            </div>
          </div>
          <div className="Image">
            <img loading="eager" src="/header.png" alt="Header" width="711.2px" height="468.3px" />
          </div>
        </div>

      </div>
    </ComponentLayout>
  );
}

export const PageHeaderViewComponent = React.memo(PageHeaderComponent);
