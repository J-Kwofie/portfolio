import { Outlet } from 'react-router-dom';

import Navigation from '../components/navigation/Navigation';
import { HeaderStyles, NavStyles } from '../styled/HeaderStyled';

interface ThemeTogglerProps {
  themeToggler: () => void;
  theme: string;
}

const Layout = ({ themeToggler, theme }: ThemeTogglerProps) => {
  return (
    <>
      <HeaderStyles>
        <h1>Jude</h1>
        <NavStyles>
          <ul>
            <Navigation />
          </ul>
        </NavStyles>
        <button onClick={themeToggler}>
          <span className="material-symbols-outlined">
            {theme === 'dark' ? 'dark_mode' : 'light_mode'}
          </span>
        </button>
      </HeaderStyles>

      <Outlet />
    </>
  );
};

export default Layout;
