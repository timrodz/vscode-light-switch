import {
  ExtensionContext,
  window,
  WorkspaceConfiguration,
  workspace
} from 'vscode';

export function getUserConfig(): WorkspaceConfiguration {
  const config = workspace.getConfiguration('workbench');
  if (!config) {
    window.showErrorMessage("Could not load configuration 'workbench'");
  }
  return config;
}

export function getExtensionConfig(): WorkspaceConfiguration {
  const config = workspace.getConfiguration('lightSwitch');
  if (!config) {
    window.showErrorMessage("Could not load configuration 'lightSwitch'");
  }
  return config;
}

export function getWorkspaceTheme(context: ExtensionContext): boolean {
  const themeDay = context.workspaceState.get('themeDay', true);
  return themeDay;
}

export function setWorkspaceTheme(
  context: ExtensionContext,
  theme: string,
  dayTheme: boolean
): void {
  const config = getUserConfig();
  config.update('colorTheme', theme, true);
  context.workspaceState.update('themeDay', dayTheme);
}
