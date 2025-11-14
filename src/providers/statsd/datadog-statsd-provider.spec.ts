import 'reflect-metadata';
import DatadogStatsdProvider from './datadog-statsd-provider';
import type StatsdProvider from './statsd-provider';

describe('DatadogStatsdProvider', () => {
  let provider: StatsdProvider;
  beforeAll(() => {
    process.env.DATADOG_API_KEY = 'a';
    provider = new DatadogStatsdProvider('abc', 'prefix');
  });
  afterAll(() => {
    process.env.DATADOG_API_KEY = undefined;
  });
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
});
