import { useTheme } from '../../providers/ThemeProvider';

export const ThemeSwitcher = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      aria-label="Switch to {isDarkMode ? 'light' : 'dark'} mode"
    >
      <span>{isDarkMode ? '☀️' : '🌙'}</span>
    </button>
  );
};
