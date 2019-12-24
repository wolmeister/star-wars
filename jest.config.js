module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleNameMapper: {
    '\\.(jpg|png|svg)': '<rootDir>/src/__mocks__/fileMock.ts',
    '^~(.*)$': '<rootDir>/src$1',
  },
};
