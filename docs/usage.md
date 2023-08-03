# ANIREF UI Library Usage

Follow these steps to use the ANIREF UI library in your project.

## Prerequisites

1. Install [Panda 🐼](https://panda-css.com/): `yarn add -D @pandacss/dev`

2. Create a Panda config file similar to this (Panda looks for `panda.config.ts` by default):

```ts
// panda.config.ts
import { anirefPreset } from "@animareflection/ui";
import { defineConfig } from "@pandacss/dev";

const pandaConfig = defineConfig({
  preflight: true,
  emitPackage: true,
  presets: ["@pandacss/dev/presets", anirefPreset],
  include: ["./src/**/*.{ts,tsx}"],
  outdir: "src/generated/panda",
});

export default pandaConfig;
```

3. Create a CSS file and import it into your project. You can name the CSS file anything you want, just make sure you import it early in your project. For example:

```css
/* main.css */
@layer reset, base, tokens, recipes, utilities;
@import url("@animareflection/ui/index.css");
```

```tsx
// App.tsx
import "./main.css";

const App = () => <></>;
```

Now you are ready to install the library. You can either install it [from the published package](#from-published-package) or from a [local clone](#locally) on your local filesystem. The latter is useful if you are developing the UI library.

## From Published Package

1. Install the package: `yarn add @animareflection/ui`

## Locally

1. Install [yalc](https://github.com/wclr/yalc).

2. Link the package: `yalc link @animareflection/ui`

   > 💡 Note: if you receive a `Cannot find module '@animareflection/ui' [...]` error and `yarn && yalc link @animareflection/ui` does not resolve the issue, try removing the `yalc.lock` file and then relink:
   >
   > ```sh
   >  rm yalc.lock && yalc link @animareflection/ui
   > ```

   > 💡 Note: every time you install dependencies (e.g. run `yarn`), the package symlink will be cleared, and will need to be relinked:
   >
   > ```sh
   >  yarn && yalc link @animareflection/ui
   > ```

   > 💡 Note: if the UI library build fails, this will cause trickling errors. Make sure the UI library builds successfully if you are still having issues.
