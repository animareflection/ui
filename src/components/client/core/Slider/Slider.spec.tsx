import { expect } from "@storybook/jest";
import { within, userEvent } from "@storybook/testing-library";

import type { ReactRenderer } from "@storybook/react";
import type { PlayFunctionContext, Renderer } from "@storybook/types";

/**
 * Test slider thumb moves correctly.
 */
export const movementState = async <R extends Renderer = ReactRenderer>({
  canvasElement,
}: PlayFunctionContext<R>) => {
  const canvas = within(canvasElement as HTMLElement);

  const thumb = await canvas.findByRole("slider");

  thumb.focus();

  await userEvent.keyboard("[ArrowRight]", {
    delay: 100,
  });
  await expect(thumb).toHaveAttribute("aria-valuenow", "1");

  await userEvent.keyboard("[ArrowRight]", {
    delay: 100,
  });
  await expect(thumb).toHaveAttribute("aria-valuenow", "2");

  await userEvent.keyboard("[Home]", {
    delay: 100,
  });
  await expect(thumb).toHaveAttribute("aria-valuenow", "0");

  await userEvent.keyboard("[End]", {
    delay: 100,
  });
  await expect(thumb).toHaveAttribute("aria-valuenow", "100");
};
