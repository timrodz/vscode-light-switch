// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as cmd from './command';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    console.log(
        'Congratulations, your extension "light-switch" is now active!'
    );

    vscode.window.showWarningMessage(
        'Congratulations, your extension "light-switch" is now active!'
    );

    let cmdSwitch = cmd.registerCommandSwitch();
    context.subscriptions.push(cmdSwitch);
    
    // let cmdSetTimeModeLight = cmd.registerCommandSetTimeModeLight();
    // context.subscriptions.push(cmdSetTimeModeLight);
}

// this method is called when your extension is deactivated
export function deactivate() {}
