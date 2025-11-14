import 'reflect-metadata';
import NoopStatsdProvider from './noop-statsd-provider';

it('can be extended', () => {
  const provider = new NoopStatsdProvider();
  expect(provider).toBeDefined();
});
