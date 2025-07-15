// Simple extension for testing
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('CODEPILOT Extension is activating...');
  
  let disposable = vscode.commands.registerCommand('codepilot.showFileSummary', async () => {
    vscode.window.showInformationMessage('Mock file summary');
  });
  context.subscriptions.push(disposable);

  let whyDisposable = vscode.commands.registerCommand('codepilot.showWhySummary', async () => {
    vscode.window.showInformationMessage('Mock why summary');
  });
  context.subscriptions.push(whyDisposable);

  let impactDisposable = vscode.commands.registerCommand('codepilot.showImpactReport', async () => {
    vscode.window.showInformationMessage('Mock impact report');
  });
  context.subscriptions.push(impactDisposable);
  
  console.log('CODEPILOT Extension activated successfully!');
}

export function deactivate() {}
