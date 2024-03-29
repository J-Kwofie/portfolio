import { NavLink } from 'react-router-dom';

import { LinkItem } from '../../types/navigationTypes';

/**
 * Renders a navigation item component with a NavLink component from 'react-router-dom'.
 *
 * @param {object} props - The props object.
 * @param {LinkItem} props.linkItem - The link item to display in the navigation.
 * @returns {JSX.Element} - The rendered navigation item component.
 */

const NavItem = ({ linkItem }: { linkItem: LinkItem }) => {
  const { link, text, icon } = linkItem;
  return (
    <li className="nav-item">
      <NavLink to={`${link}`} className="nav-link">
        <span className="material-symbols-outlined icon">{icon}</span>
        {text}
      </NavLink>
    </li>
  );
};
export default NavItem;
