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
  describe('constructor', () => {
    it('can be constructed', () => {
      expect(testServer).toBeNonEmptyObject();
      expect(testServer).toBeInstanceOf(LocalServer);
    });
  });
  describe('start and stop', () => {
    it('can be started', async () => {
      await testServer.start();
      expect(testServer.isStarted()).toBeTrue();
      expect(testServer.isStopped()).toBeFalse();
    });
    it('can be started and stopped to cover callback functions', async () => {
      // Start the server and wait for the listening callback
      await testServer.start();
      // Give a small delay to ensure the listening callback executes
      await new Promise((resolve) => setTimeout(resolve, 100));
      expect(testServer.isStarted()).toBeTrue();
      // Stop the server and wait for the close callback
      await testServer.stop();
      // Give a small delay to ensure the close callback executes
      await new Promise((resolve) => setTimeout(resolve, 100));
      expect(testServer.isStopped()).toBeTrue();
    });
  });
  describe('setPort', () => {
    it('can set the port number', () => {
      const port = 9999;
      testServer.setPort(port);
      expect(testServer.getPort()).toEqual(port);
    });
  });
});
