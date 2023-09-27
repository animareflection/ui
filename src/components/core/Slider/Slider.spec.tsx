import { expect } from "@storybook/jest";
import { within, userEvent } from "@storybook/testing-library";

import type { ReactRenderer } from "@storybook/react";
import type { PlayFunctionContext, Renderer } from "@storybook/types";

/**
 * Slider testing suite.
 */
export const sliderState = async <R extends Renderer = ReactRenderer>({
  canvasElement,
  step,
}: PlayFunctionContext<R>) => {
  const canvas = within(canvasElement as HTMLElement);

  const thumb = await canvas.findByRole("slider");

  thumb.focus();

  await step("It should move thumb to the left/right", async () => {
    await userEvent.keyboard("[ArrowRight]");
    await expect(thumb).toHaveAttribute("aria-valuenow", "1");
    await userEvent.keyboard("[ArrowRight]");
    await expect(thumb).toHaveAttribute("aria-valuenow", "2");

    await userEvent.keyboard("[ArrowLeft]");
    await expect(thumb).toHaveAttribute("aria-valuenow", "1");
  });

  await step("It should move thumb to the beginning/end", async () => {
    await userEvent.keyboard("[Home]");
    await expect(thumb).toHaveAttribute("aria-valuenow", "0");

    await userEvent.keyboard("[End]");
    await expect(thumb).toHaveAttribute("aria-valuenow", "100");
  });
};
