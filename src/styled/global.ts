import { createGlobalStyle, withTheme } from 'styled-components';

import { ThemeProps } from './themes';

type GlobalThemeProps = {
  theme: ThemeProps;
};

const globalStyle = createGlobalStyle`
  :root {
    //dark-mode
    --dark-background: #1A1B27;
    --dark-text-color: #F5F5F7;

    //light-mode
    --light-background: hsl(207, 4%, 99%);
    --light-text-color: hsl(207, 4%, 28%);

    //both light and dark
    --body-font: 'Roboto', sans-serif;
    --normal-font-size: .938rem;
    --title-font: 'Lora', serif;

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
  width: 100%;
  -webkit-font-smoothing: antialiased;
  font-family: 'var(--body-font)';
  font-size: 'var(--normal-font-size)';
  margin: 0 auto;
  background-color: ${({ theme }: GlobalThemeProps) => theme.background};
  color: ${({ theme }: GlobalThemeProps) => theme.textColor};
  transition: 'background 0.4s'; /* for dark mode animation */

}
button{
  background-color: transparent;
  border:none;
}

  h1,h2,h3 {
  color: ${({ theme }: GlobalThemeProps) => theme.textColor};
  font-family: 'var(--title-font)';
  font-weight: 500;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}
.material-symbols-outlined{
    color: ${({ theme }: GlobalThemeProps) => theme.textColor};
}
.grid {
  display: grid;
  gap:1.5rem
}
max-width: 1024px;
  `;

export default withTheme(globalStyle);
