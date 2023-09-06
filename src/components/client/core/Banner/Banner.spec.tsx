import { expect } from "@storybook/jest";
import { screen, userEvent, within } from "@storybook/testing-library";

import type { ReactRenderer } from "@storybook/react";
import type { PlayFunctionContext, Renderer } from "@storybook/types";

/**
 * Banner testing suite
 */
export const bannerState = async <R extends Renderer = ReactRenderer>({
  canvasElement,
  step,
}: PlayFunctionContext<R>) => {
  const canvas = within(canvasElement as HTMLElement);

  const closeButton = await canvas.findByRole("button");

  await expect(closeButton).toBeInTheDocument();

  await step("It should close banner on close button click", async () => {
    const bannerTitle = screen.getByText("Banner");

    await expect(bannerTitle).toBeVisible();

    await userEvent.click(closeButton);

    await expect(bannerTitle).not.toBeVisible();
  });
};
