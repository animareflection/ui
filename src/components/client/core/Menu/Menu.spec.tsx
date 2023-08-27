import { expect } from "@storybook/jest";
import { screen, userEvent, within } from "@storybook/testing-library";

import { sleep } from "lib/utils";

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

  await sleep(2000);

  const closeButton = screen.getByRole("button", {
    name: /close/i,
  });

  await expect(closeButton).toBeVisible();

  closeButton.click();

  await sleep(2000);

  await expect(closeButton).not.toBeVisible();
};
