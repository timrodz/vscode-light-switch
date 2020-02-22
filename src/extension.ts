// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { setInterval } from 'timers';
import { ExtensionContext } from 'vscode';
import * as binder from './commands/binder';
import { Constants } from './util/constants';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) {
  // Register all commands
  const cmdSwitchThemes = binder.registerCommandSwitchThemes();
  context.subscriptions.push(cmdSwitchThemes);

  const cmdSetThemeDark = binder.registerCommandSetThemeDark();
  context.subscriptions.push(cmdSetThemeDark);

  const cmdSetThemeLight = binder.registerCommandSetThemeLight();
  context.subscriptions.push(cmdSetThemeLight);

  // Displays the status bar at the bottom-left corner
  const statusBarItem = binder.createLightSwitchStatusBarItem();
  context.subscriptions.push(statusBarItem);

  // This command ensures your theme is set according to your specified time
  const interval =
    Constants.INTERVAL_MINUTES * Constants.MINUTE_IN_MILLISECONDS;

  setInterval((): void => {
    binder.intervalSwitchTheme();
  }, interval);
}

// this method is called when your extension is deactivated
export function deactivate() {}
