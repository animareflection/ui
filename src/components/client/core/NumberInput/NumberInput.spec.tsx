import { expect } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";

import type { ReactRenderer } from "@storybook/react";
import type { PlayFunctionContext, Renderer } from "@storybook/types";

/**
 * NumberInput testing suite.
 */
export const numberInputState = async <R extends Renderer = ReactRenderer>({
  canvasElement,
  step,
}: PlayFunctionContext<R>) => {
  const canvas = within(canvasElement as HTMLElement);

  const numberInput = canvas.getByPlaceholderText("Placeholder");

  await step(
    "It should change numberInput value if a number is typed",
    async () => {
      await userEvent.type(numberInput, "2", {
        delay: 100,
      });

      await expect(numberInput).toHaveValue(2);
    },
  );

  await step(
    "It should not change numberInput value if a non-numeric value is typed",
    async () => {
      await userEvent.keyboard("delete");
      await userEvent.type(numberInput, "q", {
        delay: 100,
      });

      await expect(numberInput).not.toHaveValue("q");
      await expect(numberInput).toHaveValue(null);
    },
  );
};
