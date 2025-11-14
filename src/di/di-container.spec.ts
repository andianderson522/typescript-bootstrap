import 'expect-more-jest';
import DIContainer from './di-container';
import type { StatsdProvider } from '../providers/statsd';
import { DI_TYPES } from './di-types';

describe('DIContainer', () => {
  beforeAll(async () => {
    await DIContainer.load();
  });
  afterAll(async () => {
    await DIContainer.unload();
  });
  it('has a statsdProvider', () => {
    const statsdProvider = DIContainer.get<StatsdProvider>(
      DI_TYPES.STATSD_PROVIDER
    );
    expect(statsdProvider).toBeDefined();
  });
});
