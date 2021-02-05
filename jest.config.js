module.exports = {
  rootDir: "./src",
  collectCoverage: true,
  coverageReporters: ["lcov"],
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "src/**/*.{js,jsx}",
    "src/**/**/*.{js,jsx}",
    "!**/node_modules/**",
  ],
  coverageDirectory: "./coverage",
  setupFiles: ["<rootDir>/src/setupTests.js"],
};
