import React from 'react';
import { ThemeProvider } from 'styled-components';

import useThemeMode from '../../hooks/useThemeMode';
import { darkTheme, lightTheme } from '../../styled/themes';

const ThemeContext: React.FC = ({ children }) => {
  const { theme } = useThemeMode();
  console.log(theme);
  const themeMode = theme === 'dark' ? darkTheme : lightTheme;

  return <ThemeProvider theme={themeMode}>{children}</ThemeProvider>;
};

export default ThemeContext;
