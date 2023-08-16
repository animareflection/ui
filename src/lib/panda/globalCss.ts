import { defineGlobalStyles } from "@pandacss/dev";

// NB: relative path needed for Storybook
import fonts from "./fonts";

import type { GlobalStyleObject } from "generated/panda/types";

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const globalCss: GlobalStyleObject = defineGlobalStyles({
  "html,body": {
    fontFamily: fonts.primary.value,
  },
});

export default globalCss;
