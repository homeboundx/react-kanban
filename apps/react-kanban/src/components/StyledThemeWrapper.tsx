import { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useTheme } from '../providers/ThemeProvider';

const lightTheme = {
  bgPrimary: '#ffffff',
  bgSecondary: '#f5f5f5',
  textPrimary: '#222222',
  textSecondary: '#555555',
  accentPrimary: '#646cff',
  borderColor: '#dddddd',
  shadowColor: 'rgba(0, 0, 0, 0.1)',
  buttonBg: '#f0f0f0',
  buttonText: '#333333',
};

const darkTheme = {
  bgPrimary: '#121212',
  bgSecondary: '#1e1e1e',
  textPrimary: '#e0e0e0',
  textSecondary: '#aaaaaa',
  accentPrimary: '#7f87ff',
  borderColor: '#444444',
  shadowColor: 'rgba(0, 0, 0, 0.4)',
  buttonBg: '#333333',
  buttonText: '#e0e0e0',
};

export const StyledThemeWrapper = ({ children }: { children: ReactNode }) => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};
