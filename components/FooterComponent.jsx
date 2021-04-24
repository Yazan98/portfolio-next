import React from 'react';
import ComponentLayout from './layouts/ComponentLayout';
import { BlueLineComponent } from './BlueLineComponent';

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
