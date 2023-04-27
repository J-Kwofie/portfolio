import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { ThemeProviderWrapper, useThemeMode } from './contexts/ThemeContext';
import Layout from './pages/Layout';
import GlobalStyle from './styled/global';
import { darkTheme, lightTheme } from './styled/themes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProviderWrapper>
        <ThemeProvider theme={themeMode}>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<h2>{theme}</h2>} />
            </Route>
          </Routes>
        </ThemeProvider>
      </ThemeProviderWrapper>
    </BrowserRouter>
  );
}

export default App;
