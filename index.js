import process from 'node:process';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import execa from 'execa';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function unixPathMax() {
	if (process.platform === 'win32') {
		throw new Error('Not supported on Windows');
	}

	const {stdout} = await execa('./main', {cwd: __dirname});
	return Number(stdout);
}

export function unixPathMaxSync() {
	if (process.platform === 'win32') {
		throw new Error('Not supported on Windows');
	}

	const {stdout} = execa.sync('./main', {cwd: __dirname});
	return Number(stdout);
}
