import * as assert from 'assert';
import * as workspace from '../../util/workspace';
import { Constants } from '../../util/constants';

suite('Workspace Test Suite', () => {
  test('Get User Config', () => {
    const userConfig = workspace.getUserConfig();
    assert(userConfig !== undefined);
  });

  test('Get Extension Config', () => {
    const extensionConfig = workspace.getExtensionConfig();
    assert(extensionConfig !== undefined);
  });

  test('Setting Workspace Theme', () => {
    assert.strictEqual(workspace.setWorkspaceTheme(''), false);
    assert.strictEqual(
      workspace.setWorkspaceTheme(Constants.ID_THEME_DEFAULT_VALUE),
      true
    );
    assert.strictEqual(workspace.setWorkspaceTheme('invalid_theme'), false);
  });
});
