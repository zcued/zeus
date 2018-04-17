module.exports = {
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.json'
    }
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testPathIgnorePatterns: ['/node_modules/', 'lib'],
  transform: {
    '^.+\\.(ts|tsx)$': './node_modules/ts-jest/preprocessor.js'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testEnvironment: 'node',
  setupFiles: ['./tests/setup.js']
}
