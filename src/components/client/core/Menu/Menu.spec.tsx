import { expect } from "@storybook/jest";
import { screen, within, userEvent } from "@storybook/testing-library";

import type { ReactRenderer } from "@storybook/react";
import type { PlayFunctionContext, Renderer } from "@storybook/types";

// TODO implement `userEvent` simulation package from `@storybook/testing-library` instead of native HTML browser click event (e.g. `await userEvent.click(openButton);` instead of `openButton.click();`); https://trello.com/c/Ez0nSBmA/152-implement-userevent-in-story-play-tests

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

  // TODO: fix this test
  // await userEvent.click(closeButton);

  // await expect(closeButton).not.toBeVisible();
};
