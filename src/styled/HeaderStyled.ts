import styled from 'styled-components';

export const HeaderStyles = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
    color: red;
  }
`;

export const NavStyles = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 15px;
  }

  ul li {
    list-style: none;
  }

  ul li a {
    text-decoration: none;
  }
`;
