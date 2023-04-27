import { NavItemListType } from '../../types/navigationTypes';

/**
 * Renders a list of navigation items using a specified component.
 *
 * @param {object} props - The props object.
 * @param {Array<LinkItem>} props.items - An array of link items to display in the navigation list.
 * @param {string} props.resourceName - The name of the resource to pass to each navigation item component as a prop.
 * @param {React.ComponentType<{linkItem: LinkItem}>} props.navItemComponent - The component to use for rendering each navigation item.
 * @returns {JSX.Element} - The rendered navigation list component.
 */

const NavItemList = ({
  items,
  resourceName,
  navItemComponent: NavItemComponent,
}: NavItemListType) => {
  return (
    <>
      {items.map((item) => (
        <NavItemComponent key={item.key} linkItem={item} {...{ [resourceName]: item }} />
      ))}
    </>
  );
};

export default NavItemList;
