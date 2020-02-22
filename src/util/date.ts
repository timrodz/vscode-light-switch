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
 * Determines if we can switch to the dark theme
 *
 * @export
 * @param {string} [switchTime='17:00']
 * @param {string} [currentTime='']
 * @returns {boolean} whether the current time is either the same or after our specified switching time
 */
export function canSwitchToThemeDark(
  switchTime: string,
  currentTime: string = ''
): boolean {
  const yearMonthDateString = dayjs().format('YYYY-MM-DD');
  const timeNow = currentTime
    ? createDateFromString(yearMonthDateString, currentTime)
    : dayjs();
  const timeToSwitch = createDateFromString(yearMonthDateString, switchTime);
  return timeNow.isSame(timeToSwitch) || timeNow.isAfter(timeToSwitch);
}
