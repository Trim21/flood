const {compilerOptions} = require('../tsconfig.json');
const {pathsToModuleNameMapper} = require('ts-jest');
const common = require('./common');

module.exports = {
  ...common,
  displayName: 'auth',
  rootDir: './../',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/..',
  }),
  testEnvironment: 'node',
  testMatch: ['<rootDir>/routes/api/auth.test.ts'],
  setupFilesAfterEnv: ['<rootDir>/.jest/auth.setup.js'],
};
