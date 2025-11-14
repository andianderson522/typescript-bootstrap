import 'expect-more-jest';
import type { ILogObj, Logger } from 'tslog';
import LocalServer from './server';

describe('server', () => {
  const testServer = new LocalServer('0.0.0.0', 8081, {
    fatal: jest.fn(),
    info: jest.fn(),
  } as unknown as Logger<ILogObj>);
  afterEach(async () => {
    await testServer.stop();
  });
  describe('stop', () => {
    it('calling stop when not running does not error', async () => {
      await testServer.stop();
      expect(testServer.isStopped()).toBeTrue();
    });
  });
});
