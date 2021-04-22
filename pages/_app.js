import '../styles/globals.css';
import '../styles/skills_view.css';
import '../styles/footer_style.scss';
import React from 'react';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/jsx-props-no-spreading,react/jsx-filename-extension
  return <Component {...pageProps} />;
}

export default MyApp;
