import styled from 'styled-components';

import { GlobalThemeProps } from '../types/themeTypes';

export const HeaderStyles = styled.header`
  box-shadow: 0 4px 20px hsla(207, 24%, 35%, 0.1);
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 2rem;
  z-index: 100;

  @media screen and (min-width: 1024px) {
    position: unset;
  }
`;
