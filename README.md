# 💡 Light Switch 💡

Light Switch allows you to set-up two themes that swap around day & night. All you have to do is pick your themes and set your preferred times.

## Features

- 🌗 Specify Day & Night themes
- ⏱ Set your desired night time

![Light Switch in action](images/light-switch.gif)

## Requirements

- [Moment.js](https://momentjs.com/): `npm install moment --save`

## Extension Settings

You set these configuration options as User Settings or as Workspace Settings, 
either by using the Settings UI or by editing the JSON settings file directly.

### Theme Settings
These options should be set with the name of the theme. 
If you are not sure what is the name of your theme, 
you can refer to them in your User Setting under `Workspace` -> `Appearance` -> `Color Theme`.

* `lightSwitch.defaultTheme`: Default theme in case loading fails. **Default**: `Visual Studio Light`
* `lightSwitch.nightTheme`: Theme that will be set during dark mode. **Default**: `Abyss`
* `lightSwitch.dayTheme`: Theme that will be set during light mode. **Default**: `Visual Studio Light`

### Other Settings

* `lightSwitch.nightTime`: 24-hour local time that activates dark mode. Format: `hh:mm` (i.e. `20:00`, `10:30`, `03:45`).

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

- TODO: Add notes

## Running locally

### Structure

All code lives inside `src/`:

- `commands`: Every command goes here - Includes the generic command binder.
- `test`: All kinds of tests will be run here. [Read more on testing](https://code.visualstudio.com/api/working-with-extensions/testing-extension).
- `util`: General utilities
  - `date`: Date conversion with `Moment.js`.
  - `workspace`: Basic functions for getting important workspace information.

1. Run `npm install`
2. Head to the debugging area and choose either `Run Extension` or `Extension Tests` if you want to run the tests.

## Contributions

Contributions are more than welcome 🕺

- Bug reports
- Enhancements
- Typos
- Tests
- Anything you can think of 🎉
