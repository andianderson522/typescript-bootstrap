import NotYetImplementedError from './not-yet-implemented';

describe('NotYetImplementedError', () => {
  it('exists', () => {
    expect(NotYetImplementedError).toBeDefined();
  });
  describe('constructor', () => {
    const notYetImplementedError = new NotYetImplementedError();
    it('can be constructed', () => {
      expect(notYetImplementedError).toBeDefined();
      expect(notYetImplementedError.name).toEqual('NotYetImplementedError');
    });
    it('sets the correct message when noting passed to constructor', () => {
      const message = notYetImplementedError.message;
      expect(message).toEqual('NOT_YET_IMPLEMENTED_ERROR');
    });
    it('sets the correct message when give a message', () => {
      const messageParam = 'testing';
      const nyie = new NotYetImplementedError(messageParam);
      expect(nyie.message).toEqual('NOT_YET_IMPLEMENTED_ERROR: testing');
    });
  });
});
