import React from 'react';

const ThemeContext = React.createContext('light');

export function getSavedTheme() {
  return 'light';
}

export function setNewTheme(newTheme = 'light') {
  document.cookie;
}

export default ThemeContext;
