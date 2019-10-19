// The command has been defined in the package.json file
// Now provide the implementation of the command with registerCommand
// The commandId parameter must match the command field in package.json
import {
  ExtensionContext,
  Disposable,
  commands,
  window,
  StatusBarAlignment,
  StatusBarItem
} from 'vscode';
import switchThemes from './switch';
import setTheme from './setTheme';
import { Constants } from '../util/constants';

function registerCommand(id: string, func: any): Disposable {
  const command = commands.registerCommand(`lightSwitch.${id}`, func);
  return command;
}

export function registerCommandSwitch(context: ExtensionContext): Disposable {
  return registerCommand(Constants.TOGGLE_THEMES_COMMAND_ID, () => {
    switchThemes(context);
  });
}

export function registerCommandSetThemeNight(
  context: ExtensionContext
): Disposable {
  return registerCommand('setNightTheme', () => {
    setTheme(context, false);
  });
}

export function registerCommandSetThemeDay(
  context: ExtensionContext
): Disposable {
  return registerCommand('setDayTheme', () => {
    setTheme(context, true);
  });
}

/**
 * Creates and returns the Light Switch Status Bar Item
 *
 * Note: The returned StatusBarItem still needs to be pushed into vscode's subscriptions
 */
export function createLightSwitchStatusBarItem(): StatusBarItem {
  const statusBarItem: StatusBarItem = window.createStatusBarItem(
    StatusBarAlignment.Left,
    Constants.STATUS_BAR_PRIORITY
  );

  statusBarItem.command = `${Constants.LIGHT_SWITCH}.${Constants.TOGGLE_THEMES_COMMAND_ID}`;
  statusBarItem.text = '$(light-bulb) Light Switch'; // $(light-bulb) renders a ligh-bulb icon on the status bar before the text
  statusBarItem.tooltip = 'Toggle Themes';
  statusBarItem.show();

  return statusBarItem;
}
