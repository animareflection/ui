import { expect } from "@storybook/jest";
import { within, userEvent } from "@storybook/testing-library";

import { sleep } from "lib/utils";

import type { ReactRenderer } from "@storybook/react";
import type { PlayFunctionContext, Renderer } from "@storybook/types";

/**
 * Checkbox testing suite.
 */
export const checkboxState = async <R extends Renderer = ReactRenderer>({
  canvasElement,
  step,
}: PlayFunctionContext<R>) => {
  const canvas = within(canvasElement as HTMLElement);

  await sleep(100);

  const checkbox = await canvas.findByRole("checkbox");

  await step("It should toggle the checkbox", async () => {
    await expect(checkbox).toHaveAttribute("checked");
    await userEvent.click(checkbox);
    await expect(checkbox).not.toHaveAttribute("checked");
  });
};
