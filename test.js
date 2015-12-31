'use strict';
var test = require('ava');
var unixPathMax = require('./');

test.cb('async', function (t) {
	t.plan(3);

	unixPathMax(function (err, maxLength) {
		t.ifError(err);
		t.is(typeof maxLength, 'number');
		t.true(maxLength > 0);
		t.end();
	});
});

test('sync', function (t) {
	var maxLength = unixPathMax.sync();
	t.is(typeof maxLength, 'number');
	t.true(maxLength > 0);
});
