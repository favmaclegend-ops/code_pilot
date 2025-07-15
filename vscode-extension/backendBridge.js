// Simple bridge to call backend summarizer from extension
const { fork } = require('child_process');
const path = require('path');

function summarizeFileContext(filePath) {
  return new Promise((resolve, reject) => {
    const backendPath = path.resolve(__dirname, '../ai-engine/summarizer.ts');
    const child = fork(backendPath, [filePath], { silent: true });
    let result = '';
    child.on('message', msg => {
      result += msg;
    });
    child.on('exit', () => {
      resolve(result);
    });
    child.on('error', err => {
      reject(err);
    });
  });
}

module.exports = { summarizeFileContext };
