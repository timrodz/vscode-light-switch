# 💡 Light Switch 💡

Light Switch allows you to set-up two themes that swap around day & night. All you have to do is pick your themes and set your preferred times.

## Update 2026-02-05

Light Switch has now been **deprecated** as you can configure this inside VS Code.

Source: [Visual Studio Code documentation](https://code.visualstudio.com/docs/configure/themes#_automatically-switch-based-on-os-color-scheme)

Example:

```json
{
  “window.autoDetectColorScheme”: true,
  “workbench.preferredDarkColorTheme”: “Visual Studio Dark”,
  “workbench.preferredLightColorTheme”: “Visual Studio Light”
}
```

[![Build Status](https://dev.azure.com/timrodz/Light%20Switch/_apis/build/status/timrodz.vscode-light-switch?branchName=master)](https://dev.azure.com/timrodz/Light%20Switch/_build/latest?definitionId=1&branchName=master)

## Features

- 🌗 Specify themes for light and dark settings
- ⏱ Set your desired time to switch between these

![Light Switch in action](images/light-switch.gif)

## Requirements

- [vscode](https://code.visualstudio.com/)
- [Day.js](https://day.js.org/)

## Extension Settings

This extension contributes the following settings:

- `lightSwitch.themeDark`: Theme that will be set during dark mode.
- `lightSwitch.themeLight`: Theme that will be set during light mode.
- `lightSwitch.switchTimeDark` + `lightSwitch.switchTimeLight`: 24-hour local time that activates night mode. Format: HH:mm (i.e. 20:00, 10:30, 03:45).

Example:

![Seetings](images/settings.png)

## Quick Actions

Quickly change the theme (default: ctrl + shift + p)

![Quick Actions](images/quick-actions.png)

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Running locally

### Structure

All code lives inside `src/`:

- `commands`: Every command goes here - Includes the generic command binder.
- `test`: All kinds of tests will be run here. [Read more on testing](https://code.visualstudio.com/api/working-with-extensions/testing-extension).
- `util`: General utilities
  - `date`: Date conversion with `day.js`.
  - `workspace`: Basic functions for getting important workspace information.

### Getting started

1. Run `npm install` to install local dependencies.
2. Head to the debugging menu and choose either `Run Extension` or `Extension Tests` if you want to run the tests.

### Installing local builds

1. Run `vsce package`.
2. Run `code --install-extension lightswitch-VERSION.vsix` (replace `VERSION` with the **current** version number i.e. `0.1.0` or `1.0.0`).
3. Reload your window.

## Contributions

[See our contribution guidelines](CONTRIBUTING.md)
