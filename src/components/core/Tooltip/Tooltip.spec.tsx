import { expect } from "@storybook/jest";
import { screen, userEvent, within } from "@storybook/testing-library";

import { sleep } from "lib/util";

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

  await sleep(100);

  const hoverButton = canvas.getByText(/tooltip/i);

  await step("It should open tooltip on button hover", async () => {
    await userEvent.hover(hoverButton);

    const tooltipTitle = screen.getByText("Tooltip Title");

    await expect(tooltipTitle).toBeVisible();
  });

  await step("It should close tooltip when the hover ends", async () => {
    const tooltipTitle = screen.getByText("Tooltip Title");

    await userEvent.unhover(hoverButton);

    await expect(tooltipTitle).not.toBeVisible();
  });
};
