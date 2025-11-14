import 'expect-more-jest';
import contollers from './index';

describe('controllers module', () => {
  it('exists', () => {
    expect(contollers).toBeNonEmptyObject();
  });
  it('has a root controller', () => {
    expect(contollers.rootController).toBeNonEmptyObject();
  });
  it('has a ping controller', () => {
    expect(contollers.pingController).toBeNonEmptyObject();
  });
});
