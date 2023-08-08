import type { Config as JestConfig } from "jest";

/**
 * Test coverage options.
 */
const coverageOptions: Pick<
  JestConfig,
  | "collectCoverage"
  | "coverageDirectory"
  | "coveragePathIgnorePatterns"
  | "coverageProvider"
  | "coverageReporters"
  | "coverageThreshold"
  | "collectCoverageFrom"
  | "forceCoverageMatch"
> = {
  coverageProvider: "v8",
  collectCoverageFrom: [
    "<rootDir>/src/**/*.tsx",
    // ignore stories
    "!<rootDir>/src/**/*.stories.tsx",
  ],
};

/**
 * Jest configuration.
 * @see https://jestjs.io/docs/configuration
 */
const jestConfig: JestConfig = {
  // throw error on deprecated API usage
  errorOnDeprecated: true,
  testEnvironment: "jsdom",
  modulePaths: ["<rootDir>/src"],
  setupFilesAfterEnv: ["<rootDir>/src/test/jest.setup.ts"],
  // TODO enable below (don't inject globals) for explicit imports, hacks currently required for `expect` extension of `@testing-library/jest-dom`; track https://github.com/testing-library/jest-dom/issues/426
  // injectGlobals: false,
  transform: {
    // run tests with`@swc/jest`: https://swc.rs/docs/usage/jest
    "^.+\\.(mjs|ts|tsx)$": [
      "@swc/jest",
      {
        jsc: {
          transform: {
            react: {
              // enable support for React 17 JSX transform: https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
  ...coverageOptions,
};

export default jestConfig;
