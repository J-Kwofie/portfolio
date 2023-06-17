import styled from 'styled-components';

import { GlobalThemeProps } from '../../types/themeTypes';

export const NavStyles = styled.nav`
  height: calc(var(--header-height) + 0.5rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }: GlobalThemeProps) => theme.background};
  box-shadow: 0 4px 20px hsla(207, 24%, 35%, 0.1);
  padding-inline: 1.5rem;
  border-radius: 3rem;
  .nav-menu {
    position: fixed;
    width: 98%;
    left: 0;
    right: 0;
    bottom: -60%;
    margin: 0 auto;
    background-color: ${({ theme }: GlobalThemeProps) => theme.background};
    box-shadow: 0 4px 20px hsla(207, 24%, 35%, 0.1);
    padding: 2rem 1.5rem 5rem;
    border-radius: 2rem;
    transition: bottom 0.3s;
  }
  .show-menu {
    bottom: 2rem;
  }
  .menu-list {
    grid-template-columns: repeat(3, max-content);
    justify-content: center;
    gap: 2rem 3rem;
  }
  .nav-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 0.25rem;
    font-size: var(--smaller-font-size);
    color: ${({ theme }: GlobalThemeProps) => theme.textColor};
    transition: color 0.3s;
  }
  .nav-link:hover {
    color: var(--title-color);
  }
  .close-icon {
    position: absolute;
    right: 1.5rem;
    bottom: 0.7rem;
    font-size: 1.5rem;
    cursor: pointer;
  }
  .nav-theme-menu {
    display: flex;
    gap: 0.7rem;
  }
  .theme-button,
  .menu-icon {
    border: none;
    background-color: transparent;
  }

  @media screen and (min-width: 1024px) {
    height: unset;
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    padding-inline: 0;
    border-radius: 0;
    width: 88%;
    margin: auto;
    box-shadow: none;
    .icon {
      display: none;
    }
    .nav-menu {
      position: unset;
      padding: 1.5rem;
      border-radius: 0;
      background-color: transparent;
      box-shadow: none;
    }
    .menu-list {
      grid-template-columns: repeat(6, max-content);
      justify-content: end;
    }
    .menu-icon,
    .close-icon {
      display: none;
    }
  }
`;
