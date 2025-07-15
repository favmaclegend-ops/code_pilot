// Mock impact analyzer for testing
function analyzeImpact(filePath, changeDescription) {
  return Promise.resolve(`Mock impact analysis for ${filePath}: ${changeDescription}`);
}

module.exports = { analyzeImpact };
