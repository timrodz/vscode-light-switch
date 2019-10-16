import { ExtensionContext } from 'vscode';
import { getWorkspaceTheme } from '../util/workspace';
import setTheme from './setTheme';

export default function switchThemes(context: ExtensionContext): void {
  const themeDay = getWorkspaceTheme(context);
  setTheme(context, !themeDay);
}
