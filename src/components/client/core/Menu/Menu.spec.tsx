import { expect } from "@storybook/jest";
import { screen, userEvent, within } from "@storybook/testing-library";

import type { ReactRenderer } from "@storybook/react";
import type { PlayFunctionContext, Renderer } from "@storybook/types";

/**
 * Test menu opening and closing.
 */
export const openState = async <R extends Renderer = ReactRenderer>({
  canvasElement,
}: PlayFunctionContext<R>) => {
  const canvas = within(canvasElement as HTMLElement);

  const openButton = canvas.getByRole("button", {
    name: /open menu/i,
  });

  await userEvent.click(openButton);

  const closeButton = screen.getByRole("button", {
    name: /close/i,
  });

  await expect(closeButton).toBeVisible();

  await userEvent.click(closeButton);

  await expect(closeButton).not.toBeVisible();
};
