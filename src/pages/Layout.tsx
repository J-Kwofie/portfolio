import { Link, Outlet } from 'react-router-dom';

import Navigation from '../components/navigation/Navigation';
import { HeaderStyles } from '../styled/HeaderStyled';

const Layout = () => {
  return (
    <>
      <HeaderStyles>
        <Link className="logo" to={'/'}>
          Jude
        </Link>
        <Navigation />

        <div className="menu-icon">
          <span className="material-symbols-outlined">menu</span>
        </div>
      </HeaderStyles>
      <Outlet />
    </>
  );
};

export default Layout;
