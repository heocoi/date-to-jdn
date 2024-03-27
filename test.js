import test from 'ava';
import dateToJdn from './index.js';

test('main', t => {
  t.is(dateToJdn(new Date('2024-02-29')), 2460370);

  t.throws(() => {
    dateToJdn('2024-02-29');
  }, {
    instanceOf: TypeError,
    message: 'Expected a Date object, got string',
  });
});
