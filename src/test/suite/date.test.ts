import * as assert from 'assert';
import * as dayjs from 'dayjs';
import { themeToSwitchTo } from '../../util/date';

suite('Date Test Suite', () => {
  test('Time conversions', () => {
    const timeNow = dayjs('12-25-1995 17:00', 'MM-DD-YYYY HH:mm');
    assert.strictEqual(
      timeNow.isSame(dayjs('12-25-1995 17:00', 'MM-DD-YYYY HH:mm')),
      true
    );
    assert.strictEqual(
      timeNow.isBefore(dayjs('12-25-1995 17:01', 'MM-DD-YYYY HH:mm')),
      true
    );
    assert.strictEqual(
      timeNow.isAfter(dayjs('12-25-1995 00:00', 'MM-DD-YYYY HH:mm')),
      true
    );
    assert.strictEqual(
      timeNow.isBefore(dayjs('12-25-1995 24:00', 'MM-DD-YYYY HH:mm')),
      true
    );
  });

  test('Setting time through the extension', () => {
    // standard setup
    assert.strictEqual(themeToSwitchTo('08:00', '17:00', '08:00'), 'light');
    assert.strictEqual(themeToSwitchTo('08:00', '17:00', '08:01'), 'light');
    assert.strictEqual(themeToSwitchTo('08:00', '17:00', '16:59'), 'light');
    assert.strictEqual(themeToSwitchTo('08:00', '17:00', '17:00'), 'dark');
    assert.strictEqual(themeToSwitchTo('08:00', '17:00', '17:01'), 'dark');
    assert.strictEqual(themeToSwitchTo('08:00', '17:00', '23:59'), 'dark');
    assert.strictEqual(themeToSwitchTo('08:00', '17:00', '00:00'), 'dark');
    assert.strictEqual(themeToSwitchTo('08:00', '17:00', '07:59'), 'dark');

    // same hour, different minutes
    assert.strictEqual(themeToSwitchTo('08:00', '08:30', '08:00'), 'light');
    assert.strictEqual(themeToSwitchTo('08:00', '08:30', '08:01'), 'light');
    assert.strictEqual(themeToSwitchTo('08:00', '08:30', '08:29'), 'light');
    assert.strictEqual(themeToSwitchTo('08:00', '08:30', '08:30'), 'dark');
    assert.strictEqual(themeToSwitchTo('08:00', '08:30', '08:31'), 'dark');
  });
});
