// The command has been defined in the package.json file
// Now provide the implementation of the command with registerCommand
// The commandId parameter must match the command field in package.json
import * as vscode from "vscode";
import { bind } from "./util/extensionHandle";
import { getCurrentDate } from "./util/time";

export function registerCommandSwitchLights(): vscode.Disposable {
    return bind("switchLights", () => {
        vscode.window.showWarningMessage("Switching lights!");
    });
}

export function registerCommandSetTime(): vscode.Disposable {
    return bind("displayTime", () => {
        const time = getCurrentDate();
        vscode.window.showInformationMessage(`The time is: ${time}`);
    });
}
