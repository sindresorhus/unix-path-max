'use strict';
var test = require('ava');
var unixPathMax = require('./');

test('async', function (t) {
	t.plan(3);

	unixPathMax(function (err, maxLength) {
		t.assert(!err, err);
		t.assert(typeof maxLength === 'number');
		t.assert(maxLength > 0);
	});
});

test('sync', function (t) {
	var maxLength = unixPathMax.sync();
	t.assert(typeof maxLength === 'number');
	t.assert(maxLength > 0);
	t.end();
});
