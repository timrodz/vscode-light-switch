import { Constants } from '../util/constants';
import {
  getExtensionConfig,
  getUserConfig,
  setWorkspaceTheme
} from '../util/workspace';

export default function setTheme(themeId: string): boolean {
  const extensionConfig = getExtensionConfig();
  const theme = extensionConfig.get(themeId, Constants.ID_THEME_DEFAULT_VALUE);

  const config = getUserConfig();
  const currentTheme = config.get(
    Constants.WORKSPACE_COLOR_THEME,
    Constants.ID_THEME_DEFAULT_VALUE
  );

  if (currentTheme === theme) {
    return false;
  }

  return setWorkspaceTheme(theme);
}
