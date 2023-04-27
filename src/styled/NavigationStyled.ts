import styled from 'styled-components';

import { GlobalThemeProps } from '../types/themeTypes';

export const NavStyles = styled.nav`
  ul.menu-list {
    width: 88%;
    position: fixed;
    margin: 0 auto;
    box-shadow: 0 4px 20px hsla(207, 24%, 35%, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;
  }

  ul li {
    list-style: none;
    box-shadow: 0 4px 20px hsla(207, 24%, 35%, 0.1);
    border-radius: 3rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul li a {
    text-decoration: none;
  }

  .material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
    color: ${({ theme }: GlobalThemeProps) => theme.textColor};
  }
  @media screen and (min-width: 1024px) {
    ul.menu-list {
      flex-direction: row;
    }
  }
`;
