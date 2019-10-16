// The command has been defined in the package.json file
// Now provide the implementation of the command with registerCommand
// The commandId parameter must match the command field in package.json
import * as vscode from 'vscode';
import { bind } from './util/extensionHandle';
import { getCurrentDate } from './util/time';

// SWITCH

export function registerCommandSwitch(): vscode.Disposable {
    return bind('switch', () => {
        vscode.window.showWarningMessage('Switching lights!');
    });
}

// SET MODE

export function registerCommandSetModeDark(): vscode.Disposable {
    return bind('switch', () => {
        vscode.window.showWarningMessage('Switching lights!');
    });
}

export function registerCommandSetModeLight(): vscode.Disposable {
    return bind('switch', () => {
        vscode.window.showWarningMessage('Switching lights!');
    });
}

// SET TIME
export function registerCommandSetTimeModeDark(): vscode.Disposable {
    return bind('displayTime', () => {
        const time = getCurrentDate();
        vscode.window.showInformationMessage(`The time is: ${time}`);
    });
}

export function registerCommandSetTimeModeLight(): vscode.Disposable {
    return bind('displayTime', () => {
        const time = getCurrentDate();
        vscode.window.showInformationMessage(`The time is: ${time}`);
    });
}
