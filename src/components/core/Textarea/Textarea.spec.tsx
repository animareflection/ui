import { expect } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";

import type { ReactRenderer } from "@storybook/react";
import type { PlayFunctionContext, Renderer } from "@storybook/types";

/**
 * Textarea testing suite.
 */
export const textareaState = async <R extends Renderer = ReactRenderer>({
  canvasElement,
  step,
}: PlayFunctionContext<R>) => {
  const canvas = within(canvasElement as HTMLElement);

  const input = canvas.getByRole("textbox");

  await step("It should change textarea value on input", async () => {
    await userEvent.type(input, "test", {
      delay: 100,
    });

    await expect(input).toHaveValue("test");
  });
};
