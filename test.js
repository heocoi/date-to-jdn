import test from 'ava';
import timezoneMock from 'timezone-mock';
import dateToJdn from './index.js';

test.beforeEach(() => {
  timezoneMock.register('UTC');
});

test('main', t => {
  t.is(dateToJdn(new Date('2024-02-29')), 2460369.5);

  t.is(dateToJdn(new Date('2024-02-29 12:00:00')), 2460370);

  t.is(dateToJdn(new Date('2024-02-29 10:00:00')), 2460369.9166666665);

  t.throws(() => {
    dateToJdn('2024-02-29');
  }, {
    instanceOf: TypeError,
    message: 'Expected a Date object, got string',
  });
});
