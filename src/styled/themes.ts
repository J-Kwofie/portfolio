export interface ThemeProps {
  background: string;
  textColor: string;
}

export const darkTheme: ThemeProps = {
  background: 'var(--dark-background)',
  textColor: 'var(--dark-text-color)',
};

export const lightTheme: ThemeProps = {
  background: 'var(--light-background)',
  textColor: 'var(--light-text-color)',
};
