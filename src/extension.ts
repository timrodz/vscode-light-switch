// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { ExtensionContext, window } from 'vscode';
import { setInterval } from 'timers';
import * as binder from './commands/binder';
import { canSwitchToNightTheme } from './util/date';
import setTheme from './commands/setTheme';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) {
  window.showInformationMessage('Light Switch is now active!');

  const cmdSwitchThemes = binder.registerCommandSwitch(context);
  context.subscriptions.push(cmdSwitchThemes);

  const cmdSetThemeNight = binder.registerCommandSetThemeNight(context);
  context.subscriptions.push(cmdSetThemeNight);

  const cmdSetThemeDay = binder.registerCommandSetThemeDay(context);
  context.subscriptions.push(cmdSetThemeDay);

  const interval = Constants.INTERVAL_MINUTES * Constants.INTERVAL_FORMULA;

  setInterval((): void => {
    setTheme(context, canSwitchToNightTheme());
  }, interval);
}

// this method is called when your extension is deactivated
export function deactivate() {}
