import React from 'react';
import { BlueLineComponent } from './BlueLineComponent';
import ComponentLayout from './layouts/ComponentLayout';

export const FooterComponent = React.memo(() => (
  <ComponentLayout>
    <footer>
      <p>
        Designed & Built By
        <strong> Yazan Tarifi</strong>
      </p>
      <p>Personal Website (CV , Portfolio) Created At 2021</p>
    </footer>
    <BlueLineComponent />
  </ComponentLayout>
));
