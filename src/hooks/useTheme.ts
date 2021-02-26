import { Theme } from 'gatsby-plugin-theme-ui';
import { useThemeUI } from 'theme-ui';

const useTheme = (): Theme => {
  const { theme } = useThemeUI();

  return theme as Theme;
};

export default useTheme;
