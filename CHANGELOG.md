# Change Log

All notable changes to the "light-switch" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [Unreleased 0.1.0]

- Specified default value to `"17:00"` for `lightSwitch.nightTime` on `package.json` — This needed to be done, otherwise it would be `""`, thus breaking the intended code.
- Replaced moment with [day.js](https://day.js.org/en/)
- Added tests for date validation
- Migrated the build to use webpack

## [Unreleased 0.0.1]

- Initial Release
