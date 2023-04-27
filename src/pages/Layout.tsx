import { Link, Outlet } from 'react-router-dom';

import Navigation from '../components/navigation/Navigation';
import { HeaderStyles } from '../styled/HeaderStyled';
import { NavStyles } from '../styled/NavigationStyled';
import { ThemeTogglerProps } from '../types/themeTypes';

const Layout = ({ themeToggler, theme }: ThemeTogglerProps) => {
  return (
    <>
      <HeaderStyles>
        <Link className="logo" to={'/'}>
          Jude
        </Link>

        <NavStyles>
          <ul>
            <div className="menu-icon">
              <span className="material-symbols-outlined">menu</span>
            </div>
            <Navigation />
          </ul>

          <button onClick={themeToggler}>
            <span className="material-symbols-outlined">
              {theme === 'dark' ? 'dark_mode' : 'light_mode'}
            </span>
          </button>
        </NavStyles>
      </HeaderStyles>

      <Outlet />
    </>
  );
};

export default Layout;
