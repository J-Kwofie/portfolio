export interface ThemeProps {
  background: string;
  textColor: string;
}

export type GlobalThemeProps = {
  theme: ThemeProps;
};

export interface ThemeTogglerProps {
  themeToggler: () => void;
  theme: string;
}
