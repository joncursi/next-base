/**
 * @prettier
 */

/* eslint-disable immutable/no-mutation */

module.exports = {
  globals: {
    'ts-jest': {
      diagnostics: false,
      tsConfig: './test/tsconfig.json',
    },
  },
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/app/$1',
  },
  preset: 'ts-jest',
  roots: ['<rootDir>/app'],
  setupFiles: ['./test/mocks.ts'],
  setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
};
