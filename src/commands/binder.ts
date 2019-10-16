// The command has been defined in the package.json file
// Now provide the implementation of the command with registerCommand
// The commandId parameter must match the command field in package.json
import { ExtensionContext, Disposable, commands } from 'vscode';
import switchThemes from './switch';
import setTheme from './setTheme';

function registerCommand(id: string, func: any): Disposable {
  const command = commands.registerCommand(`lightSwitch.${id}`, func);
  return command;
}

export function registerCommandSwitch(context: ExtensionContext): Disposable {
  return registerCommand('toggleThemes', () => {
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
