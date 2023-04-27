import styled from 'styled-components';

import { GlobalThemeProps } from '../types/themeTypes';

export const HeaderStyles = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .logo {
    color: ${({ theme }: GlobalThemeProps) => theme.textColor};
    font-weight: var(--font-medium);
  }
  .menu-icon {
    cursor: pointer;
  }
`;
