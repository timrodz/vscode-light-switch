import { window, workspace, WorkspaceConfiguration } from 'vscode';
import { Constants } from './constants';

export function getUserConfig(): WorkspaceConfiguration {
  const config = workspace.getConfiguration(Constants.WORKSPACE_WORKBENCH);
  if (!config) {
    window.showErrorMessage("Could not load configuration 'workbench'");
  }
  return config;
}

export function getExtensionConfig(): WorkspaceConfiguration {
  const config = workspace.getConfiguration(Constants.ID_CMD_LIGHT_SWITCH);
  if (!config) {
    window.showErrorMessage(
      `Could not load configuration ${Constants.ID_CMD_LIGHT_SWITCH}`
    );
  }
  return config;
}

export function setWorkspaceTheme(theme: string): boolean {
  console.log(`Setting theme: ${theme}`);

  if (!theme) {
    return false;
  }

  // This is what overrides the workspace settings (sets the theme).
  try {
    const config = getUserConfig();
    config.update(Constants.WORKSPACE_COLOR_THEME, theme, true);
  } catch (error) {
    console.log(error);
    return false;
  }
  return true;
}
