import * as assert from 'assert';
import setTheme from '../../commands/setTheme';
import { Constants } from '../../util/constants';
import { before } from 'mocha';
import { setWorkspaceTheme } from '../../util/workspace';

suite('Set Theme LIGHT Test Suite', () => {
  before(() => {
    setTheme(Constants.ID_THEME_LIGHT);
  });

  test('Set Theme DARK', () => {
    assert.strictEqual(setTheme(Constants.ID_THEME_DARK), true);
  });

  test('Set Theme LIGHT', () => {
    assert.strictEqual(setTheme(Constants.ID_THEME_LIGHT), false);
  });
});

suite('Set Theme DARK Test Suite', () => {
  before(() => {
    setTheme(Constants.ID_THEME_DARK);
  });

  test('Set Theme DARK', () => {
    assert.strictEqual(setTheme(Constants.ID_THEME_DARK), false);
  });

  test('Set Theme LIGHT', () => {
    assert.strictEqual(setTheme(Constants.ID_THEME_LIGHT), true);
  });
});
