import { ThemeContext, useThemeMode } from '../../contexts/ThemeContext';
import { NavStyles } from '../../styled/NavigationStyled';
import NavItem from './NavItem';
import NavItemList from './NavItemList';
import { navListData } from './navListData';

/**
 * Renders the navigation component, including a list of navigation items.
 *
 * @returns {JSX.Element} - The rendered navigation component.
 */
const Navigation = () => {
  const { theme, themeToggler } = useThemeMode();
  console.log(theme, 'TTTTTTTTTTTTT');
  return (
    <NavStyles>
      <ul className="menu-list">
        <NavItemList
          items={navListData}
          resourceName={'linkItem'}
          navItemComponent={NavItem}
        />
        <button onClick={themeToggler}>
          <span className="material-symbols-outlined">
            {theme === 'dark' ? 'dark_mode' : 'light_mode'}
          </span>
        </button>
      </ul>
    </NavStyles>
  );
};

export default Navigation;
