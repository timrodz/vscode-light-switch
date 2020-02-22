import { Constants } from '../util/constants';
import { getExtensionConfig, getUserConfig } from '../util/workspace';
import setTheme from './setTheme';

export default function switchTheme(): boolean {
  // Get the theme from the user config
  const userConfig = getUserConfig();
  const currentTheme = userConfig.get(
    Constants.WORKSPACE_COLOR_THEME,
    Constants.ID_THEME_DEFAULT_VALUE
  );

  // Get the dark theme's name from the extension's config
  const extensionConfig = getExtensionConfig();
  const themeNight = extensionConfig.get(Constants.ID_THEME_DARK);

  // Is our theme set to dark? Switch to light
  const themeId =
    currentTheme === themeNight
      ? Constants.ID_THEME_LIGHT
      : Constants.ID_THEME_DARK;

  console.log(`Switching themes. Source: ${currentTheme}, Final: ${themeId}`);
  return setTheme(themeId);
}
