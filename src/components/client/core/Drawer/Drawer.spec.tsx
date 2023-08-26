import { expect } from "@storybook/jest";
import { screen, within } from "@storybook/testing-library";

import { sleep } from "lib/utils";

import type { ReactRenderer } from "@storybook/react";
import type { PlayFunctionContext, Renderer } from "@storybook/types";

// TODO implement `userEvent` simulation package from `@storybook/testing-library` instead of native HTML browser click event (e.g. `await userEvent.click(openButton);` instead of `openButton.click();`); https://trello.com/c/Ez0nSBmA/152-implement-userevent-in-story-play-tests

/**
 * Test drawer opening and closing.
 */
export const openState = async <R extends Renderer = ReactRenderer>({
  canvasElement,
}: PlayFunctionContext<R>) => {
  const canvas = within(canvasElement as HTMLElement);

  const openButton = canvas.getByRole("button", {
    name: /open drawer/i,
  });

  openButton.click();

  await sleep(2000);

  const drawerTitle = screen.getByText("Drawer Title");

  await expect(drawerTitle).toBeInTheDocument();

  const closeButton = screen.getByRole("button");
  closeButton.click();

  await sleep(2000);

  await expect(drawerTitle).not.toBeInTheDocument();
};
