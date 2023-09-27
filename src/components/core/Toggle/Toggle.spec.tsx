import { expect } from "@storybook/jest";
import { within, userEvent } from "@storybook/testing-library";

import type { ReactRenderer } from "@storybook/react";
import type { PlayFunctionContext, Renderer } from "@storybook/types";

/**
 * Toggle testing suite.
 */
export const toggleState = async <R extends Renderer = ReactRenderer>({
  canvasElement,
  step,
}: PlayFunctionContext<R>) => {
  const canvas = within(canvasElement as HTMLElement);

  const toggle = await canvas.findByRole("checkbox");

  await step("It should toggle the checkbox", async () => {
    await expect(toggle).toHaveAttribute("checked");
    await userEvent.click(toggle);
    await expect(toggle).not.toHaveAttribute("checked");
  });
};
