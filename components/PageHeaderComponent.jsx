import React from 'react';
import Image from 'next/image';
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
          </div>
        </div>
        <div className="Image">
          <Image src="/header.png" alt="Header Image" width="508" height="335" />
        </div>
      </div>
    </ComponentLayout>
  );
}
