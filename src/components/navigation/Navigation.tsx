import NavItem from './NavItem';
import NavItemList from './NavItemList';
import { navListData } from './navListData';

/**
 * Renders the navigation component, including a list of navigation items.
 *
 * @returns {JSX.Element} - The rendered navigation component.
 */
const Navigation = () => {
  return (
    <NavItemList
      items={navListData}
      resourceName={'linkItem'}
      navItemComponent={NavItem}
    />
  );
};

export default Navigation;
