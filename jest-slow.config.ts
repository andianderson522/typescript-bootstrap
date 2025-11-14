import type { Config } from '@jest/types';
import config from './jest.config';

const conf: Config.InitialOptions = {
  collectCoverage: false,
  displayName: 'SLOW',
  injectGlobals: true,
  modulePathIgnorePatterns: ['<rootDir>/src/.*/__mocks__'],
  openHandlesTimeout: 5000,
  reporters: [
    [
      'jest-slow-test-reporter',
      { numTests: 3, warnOnSlowerThan: 100, color: true },
    ],
    'jest-silent-reporter',
  ],
  roots: config.roots,
  snapshotFormat: config.snapshotFormat,
  testEnvironment: config.testEnvironment,
  testMatch: ['<rootDir>/src/**/*.(spec).ts'],
  testTimeout: 50000,
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  updateSnapshot: config.updateSnapshot,
  verbose: false,
  workerThreads: config.workerThreads,
};

export default conf;
