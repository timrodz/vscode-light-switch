import * as assert from 'assert';
import * as dayjs from 'dayjs';
import { canSwitchToThemeDark } from '../../util/date';

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
    assert.strictEqual(canSwitchToThemeDark('17:00', '16:00'), false);
    assert.strictEqual(canSwitchToThemeDark('17:00', '17:00'), true);
    assert.strictEqual(canSwitchToThemeDark('17:00', '17:01'), true);
    assert.strictEqual(canSwitchToThemeDark('17:00', '00:00'), false);
    assert.strictEqual(canSwitchToThemeDark('17:00', '24:00'), true);
    assert.strictEqual(canSwitchToThemeDark('17:00', '23:59'), true);
  });
});
