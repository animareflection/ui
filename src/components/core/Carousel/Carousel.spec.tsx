import { expect } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";

import { sleep } from "lib/util";

import type { ReactRenderer } from "@storybook/react";
import type { PlayFunctionContext, Renderer } from "@storybook/types";

/**
 * Carousel testing suite.
 */
export const carouselState = async <R extends Renderer = ReactRenderer>({
  canvasElement,
  step,
}: PlayFunctionContext<R>) => {
  const canvas = within(canvasElement as HTMLElement);

  await sleep(100);

  const prevButton = canvas.getByLabelText(/previous/i);

  const nextButton = canvas.getByLabelText(/next/i);

  await step(
    "Previous item button should be disabled when first item is shown",
    async () => {
      await expect(prevButton).toBeDisabled();
    },
  );

  await step(
    "It should go to next item on next item button click",
    async () => {
      await userEvent.click(nextButton);

      const indicator = canvas.getByLabelText(/goto item 2/i);

      await expect(indicator).toHaveAttribute("data-current");
    },
  );

  await step(
    "It should go to previous item on previous item button click",
    async () => {
      await userEvent.click(prevButton);

      const indicator = canvas.getByLabelText(/goto item 1/i);

      await expect(indicator).toHaveAttribute("data-current");
    },
  );

  await step("It should go to item on indicator click", async () => {
    const indicator = canvas.getByLabelText(/goto item 3/i);

    await userEvent.click(indicator);

    await expect(indicator).toHaveAttribute("data-current");
  });

  await step(
    "Next item button should be disabled when last item is shown",
    async () => {
      const lastIndicator = canvas.getByLabelText(/goto item 5/i);

      await userEvent.click(lastIndicator);

      await expect(nextButton).toBeDisabled();
    },
  );
};
