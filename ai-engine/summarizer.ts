// AI Summarizer: Generates file/function summaries
// Mock implementation for testing

function summarize(filePath: string): string {
  return `Mock summary for ${filePath}`;
}

// For backend bridge communication
process.on('message', (filePath: string) => {
  const result = summarize(filePath);
  process.send!(result);
});

export { summarize };
