module.exports = {
  collectCoverageFrom: [
    'src/components/**/*.{ts,tsx}',
    '!**/*.stories.{ts,tsx}',
    '!**/index.ts',
  ],
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  testMatch: ['<rootDir>/src/**/*.{spec,test}.{ts,tsx}'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  modulePaths: [],
  moduleFileExtensions: [
    'web.js',
    'js',
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'json',
    'web.jsx',
    'jsx',
    'node',
  ],
  moduleNameMapper: {
    // Mocks out all these file formats when tests are run
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',

    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileMock.js',
  },
};
