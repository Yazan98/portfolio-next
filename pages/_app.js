import '../styles/globals.scss';
import '../styles/skills_view.css';
import '../styles/footer_style.scss';
import '../styles/projects.scss';
import '../styles/about.scss';
import '../styles/not_found.scss';
import '../styles/all_projects.scss';
import '../styles/tools.scss';
import React from 'react';
import ThemeContext, { getSavedTheme } from '../info/ThemeState';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <ThemeContext.Provider value={getSavedTheme()}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}

export default MyApp;
