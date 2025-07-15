// Entry point for VS Code extension
// ...existing code...
import * as vscode from 'vscode';

// Dynamic imports with error handling
let summarizeFileContext: any;
let extractIntent: any;
let analyzeImpact: any;

try {
  const backendBridge = require('./backendBridge');
  summarizeFileContext = backendBridge.summarizeFileContext;
} catch (err) {
  console.warn('Failed to load backendBridge:', err);
  summarizeFileContext = (filePath: string) => Promise.resolve(`Mock summary for ${filePath}`);
}

try {
  const intentExtractor = require('../backend/intent-extractor/intentExtractor');
  extractIntent = intentExtractor.extractIntent;
} catch (err) {
  console.warn('Failed to load intentExtractor:', err);
  extractIntent = (filePath: string) => Promise.resolve(`Mock intent for ${filePath}`);
}

try {
  const impactAnalyzer = require('../backend/impact-analyzer/impactAnalyzer');
  analyzeImpact = impactAnalyzer.analyzeImpact;
} catch (err) {
  console.warn('Failed to load impactAnalyzer:', err);
  analyzeImpact = (filePath: string, change: string) => Promise.resolve(`Mock impact analysis for ${filePath}: ${change}`);
}

export function activate(context: vscode.ExtensionContext) {
  console.log('CODEPILOT Extension is activating...');
  let disposable = vscode.commands.registerCommand('codepilot.showFileSummary', async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showInformationMessage('No active file.');
      return;
    }
    const filePath = editor.document.uri.fsPath;
    // Call backend summarizer via IPC bridge
    try {
      const summary = await summarizeFileContext(filePath);
      vscode.window.showInformationMessage(`Summary for ${filePath}:\n${summary}`);
    } catch (err) {
      vscode.window.showErrorMessage('Failed to get summary: ' + err);
    }
  });
  context.subscriptions.push(disposable);

  let whyDisposable = vscode.commands.registerCommand('codepilot.showWhySummary', async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showInformationMessage('No active file.');
      return;
    }
    const filePath = editor.document.uri.fsPath;
    try {
      const why = await extractIntent(filePath);
      vscode.window.showInformationMessage(`Why summary for ${filePath}:\n${why}`);
    } catch (err) {
      vscode.window.showErrorMessage('Failed to get why summary: ' + err);
    }
  });
  context.subscriptions.push(whyDisposable);

  let impactDisposable = vscode.commands.registerCommand('codepilot.showImpactReport', async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showInformationMessage('No active file.');
      return;
    }
    const filePath = editor.document.uri.fsPath;
    // For demo, use a placeholder change string
    try {
      const impact = analyzeImpact(filePath, 'demo change');
      vscode.window.showInformationMessage(`Impact report for ${filePath}:\n${impact}`);
    } catch (err) {
      vscode.window.showErrorMessage('Failed to get impact report: ' + err);
    }
  });
  context.subscriptions.push(impactDisposable);
  console.log('CODEPILOT Extension activated successfully!');
}

export function deactivate() {}
