import test from 'ava';
import {unixPathMax, unixPathMaxSync} from './index.js';

test('async', async t => {
	const length = await unixPathMax();
	t.is(typeof length, 'number');
	t.true(length > 0);
});

test('sync', t => {
	const length = unixPathMaxSync();
	t.is(typeof length, 'number');
	t.true(length > 0);
});
