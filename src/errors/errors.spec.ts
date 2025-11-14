import 'expect-more-jest';
import errors from './index';

describe('errors module', () => {
  it('exists', () => {
    expect(errors).toBeDefined();
    expect(errors).toBeNonEmptyObject();
  });
  it('has "NotYetImplementedError"', () => {
    expect(errors.NotYetImplementedError).toBeDefined();
  });
});
