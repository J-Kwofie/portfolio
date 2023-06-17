import React from 'react';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '../../assets/styled/';
import useThemeMode from '../../hooks/useThemeMode';

const ThemeContext: React.FC = ({ children }) => {
  const { theme } = useThemeMode();
  console.log(theme);
  const themeMode = theme === 'dark' ? darkTheme : lightTheme;

  return <ThemeProvider theme={themeMode}>{children}</ThemeProvider>;
};

export default ThemeContext;
