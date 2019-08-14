import * as vscode from "vscode";

export function bind(id: string, func: any): vscode.Disposable {
    const cmd = vscode.commands.registerCommand(`extension.${id}`, func);
    return cmd;
}
