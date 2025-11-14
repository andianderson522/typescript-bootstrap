import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  passWithNoTests: false,
  roots: ['<rootDir>/src'],
  cacheDirectory: '<rootDir>/.testcache/jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
  modulePathIgnorePatterns: ['<rootDir>/src/.*/__mocks__'],
  testMatch: ['<rootDir>/src/**/*.(test|spec).ts'],
  maxWorkers: '40%',
  errorOnDeprecated: true,
  clearMocks: false,
  resetMocks: false,
  // true makes tests slower but uses way less memory
  resetModules: true,
  verbose: true,
  bail: true,
  setupFilesAfterEnv: ['<rootDir>/src/jest.setup.ts'],
  globalSetup: '<rootDir>/src/jest-global.ts',
  globalTeardown: '<rootDir>/src/jest-teardown.ts',
  randomize: true,
};

export default config;
