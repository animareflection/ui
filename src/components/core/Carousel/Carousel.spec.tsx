import { expect } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";

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

  const prevButton = canvas.getByLabelText(/previous/i);

  const nextButton = canvas.getByLabelText(/next/i);

  await step(
    "Previous slide button should be disabled when first slide is shown",
    async () => {
      await expect(prevButton).toBeDisabled();
    },
  );

  await step(
    "It should go to next slide on next slide button click",
    async () => {
      await userEvent.click(nextButton);

      const indicator = canvas.getByLabelText(/goto slide 2/i);

      await expect(indicator).toHaveAttribute("data-current");
    },
  );

  await step(
    "It should go to previous slide on previous slide button click",
    async () => {
      await userEvent.click(prevButton);

      const indicator = canvas.getByLabelText(/goto slide 1/i);

      await expect(indicator).toHaveAttribute("data-current");
    },
  );

  await step("It should go to slide on indicator click", async () => {
    const indicator = canvas.getByLabelText(/goto slide 3/i);

    await userEvent.click(indicator);

    await expect(indicator).toHaveAttribute("data-current");
  });

  await step(
    "Next slide button should be disabled when last slide is shown",
    async () => {
      const lastIndicator = canvas.getByLabelText(/goto slide 5/i);

      await userEvent.click(lastIndicator);

      await expect(nextButton).toBeDisabled();
    },
  );
};
