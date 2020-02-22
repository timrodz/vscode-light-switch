export const Constants = Object.freeze({
  // Command identifiers
  ID_CMD_LIGHT_SWITCH: 'lightSwitch',
  ID_CMD_SWITCH_THEMES: 'swapThemes',
  ID_CMD_THEME_DARK: 'setThemeDark',
  ID_CMD_THEME_LIGHT: 'setThemeLight',

  // User/Extension configuration
  WORKSPACE_COLOR_THEME: 'colorTheme',
  WORKSPACE_WORKBENCH: 'workbench',

  // Property identifiers
  ID_THEME_LIGHT: 'themeLight',
  ID_THEME_DARK: 'themeDark',
  ID_SWITCH_TIME_DARK: 'switchTime',

  // Default property values
  ID_THEME_DEFAULT_VALUE: 'Default Dark+',
  ID_TIME_DEFAULT_VALUE: '17:00',

  // Theme switching check interval
  INTERVAL_MINUTES: 10,
  MINUTE_IN_MILLISECONDS: 60000,

  // The higher the number the farther left it is on the status bar
  STATUS_BAR_PRIORITY: 100
});
