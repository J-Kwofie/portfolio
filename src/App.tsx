import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { darkTheme, GlobalStyle, lightTheme } from './assets/styled';
import ThemeContext from './contexts/ThemeContext';
import useThemeMode from './hooks/useThemeMode';
import Layout from './pages/Layout';

function App() {
  const { theme, themeToggler } = useThemeMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <BrowserRouter>
      <ThemeContext>
        <ThemeProvider theme={themeMode}>
          <GlobalStyle />
          <Routes>
            <Route
              path="/"
              element={<Layout themeToggler={themeToggler} theme={theme} />}
            >
              <Route index element={<h2>{theme}</h2>} />
            </Route>
          </Routes>
        </ThemeProvider>
      </ThemeContext>
    </BrowserRouter>
  );
}

export default App;
