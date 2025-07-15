// Intent Extractor: Summarizes "why" code was written
import { getCommitHistory } from '../git-analyzer/gitUtils';

export async function extractIntent(filePath: string) {
  const commits = await getCommitHistory(filePath);
  // Simple heuristic: concatenate commit messages
  return commits.map(c => c.message).join('\n');
}
