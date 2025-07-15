# CODEPILOT AI Extension

🚀 **Your AI-Powered Code Assistant** - Making code review and understanding effortless!

CODEPILOT AI is an intelligent VS Code extension that acts as your personal code assistant. It reads your code files and explains them in plain English, helping you understand complex codebases faster and make safer changes.

## What Does It Do?

Imagine having a knowledgeable colleague who can instantly:
- Read any code file and explain what it does
- Tell you why the code was written that way
- Warn you about potential problems before you make changes
- Help you understand unfamiliar codebases quickly

## Core Features

### 🔍 **File Summary**
Get instant, AI-powered explanations of what your code does. Perfect for:
- Understanding legacy code
- Onboarding new team members
- Reviewing pull requests
- Documenting your codebase

### 🤔 **Why Summary** 
Discover the purpose and reasoning behind code decisions. Helps you:
- Understand design choices
- Learn from other developers' approaches
- Make informed changes
- Avoid breaking existing functionality

### ⚠️ **Impact Report**
Analyze potential consequences before making changes. Shows you:
- What might break if you modify the code
- Which files could be affected
- Potential side effects
- Risk assessment for your changes

### 🔒 **Privacy-First**
All processing happens locally on your machine - your code never leaves your computer!

## Usage

### Available Commands

- `CODEPILOT: Show File Summary` - Generate a summary of the currently active file
- `CODEPILOT: Show Why Summary` - Explain the purpose and intent of the current file
- `CODEPILOT: Show Impact Report` - Analyze the potential impact of changes

### How to Use

1. Open any code file in VS Code
2. Use the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`)
3. Type "CODEPILOT" to see available commands
4. Select the desired command

## Installation

Install from the VS Code Marketplace:

1. Open VS Code
2. Go to Extensions (`Ctrl+Shift+X`)
3. Search for "CODEPILOT AI"
4. Click Install

## Requirements

- VS Code 1.70.0 or higher
- Node.js (for backend processing)

## Extension Settings

This extension contributes the following settings:

* `codepilot.enable`: Enable/disable the extension

## 🚀 Coming Soon - Planned Features

### Code Analysis & Review
- **Code Quality Scanner**: Automatically detect code smells, bugs, and security issues
- **Performance Analyzer**: Identify performance bottlenecks and suggest optimizations
- **Complexity Meter**: Measure and visualize code complexity
- **Dependency Mapper**: Show how files and functions depend on each other

### AI-Powered Assistance
- **Smart Code Generation**: Generate code snippets based on comments or descriptions
- **Auto Documentation**: Generate comprehensive documentation from your code
- **Test Case Generator**: Create unit tests automatically for your functions
- **Code Translator**: Convert code between different programming languages

### Team Collaboration
- **Knowledge Base**: Build a searchable database of code explanations
- **Code Review Assistant**: AI-powered code review suggestions
- **Onboarding Helper**: Generate learning paths for new team members
- **Best Practices Guide**: Suggest improvements based on team standards

### Advanced Features
- **Git Integration**: Analyze changes in commits and pull requests
- **Multi-file Analysis**: Understand relationships across multiple files
- **Refactoring Suggestions**: Smart recommendations for code improvements
- **Custom AI Models**: Train the AI on your specific codebase patterns

### Developer Experience
- **Inline Explanations**: Hover over code to get instant explanations
- **Voice Commands**: Control the extension with voice input
- **Dark/Light Theme**: Match your VS Code theme preferences
- **Customizable Shortcuts**: Set up your own keyboard shortcuts

## Known Issues

- Backend modules are currently in development
- Some features may show placeholder responses

## Release Notes

### 0.1.0

Initial release of CODEPILOT AI extension

- Added File Summary command
- Added Why Summary command  
- Added Impact Report command
- Local-first processing architecture

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This extension is licensed under the MIT License.
