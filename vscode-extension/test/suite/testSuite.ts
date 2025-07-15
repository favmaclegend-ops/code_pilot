import * as assert from 'assert';
import * as vscode from 'vscode';

describe('CODEPILOT Extension E2E', () => {
  it('should register file summary command', async () => {
    const commands = await vscode.commands.getCommands(true);
    assert.ok(commands.includes('codepilot.showFileSummary'));
  });

  it('should register why summary command', async () => {
    const commands = await vscode.commands.getCommands(true);
    assert.ok(commands.includes('codepilot.showWhySummary'));
  });

  it('should register impact report command', async () => {
    const commands = await vscode.commands.getCommands(true);
    assert.ok(commands.includes('codepilot.showImpactReport'));
  });
});
