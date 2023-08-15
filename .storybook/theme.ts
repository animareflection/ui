import { create } from "@storybook/theming/create";

import { app } from "../src/lib/config";
import { fonts } from "../src/lib/panda";

import type { ThemeVars } from "@storybook/theming";

const typography: Pick<ThemeVars, "fontBase" | "fontCode"> = {
  fontBase: fonts.primary.value,
  fontCode: fonts.code.value,
};

/**
 * Custom Storybook theme.
 */
const storybookTheme = create({
  ...typography,
  // set dark theme default
  base: "dark",
  brandUrl: app.organization.url,
  brandTitle: `<img src="/img/logo.png" width="40px" height="40px"/>`,
  brandTarget: "_self",
});

export default storybookTheme;
