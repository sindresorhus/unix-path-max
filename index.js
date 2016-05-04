'use strict';
const execa = require('execa');

module.exports = () => {
	if (process.platform === 'win32') {
		return Promise.reject(new Error('Not supported on Windows'));
	}

	return execa.stdout('./main', {cwd: __dirname}).then(Number);
};

module.exports.sync = () => {
	if (process.platform === 'win32') {
		throw new Error('Not supported on Windows');
	}

	return Number(execa.sync('./main', {cwd: __dirname}).stdout);
};
