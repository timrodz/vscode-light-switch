import * as dayjs from 'dayjs';
import { getExtensionConfig } from './workspace';

function convertDate(today: string, time: string): dayjs.Dayjs {
  return dayjs(`${today} ${time}`, 'YYYY-MM-DD HH:mm');
}

export function canSwitchToNightTheme(
  defaultTime: string = '17:00',
  currentTime: string = ''
): boolean {
  const extensionConfig = getExtensionConfig();
  const nightTime: string = extensionConfig.get('nightTime', defaultTime);
  const today = dayjs().format('YYYY-MM-DD');
  const timeNow = currentTime ? convertDate(today, currentTime) : dayjs();
  const timeToSwitch = convertDate(today, nightTime);
  return timeNow.isSame(timeToSwitch) || timeNow.isAfter(timeToSwitch);
}
