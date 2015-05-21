'use strict';
var childProcess = require('child_process');
var execFileSync = require('exec-file-sync');

module.exports = function (cb) {
	if (process.platform === 'win32') {
		throw new Error('Not supported on Windows');
	}

	childProcess.execFile('./main', {cwd: __dirname}, function (err, stdout) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, Number(stdout));
	});
}

module.exports.sync = function (cb) {
	if (process.platform === 'win32') {
		throw new Error('Not supported on Windows');
	}

	return Number(execFileSync('./main', {cwd: __dirname}));
}
