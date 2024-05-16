/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverageFrom: ["src/**"],
  coveragePathIgnorePatterns: ["<rootDir>/src/main.ts"],
};
