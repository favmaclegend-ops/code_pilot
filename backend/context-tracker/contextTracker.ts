// Context Tracker: Tracks file switches, editing sessions, navigation
import { logSession } from '../db/index';

export async function trackFileSwitch(filePath: string) {
  await logSession(filePath, 'switch');
}

export async function trackEditSession(filePath: string) {
  await logSession(filePath, 'edit');
}
