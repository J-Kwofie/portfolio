import { useState } from 'react';

export const useThemeMode = () => {
  const localTheme = window.localStorage.getItem('theme');

  const [theme, setTheme] = useState(localTheme ? localTheme : 'dark');

  const setMode = (mode: string) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    console.log('Mee');
    theme === 'dark' ? setMode('light') : setMode('dark');
  };

  return { theme, themeToggler };
};

export default useThemeMode;
