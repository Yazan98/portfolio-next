import React from 'react';
import Image from 'next/Image';
import ComponentLayout from './layouts/ComponentLayout';
import { getProfileInfo } from '../info/ProfileInformation';

export default function PageHeaderComponent() {
  return (
    <ComponentLayout>
      <div className="PageHeaderComponent">
        <div className="Description">
          <div className="Content">
            <p className="SubTitle">{getProfileInfo().SmallDescription}</p>
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

            <div className="Buttons">
              <a className="HeaderButton" href="https://www.github.com/Yazan98">Github</a>
              <a className="HeaderButton Button2" href="/resume">Resume</a>
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
          </div>
        </div>
        <div className="Image">
          <Image loading="eager" src="/header.png" alt="Header" width="711.2px" height="468.3px" priority="2" />
        </div>
      </div>
    </ComponentLayout>
  );
}

export const PageHeaderViewComponent = React.memo(PageHeaderComponent);
