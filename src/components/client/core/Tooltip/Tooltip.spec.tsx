import { expect } from "@storybook/jest";
import { screen, userEvent, within } from "@storybook/testing-library";

import type { ReactRenderer } from "@storybook/react";
import type { PlayFunctionContext, Renderer } from "@storybook/types";

/**
 * Tooltip testing suite.
 */
export const tooltipState = async <R extends Renderer = ReactRenderer>({
  canvasElement,
  step,
}: PlayFunctionContext<R>) => {
  const canvas = within(canvasElement as HTMLElement);

  const hoverButton = canvas.getByText("Open Tooltip");

  await step("It should open tooltip on button hover", async () => {
    await userEvent.hover(hoverButton);

    const tooltipTitle = screen.getByText("Tooltip Title");

    await expect(tooltipTitle).toBeVisible();
  });

  await step("It should close tooltip when the hover ends", async () => {
    await userEvent.unhover(hoverButton);

    const tooltipTitle = screen.getByText("Tooltip Title");

    await expect(tooltipTitle).not.toBeVisible();
  });
};
