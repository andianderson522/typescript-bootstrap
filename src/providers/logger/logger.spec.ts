import 'expect-more-jest';
import 'reflect-metadata';
import { Logger } from 'tslog';
import CustomLogger from './index';

describe('CustomLogger', () => {
  it('can be constructed', () => {
    const logger = new CustomLogger(3, 'test', 'pretty');
    expect(logger).toBeDefined();
    expect(logger).toBeInstanceOf(Logger);
    expect(logger).toBeInstanceOf(CustomLogger);
  });
  it('sets the correct logger name based on environment', () => {
    const environment = 'staging';
    const logger = new CustomLogger(3, environment, 'pretty');
    expect(logger.settings.name).toBe(`typescript-bootstrap-${environment}`);
  });
  it('sets the correct minimum log level', () => {
    const logLevel = 4;
    const logger = new CustomLogger(logLevel, 'test', 'pretty');
    expect(logger.settings.minLevel).toBe(logLevel);
  });
  it('sets the correct log type', () => {
    const logType = 'json';
    const logger = new CustomLogger(3, 'test', logType);
    expect(logger.settings.type).toBe(logType);
  });
});
