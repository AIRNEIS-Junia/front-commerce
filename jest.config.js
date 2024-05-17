const jsdomGlobal = require("jsdom-global");

jsdomGlobal();

const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFiles: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
  globals: {
    "ts-jest": {
      tsConfig: "./tsconfig.json",
    },
  },
  testEnvironment: "jsdom",
};

module.exports = createJestConfig(customJestConfig);
