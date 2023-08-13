import { Pressable } from "@ark-ui/react";

import { recipe as button } from "./Button.recipe";
import { panda } from "generated/panda/jsx";

import type { PandaComponent } from "generated/panda/types/jsx";
import type { ComponentProps } from "react";

export type Props = ComponentProps<typeof Button>;

/**
 * Core UI button.
 */
// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const Button: PandaComponent<typeof Pressable> = panda(Pressable, button);

export default Button;
