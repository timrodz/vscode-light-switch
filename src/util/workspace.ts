import {
  ExtensionContext,
  window,
  WorkspaceConfiguration,
  workspace
} from 'vscode';
import { Constants } from './constants';

export function getUserConfig(): WorkspaceConfiguration {
  const config = workspace.getConfiguration('workbench');
  if (!config) {
    window.showErrorMessage("Could not load configuration 'workbench'");
  }
  return config;
}

export function getExtensionConfig(): WorkspaceConfiguration {
  const config = workspace.getConfiguration(Constants.LIGHT_SWITCH);
  if (!config) {
    window.showErrorMessage("Could not load configuration 'lightSwitch'");
  }
  return config;
}

export function getWorkspaceTheme(context: ExtensionContext): boolean {
  const themeDay = context.workspaceState.get(Constants.THEME_DAY, true);
  return themeDay;
}

export function setWorkspaceTheme(
  context: ExtensionContext,
  theme: string,
  dayTheme: boolean
): void {
  const config = getUserConfig();
  config.update('colorTheme', theme, true);
  context.workspaceState.update(Constants.THEME_DAY, dayTheme);
}
