/**
 * @external https://goo.gl/fhrRke
 * @description We store all of our JEST configuration in here vs. our
 * package.json as we require a fair amount of configuration
 */
module.exports = {
  automock: false,
  collectCoverageFrom: ['src/**/*', '!**/*.json', '!src/generated/*'],
  coverageDirectory: '<rootDir>/build/coverage',
  coverageReporters: ['lcov', 'json'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
    '^@build(/.*)$': '<rootDir>/build$1',
    '^@public(/.*)$': '<rootDir>/public$1',
    '^@root(/.*)$': '<rootDir>/$1',
    '^@src(/.*)$': '<rootDir>/src$1'
  },
  modulePathIgnorePatterns: [
    '.next/',
    '__snapshots__/',
    'build/cypress/',
    'build/templates/',
    'node_modules/',
    'src/generated/'
  ],
  setupFiles: ['<rootDir>/build/test/environment.ts'],
  setupFilesAfterEnv: ['<rootDir>/build/test/setup.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.js', '**/*.test.ts', '**/*.test.tsx'],
  testPathIgnorePatterns: [
    '<rootDir>/build/templates/',
    '<rootDir>/node_modules/'
  ],
  transform: {
    // '^.+\\.(js|ts)x?$': 'babel-jest',
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    '^.+\\.graphql$': 'jest-transform-graphql'
  },
  verbose: false
};
