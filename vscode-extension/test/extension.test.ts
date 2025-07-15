import * as assert from 'assert';
import * as vscode from 'vscode';

describe('CODEPILOT Extension', () => {
  it('should activate and register the command', async () => {
    const commands = await vscode.commands.getCommands(true);
    assert.ok(commands.includes('codepilot.showFileSummary'));
  });
});
