import 'reflect-metadata';
import * as statsd from './index';

it('has a NoopStatsdProvider', () => {
  expect(statsd.NoopStatsdProvider).toBeDefined();
});
it('has a DatadogStatsdProvider', () => {
  expect(statsd.DatadogStatsdProvider).toBeDefined();
});
