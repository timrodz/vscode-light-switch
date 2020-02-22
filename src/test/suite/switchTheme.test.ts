import * as assert from 'assert';
import switchTheme from '../../commands/switchTheme';

suite('Switch Theme Test Suite', () => {
  test('Switch Theme', () => {
    assert.strictEqual(switchTheme(), true);
  });
});
