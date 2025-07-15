const assert = require('assert');
const vscode = require('vscode');

describe('CODEPILOT E2E Flow', () => {
  it('should show file summary for active file', async () => {
    const commands = await vscode.commands.getCommands(true);
    assert.ok(commands.includes('codepilot.showFileSummary'));
    // Simulate command execution
    await vscode.commands.executeCommand('codepilot.showFileSummary');
    // No error thrown means command executed
  });

  it('should show why summary for active file', async () => {
    const commands = await vscode.commands.getCommands(true);
    assert.ok(commands.includes('codepilot.showWhySummary'));
    await vscode.commands.executeCommand('codepilot.showWhySummary');
  });

  it('should show impact report for active file', async () => {
    const commands = await vscode.commands.getCommands(true);
    assert.ok(commands.includes('codepilot.showImpactReport'));
    await vscode.commands.executeCommand('codepilot.showImpactReport');
  });
});
