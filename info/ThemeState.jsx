import React from 'react';
import Cookies from 'js-cookie';

export const LIGHT_THEME = 'light';
export const DARK_THEME = 'dark';

const ThemeContext = React.createContext(LIGHT_THEME);

export function getSavedTheme() {
  const value = Cookies.get('theme');
  if (value) {
    return value;
  }
  return LIGHT_THEME;
}

export function setNewTheme(newTheme = LIGHT_THEME) {
  Cookies.set('theme', newTheme);
}

export function getDarkModePrefixClassName(currentTheme) {
  if (currentTheme === LIGHT_THEME) {
    return '';
  }
  return ` ${DARK_THEME}`;
}

export default ThemeContext;
