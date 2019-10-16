import * as assert from 'assert';
import * as moment from 'moment';

suite('date', () => {
  const time = moment('17:00', 'hh:mm');
  assert(time.isAfter(moment('00:00', 'hh:mm')));
  assert(!time.isAfter(moment('24:00', 'hh:mm')));
  assert(!time.isAfter(moment('17:00', 'hh:mm')));
});
