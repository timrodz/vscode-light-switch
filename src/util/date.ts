import * as dayjs from 'dayjs';

/**
 * Creates a dayjs object from a formatted string
 *
 * @param {string} date Format: 'YYYY-MM-DD'
 * @param {string} time Format: 'HH:mm'
 * @returns {dayjs.Dayjs} dayjs object
 */
function createDateFromString(date: string, time: string): dayjs.Dayjs {
  return dayjs(`${date} ${time}`, 'YYYY-MM-DD HH:mm');
}

/**
 * Determines the theme to switch to
 *
 * @export
 * @param {string} [switchTimeLight='08:00']
 * @param {string} [switchTimeDark='17:00']
 * @param {string} [currentTime='']
 * @returns {string} whether the theme is 'dark' or 'light'
 */
export function themeToSwitchTo(
  switchTimeLight: string,
  switchTimeDark: string,
  currentTime: string = ''
): 'dark' | 'light' {
  const today = dayjs().format('YYYY-MM-DD');
  const timeNow = createDateFromString(
    today,
    currentTime ? currentTime : dayjs().format('HH:mm')
  );
  const timeToSwitchLight = createDateFromString(today, switchTimeLight);
  const timeToSwitchDark = createDateFromString(today, switchTimeDark);

  const timeNowH = timeNow.hour();

  const shouldSwitchToThemeLight =
    // Either we're past the light hour and earlier than the dark hour...
    (timeNowH >= timeToSwitchLight.hour() &&
      timeNowH < timeToSwitchDark.hour()) ||
    // ...Or the hour is the same but we haven't reached the dark minutes
    (timeNowH == timeToSwitchDark.hour() &&
      timeNow.minute() < timeToSwitchDark.minute());

  return shouldSwitchToThemeLight ? 'light' : 'dark';
}
