import { RuleConfigSeverity } from "@commitlint/types";

import type { UserConfig as CommitlintUserConfig } from "@commitlint/types";

/**
 * `commitlint` configuration.
 * @see https://commitlint.js.org/#/reference-configuration
 */
const commitlintConfig: CommitlintUserConfig = {
  extends: ["@commitlint/config-conventional"],
  // whether to use default ignore rules
  defaultIgnores: true,
  // rule overrides
  rules: {
    // specify valid types
    "type-enum": [
      RuleConfigSeverity.Error,
      "always",
      [
        "build", // build system, dependencies, tooling
        "chore", // maintenance
        "ci", // continuous integration
        "docs", // update documentation
        "feat", // add a feature (option 1 of 2)
        "feature", // add a feature (option 2 of 2)
        "fix", // fix a bug
        "perf", // performance improvement
        "refactor", // change project/code structure
        // "revert", // revert a commit (intentionally omitted)
        "style", // formatting, visual changes
        "test", // update tests (unit, integration, E2E, etc.)
      ],
    ],
  },
};

export default commitlintConfig;
