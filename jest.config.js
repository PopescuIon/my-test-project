module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
    globals: {
      'ts-jest': {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.html$',
      },
    },
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(ts|html)$': [
        'jest-preset-angular',
        {
          tsconfig: '<rootDir>/tsconfig.spec.json',
        },
      ],
    },
    moduleNameMapper: {
      '@/(.*)': '<rootDir>/src/$1',
    },
    transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  };
  