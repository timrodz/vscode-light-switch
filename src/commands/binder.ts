// Commands have been defined inside `package.json`
// The command identifiers must match the `command` field inside `package.json`
import {
  commands,
  Disposable,
  StatusBarAlignment,
  StatusBarItem,
  window
} from 'vscode';
import { Constants } from '../util/constants';
import setTheme from './setTheme';
import switchTheme from './switchTheme';
import { getExtensionConfig } from '../util/workspace';
import { themeToSwitchTo } from '../util/date';

/**
 * Registers a given command
 *
 * @param {string} id Command identifier
 * @param {*} func Function to run when executing the command
 * @returns {Disposable}
 */
export function registerCommand(id: string, func: any): Disposable {
  const command = commands.registerCommand(
    `${Constants.ID_CMD_LIGHT_SWITCH}.${id}`,
    func
  );
  return command;
}

/**
 * Registers the theme switch command
 *
 * @export
 * @returns {Disposable}
 */
export function registerCommandSwitchThemes(): Disposable {
  return registerCommand(Constants.ID_CMD_SWITCH_THEMES, () => {
    switchTheme();
  });
}

/**
 * Registers the set theme DARK command
 *
 * @export
 * @returns {Disposable}
 */
export function registerCommandSetThemeDark(): Disposable {
  return registerCommand(Constants.ID_CMD_THEME_DARK, () => {
    setTheme(Constants.ID_THEME_DARK);
  });
}

/**
 * Registers the set theme LIGHT command
 *
 * @export
 * @returns {Disposable}
 */
export function registerCommandSetThemeLight(): Disposable {
  return registerCommand(Constants.ID_CMD_THEME_LIGHT, () => {
    setTheme(Constants.ID_THEME_LIGHT);
  });
}

export function intervalSwitchTheme(): boolean {
  const extensionConfig = getExtensionConfig();
  const switchTimeLight: string = extensionConfig.get(
    Constants.ID_SWITCH_TIME_LIGHT,
    Constants.ID_TIME_DEFAULT_VALUE
  );
  const switchTimeDark: string = extensionConfig.get(
    Constants.ID_SWITCH_TIME_DARK,
    Constants.ID_TIME_DEFAULT_VALUE
  );
  const newTheme = themeToSwitchTo(switchTimeLight, switchTimeDark);
  return setTheme(
    newTheme === 'dark' ? Constants.ID_THEME_DARK : Constants.ID_THEME_LIGHT
  );
}

/**
 * Creates and returns the Light Switch Status Bar Item
 *
 * Note: The returned StatusBarItem still needs to be pushed into vscode's subscriptions
 *
 * @export
 * @returns {StatusBarItem}
 */
export function createLightSwitchStatusBarItem(): StatusBarItem {
  const statusBarItem: StatusBarItem = window.createStatusBarItem(
    StatusBarAlignment.Left,
    Constants.STATUS_BAR_PRIORITY
  );

  statusBarItem.command = `${Constants.ID_CMD_LIGHT_SWITCH}.${Constants.ID_CMD_SWITCH_THEMES}`;

  // $(light-bulb) renders a ligh-bulb icon on the status bar before the text
  statusBarItem.text = '$(light-bulb) Light Switch';
  statusBarItem.tooltip = 'Toggle Themes';
  statusBarItem.show();

  return statusBarItem;
}
