import { defineGlobalStyles } from "@pandacss/dev";

// NB: relative path needed for Storybook
import fonts from "./fonts";

const globalCss = defineGlobalStyles({
  "html, body": {
    fontFamily: fonts.primary.value,
  },
});

export default globalCss;
