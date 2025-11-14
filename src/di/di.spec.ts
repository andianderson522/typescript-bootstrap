import 'expect-more-jest';
import { DIContainer } from '.';
import { DI_TYPES } from './di-types';

describe('DI Module', () => {
  it('has a handle to the DIContainer', () => {
    expect(DIContainer).toBeDefined();
  });
  it('Exposes the DI_TYPES', () => {
    expect(DI_TYPES).toBeDefined();
  });
});
