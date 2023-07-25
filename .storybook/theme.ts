import { create } from "@storybook/theming/create";

import { app } from "../src/lib/config";

/**
 * Custom Storybook theme.
 */
const storybookTheme = create({
  // set dark theme default
  base: "dark",
  brandUrl: app.organization.url,
  brandTitle: `<img src="/img/logo.png" width="40px" height="40px"/>`,
  brandTarget: "_self",
});

export default storybookTheme;
