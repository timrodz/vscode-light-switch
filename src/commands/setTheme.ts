import { ExtensionContext } from 'vscode';
import {
  getUserConfig,
  getExtensionConfig,
  setWorkspaceTheme
} from '../util/workspace';

export default function setTheme(
  context: ExtensionContext,
  dayTheme: boolean
): boolean {
  // Access config & current theme
  const userConfig = getUserConfig();
  const currentTheme = userConfig.get('colorTheme');

  // Load theme information from the Light Switch config
  const extensionConfig = getExtensionConfig();
  const theme = extensionConfig.get(
    dayTheme ? 'dayTheme' : 'nightTheme',
    extensionConfig.get('defaultTheme', 'Abyss')
  );

  // Don't change themes if they're the same
  if (currentTheme === theme) {
    return false;
  }

  setWorkspaceTheme(context, theme, dayTheme);
  return true;
}
