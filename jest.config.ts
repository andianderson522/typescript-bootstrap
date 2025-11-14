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
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  coverageDirectory: '<rootDir>/coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/src/index.ts',
    '<rootDir>/src/test-server.ts',
    '<rootDir>/types/',
    '<rootDir>/src/jest-global.ts',
    '<rootDir>/src/jest-teardown.ts',
  ],
  collectCoverageFrom: [
    '<rootDir>/**/*.ts',
    '!**/node_modules/**',
    '!**/fixtures/**',
    '!**/*.{test.ts,spec.ts}',
    '!<rootDir>/src/index.ts',
  ],
  maxWorkers: '40%',
  coverageReporters: ['lcov', 'text-summary'],
  errorOnDeprecated: true,
  clearMocks: false,
  resetMocks: false,
  // true makes tests slower but uses way less memory
  resetModules: true,
  verbose: true,
  bail: true,
  setupFilesAfterEnv: ['<rootDir>/src/jest.setup.ts'],
  randomize: true,
};

export default config;
