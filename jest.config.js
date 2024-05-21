const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Path to Next.js app to load next.config.js
  dir: "./",
});

/** @type {import('@jest/types').Config.InitialOptions} */
const customJestConfig = {
  setupFiles: ["<rootDir>/jest.polyfills.js"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
};

module.exports = async () => ({
  ...(await createJestConfig(customJestConfig)()),
  transformIgnorePatterns: ["node_modules/(?!(jose)/)"],
});
