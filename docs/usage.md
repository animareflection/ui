# ANIREF UI Library Usage

Follow these steps to use the ANIREF UI library in your project.

## Prerequisites

1. Install [Panda 🐼](https://panda-css.com/): `bun add -D @pandacss/dev`

2. Create a Panda config file similar to this (Panda looks for `panda.config.ts` by default):

```ts
// panda.config.ts
import { anirefPreset } from "@animareflection/ui";
import { defineConfig } from "@pandacss/dev";

const pandaConfig = defineConfig({
  preflight: true,
  jsxFramework: "react",
  presets: ["@pandacss/dev/presets", anirefPreset],
  include: ["src/**/*.{ts,tsx}"],
  outdir: "src/generated/panda",
});

export default pandaConfig;
```

3. Create a `postcss.config.js` file in your project root with the following content:

```js
module.exports = {
  plugins: {
    "@pandacss/dev/postcss": {},
  },
};
```

There is no need to install `postcss` as an explicit dependency in your project, the config will be picked up by the UI library bundle.

You may want to customize the config snippets above to your liking. Treat them as a starting point.

4. Create a CSS file and import it into your project. You can name the CSS file anything you want, just make sure you import it early in your project. For example:

```css
/* main.css */
@layer reset, base, tokens, recipes, utilities;
@import url("@animareflection/ui/index.css");
```

```tsx
// App.tsx
import "main.css";

const App = () => <></>;
```

5. (_for TypeScript users_) If you are using TypeScript, make sure your consuming application has `compilerOptions.module` and `compilerOptions.moduleResolution` set to `node16` or higher (e.g. `nodenext`) in `tsconfig.json`. This will allow you to properly import from subpaths from the library. Read more about this [here](https://devblogs.microsoft.com/typescript/announcing-typescript-4-7/#ecmascript-module-support-in-node-js).

Now you are ready to install the UI library. You can either install it [from the published package](#from-published-package) or from a [local clone](#local) on your local filesystem. The latter is useful if you are developing the library.

## Remote

Install from remote repository along with required dependencies: `bun add @animareflection/ui @ark-ui/react framer-motion react-hot-toast`

## Local

This workflow is ideal for local development.

1. Install [knit](https://github.com/coopbri/knit)
2. **Within the root UI library directory**, build the UI library: `bun run build` (or `bun dev` for continuous builds)
3. **Within the project directory:**

   1. Install dependencies: `bun install`
   2. Link the UI library: `knit link @animareflection/ui`. Linking will not modify `package.json`, it will just symlink the package into your `node_modules`. Note that the package must be published to the `knit` store first (this happens automatically after a successful build of the UI library)

      > 💡 **Note:** if you receive a `Cannot find module '@animareflection/ui' [...]` error and `bun install && knit link @animareflection/ui` does not resolve the issue, try removing the `knit.lock` file and then relink:
      >
      > ```sh
      >  rm knit.lock && knit link @animareflection/ui
      > ```

      > 💡 **Note:** every time you install or modify dependencies (e.g. run `bun install` or `bun add [...]`), the package symlink will be cleared, and will need to be relinked:
      >
      > ```sh
      >  bun install && knit link @animareflection/ui
      > ```

      > 💡 **Note:** if the UI library build fails, this will cause trickling errors. Make sure the UI library builds successfully if you are still having issues.
