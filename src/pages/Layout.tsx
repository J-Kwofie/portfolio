import { useRef } from 'react';
import { Link, Outlet } from 'react-router-dom';

import Navigation from '../components/navigation/Navigation';
import { HeaderStyles } from '../styled/HeaderStyled';
import { NavStyles } from '../styled/NavigationStyled';
import { ThemeTogglerProps } from '../types/themeTypes';

const Layout = ({ themeToggler, theme }: ThemeTogglerProps) => {
  const navMenuRef = useRef<HTMLDivElement>(null);
  const showMenuHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('you clicked me...');
    navMenuRef.current?.classList.add('show-menu');
  };
  const hideMenuHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('you clicked me...');
    navMenuRef.current?.classList.remove('show-menu');
  };

  return (
    <>
      <HeaderStyles>
        <NavStyles>
          <Link className="logo" to={'/'}>
            Jude
          </Link>
          <div className="nav-menu " ref={navMenuRef}>
            <ul className="menu-list grid">
              <Navigation />
            </ul>
            <button className="close-icon" onClick={hideMenuHandler}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className="nav-theme-menu">
            <button onClick={themeToggler} className="theme-button">
              <span className="material-symbols-outlined">
                {theme === 'dark' ? 'dark_mode' : 'light_mode'}
              </span>
            </button>
            <button className="menu-icon" onClick={showMenuHandler}>
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </NavStyles>
      </HeaderStyles>

      <Outlet />
    </>
  );
};

export default Layout;
