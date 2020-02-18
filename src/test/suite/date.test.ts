import * as assert from 'assert';
import * as dayjs from 'dayjs';
import { canSwitchToNightTheme } from '../../util/date';

suite('Date Test Suite', () => {
  test('Time conversions', () => {
    const timeNow = dayjs('12-25-1995 17:00', 'MM-DD-YYYY HH:mm');
    assert(timeNow.isSame(dayjs('12-25-1995 17:00', 'MM-DD-YYYY HH:mm')));
    assert(timeNow.isBefore(dayjs('12-25-1995 17:01', 'MM-DD-YYYY HH:mm')));
    assert(timeNow.isAfter(dayjs('12-25-1995 00:00', 'MM-DD-YYYY HH:mm')));
    assert(timeNow.isBefore(dayjs('12-25-1995 24:00', 'MM-DD-YYYY HH:mm')));
  });

  test('Setting time through the extension', () => {
    assert(!canSwitchToNightTheme('17:00', '16:00'));
    assert(canSwitchToNightTheme('17:00', '17:00'));
    assert(canSwitchToNightTheme('17:00', '17:01'));
    assert(!canSwitchToNightTheme('17:00', '00:00'));
    assert(canSwitchToNightTheme('17:00', '24:00'));
    assert(canSwitchToNightTheme('17:00', '23:59'));
  });
});
