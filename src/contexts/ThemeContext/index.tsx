import React, { createContext, FunctionComponent, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '../../styled/themes';
import { ThemeProps, ThemeTogglerProps } from '../../types/themeTypes';

// const ThemeContext: React.FC = ({ children }) => {
//   const { theme } = useThemeMode();
//   console.log(theme, 'uHHHHHHHHHHHHHHHHH');
//   const themeMode = theme === 'dark' ? darkTheme : lightTheme;

//   return <ThemeProvider theme={themeMode}>{children}</ThemeProvider>;
// };

// export default ThemeContext;   const themeMode = theme === 'light' ? lightTheme : darkTheme;

export const ThemeContext = createContext<ThemeTogglerProps>({
  theme: 'dark',
  themeToggler: () => {
    return;
  },
});

export const ThemeProviderWrapper: FunctionComponent = ({ children }) => {
  const localTheme = window.localStorage.getItem('theme');

  const [theme, setTheme] = useState(localTheme ? localTheme : 'dark');

  const setMode = (mode: string) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === 'dark' ? setMode('light') : setMode('dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, themeToggler }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useThemeMode = () => useContext(ThemeContext);
