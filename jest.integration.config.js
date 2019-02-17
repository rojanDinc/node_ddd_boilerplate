module.exports = {
  globals: {
      'ts-jest': {
          tsConfigFile: 'tsconfig.json'
      }
  },
  moduleFileExtensions: [
      'ts',
      'js'
  ],
  transform: {
      '^.+\\.(ts|tsx)$': './node_modules/ts-jest/preprocessor.js'
  },
  testMatch: [
      '**/test/integration/**/*.test.(ts|js)'
  ],
  testEnvironment: 'node'
};