// Mock intent extractor for testing
function extractIntent(filePath) {
  return Promise.resolve(`Mock intent for ${filePath}`);
}

module.exports = { extractIntent };
