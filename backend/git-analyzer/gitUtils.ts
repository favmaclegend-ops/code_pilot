// Utility functions for interacting with Git
import simpleGit, { SimpleGit, DefaultLogFields } from 'simple-git';
import path from 'path';

const git: SimpleGit = simpleGit();

export async function getCommitHistory(filePath: string, maxCount = 20): Promise<DefaultLogFields[]> {
  const log = await git.log({ file: filePath, n: maxCount });
  return log.all;
}

export async function getFileDiff(commitHash: string, filePath: string): Promise<string> {
  return await git.show([`${commitHash}:${filePath}`]);
}

export async function getLatestCommitMessage(filePath: string): Promise<string> {
  const log = await git.log({ file: filePath, n: 1 });
  return log.latest?.message || '';
}
