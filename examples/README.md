# ANIREF UI Example Apps

## Overview

- `vite`: React + Vite example
- `next`: Next.js example

## Run

### From this repository

To run any of these examples from within the repository:

1. (prerequisite) Install `yalc`
2. **Within the root UI library directory:**
   1. build the UI library: `yarn build` (or `yarn dev` for continuous builds)
3. **Within the example directory:**
   1. Install dependencies: `yarn`
   2. Link the UI library: `yalc link @animareflection/ui`
      - Linking will not modify `package.json`, it will just symlink the package into your `node_modules`. Note that the package must be published to the `yalc` store first (this happens automatically after a successful build from the UI library `dev` script)

### Externally (by copying the examples out of this repository)

1. Simply install the included dependencies and add the UI library package:

```sh
yarn
yarn add @animareflection/ui # (or link with `yalc` as above)
```
