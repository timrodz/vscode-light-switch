import * as moment from 'moment';
import { getExtensionConfig } from './workspace';

export function canSwitchToNightTheme(defaultTime: string = '17:00'): boolean {
  const extensionConfig = getExtensionConfig();
  const nightTime: string = extensionConfig.get('nightTime', defaultTime);
  const currentTime: string = moment().format('hh:mm');
  const time = moment(currentTime, 'hh:mm');
  const afterTime = moment(nightTime, 'hh:mm');
  return time.isAfter(afterTime);
}
