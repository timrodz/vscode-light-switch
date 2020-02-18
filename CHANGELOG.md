# Change Log

All notable changes to the "light-switch" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [Unreleased 0.1.1]

- Set up an Azure Pipeline following Microsoft's [Continuous Integration](https://code.visualstudio.com/api/working-with-extensions/continuous-integration) tutorial.
  - **PROBLEM**: `@types/vscode` had conflicts with `vscode` when running `yarn test`.
    - **FIX**: Had to remove the old `vscode` dependency as per the Testing Extension's [Migrating from `vscode`](https://code.visualstudio.com/api/working-with-extensions/testing-extension#migrating-from-vscode) link.
- Replaced `package-lock.json` for `yarn.lock`.
- Updated `package.json`'s `compile` script to include `npm run test-compile`, since the `./out/` folder has to be created in order to run tests.

## [Unreleased 0.1.0]

- Specified default value to `"17:00"` for `lightSwitch.nightTime` on `package.json` — This needed to be done, otherwise it would be `""`, thus breaking the intended code.
- Replaced moment with [day.js](https://day.js.org/en/)
- Added tests for date validation
- Migrated the build to use webpack

## [Unreleased 0.0.1]

- Initial Release
