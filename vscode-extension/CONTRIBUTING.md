# Contributing to CODEPILOT AI Extension

🎉 **Thank you for considering contributing to CODEPILOT AI!** 

We welcome contributions from developers of all skill levels. Whether you're fixing bugs, adding features, improving documentation, or sharing ideas, your help makes CODEPILOT AI better for everyone.

## 🚀 Quick Start

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Create a new branch** for your changes
4. **Make your changes** and test them
5. **Submit a pull request**

## 🛠️ Development Setup

### Prerequisites
- Node.js (v16 or higher)
- VS Code (latest version)
- Git

### Installation
```bash
# Clone your fork
git clone https://github.com/YOUR-USERNAME/codepilot-ai.git
cd codepilot-ai/vscode-extension

# Install dependencies
npm install

# Build the extension
npm run build

# Run tests
npm test
```

### Testing Your Changes
```bash
# Open the extension in VS Code
code .

# Press F5 to open a new Extension Development Host window
# Test your changes in the new window
```

## 📝 How to Contribute

### 🐛 Bug Reports
Found a bug? Help us fix it!

**Before submitting:**
- Check if the issue already exists
- Try the latest version
- Gather relevant information

**Include in your report:**
- VS Code version
- Extension version
- Operating system
- Steps to reproduce
- Expected vs actual behavior
- Error messages or logs

### 💡 Feature Requests
Have an idea? We'd love to hear it!

**Feature request template:**
- **Problem**: What problem does this solve?
- **Solution**: What would you like to see?
- **Alternatives**: Any alternative solutions?
- **Use case**: How would you use this feature?

### 🔧 Code Contributions

#### Types of Contributions We Welcome:
- **Bug fixes** - Help us squash those pesky bugs
- **New features** - Implement items from our roadmap
- **Performance improvements** - Make the extension faster
- **Documentation** - Improve README, comments, or guides
- **Tests** - Add or improve test coverage
- **UI/UX improvements** - Make the extension more user-friendly

#### Coding Standards:
- Use TypeScript
- Follow existing code style
- Write clear, descriptive commit messages
- Add tests for new functionality
- Update documentation when needed

#### Commit Message Format:
```
type(scope): short description

Longer description if needed

Fixes #123
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(summary): add syntax highlighting to code summaries
fix(impact): resolve null reference error in impact analysis
docs(readme): update installation instructions
```

## 🎯 Priority Areas

We're especially looking for help with:

### High Priority
- **AI Model Integration** - Connect real AI models to replace mock implementations
- **Performance Optimization** - Improve response times and memory usage
- **Error Handling** - Better error messages and recovery
- **Test Coverage** - Expand test suite

### Medium Priority
- **Multi-language Support** - Support more programming languages
- **Configuration Options** - Add user-customizable settings
- **Accessibility** - Make the extension more accessible
- **Documentation** - Improve guides and examples

### Future Features
- **Code Quality Analysis** - Detect code smells and suggest improvements
- **Git Integration** - Analyze changes in commits and PRs
- **Team Collaboration** - Features for team-based development
- **Custom AI Models** - Allow users to train on their codebase

## 📋 Pull Request Process

### Before Submitting:
1. **Create an issue** first (for non-trivial changes)
2. **Fork and create a branch** from `main`
3. **Write tests** for your changes
4. **Update documentation** if needed
5. **Test thoroughly** in the Extension Development Host

### Pull Request Template:
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Other: ___________

## Testing
- [ ] Tests pass locally
- [ ] Tested in Extension Development Host
- [ ] Added new tests for new functionality

## Checklist
- [ ] Code follows project style
- [ ] Self-reviewed the changes
- [ ] Updated documentation
- [ ] Added comments for complex code
```

### Review Process:
1. **Automated checks** run on your PR
2. **Manual review** by maintainers
3. **Feedback** and requested changes
4. **Approval** and merge

## 🏗️ Project Structure

```
vscode-extension/
├── src/                    # Source code (future)
├── test/                   # Test files
├── dist/                   # Compiled output
├── extension.ts            # Main extension file
├── package.json           # Extension manifest
├── README.md              # Documentation
├── CHANGELOG.md           # Release notes
└── CONTRIBUTING.md        # This file
```

## 🧪 Testing Guidelines

### Running Tests:
```bash
# Run all tests
npm test

# Run specific test file
npm test -- test/extension.test.ts
```

### Writing Tests:
- Use descriptive test names
- Test both success and failure cases
- Mock external dependencies
- Keep tests focused and isolated

### Test Structure:
```typescript
describe('Feature Name', () => {
  it('should do something specific', async () => {
    // Arrange
    const input = 'test input';
    
    // Act
    const result = await functionUnderTest(input);
    
    // Assert
    assert.strictEqual(result, expected);
  });
});
```

## 📚 Resources

### Documentation:
- [VS Code Extension API](https://code.visualstudio.com/api)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Mocha Testing Framework](https://mochajs.org/)

### Tools:
- [VS Code Extension Generator](https://github.com/Microsoft/vscode-generator-code)
- [Extension Manifest Reference](https://code.visualstudio.com/api/references/extension-manifest)

## 🤝 Code of Conduct

### Our Pledge
We pledge to make participation in our project a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our Standards
**Positive behavior:**
- Using welcoming and inclusive language
- Being respectful of differing viewpoints
- Gracefully accepting constructive criticism
- Focusing on what is best for the community

**Unacceptable behavior:**
- Harassment or discriminatory language
- Trolling, insulting, or derogatory comments
- Personal or political attacks
- Publishing others' private information

### Enforcement
Report unacceptable behavior to the project maintainers. All complaints will be reviewed and investigated promptly and fairly.

## 🎉 Recognition

Contributors will be:
- Listed in the project's contributors section
- Mentioned in release notes for significant contributions
- Given credit in documentation they help improve

## 📞 Getting Help

### Need Help?
- **Issues**: Create a GitHub issue
- **Questions**: Start a discussion on GitHub
- **Chat**: Join our community discussions

### Response Times
- **Bug reports**: Within 48 hours
- **Feature requests**: Within 1 week
- **Pull requests**: Within 1 week

## 📜 License

By contributing to CODEPILOT AI, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to CODEPILOT AI! 🚀**

Your contributions help make coding more accessible and enjoyable for developers everywhere.
