import 'reflect-metadata';
import NoopStatsdProvider from './noop-statsd-provider';

const provider = new NoopStatsdProvider();

it('can be constructed', () => {
  expect(provider).toBeDefined();
});
it('can run guage', () => {
  expect(() => provider.gauge('', 1)).not.toThrow();
});
it('can run distribution', () => {
  expect(() => provider.distribution('', 1)).not.toThrow();
});
it('can run increment', () => {
  expect(() => provider.increment('', 1)).not.toThrow();
});
it('can run histogram', () => {
  expect(() => provider.histogram('', 1)).not.toThrow();
});
