module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '@angular-common/(.*)': '<rootDir>/projects/client-application/src/utils/angular-common/$1',
    '@gouvfr-anct/(.*)': '<rootDir>/dist/@gouvfr-anct/$1'
  }
};
