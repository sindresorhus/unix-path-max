import test from 'ava';
import m from './';

test('async', async t => {
	const length = await m();
	t.is(typeof length, 'number');
	t.true(length > 0);
});

test('sync', t => {
	const length = m.sync();
	t.is(typeof length, 'number');
	t.true(length > 0);
});
