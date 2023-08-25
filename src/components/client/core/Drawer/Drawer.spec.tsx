import { expect } from "@storybook/jest";
import { screen, within } from "@storybook/testing-library";

import { sleep } from "lib/utils";

import type { ReactRenderer } from "@storybook/react";
import type { PlayFunctionContext, Renderer } from "@storybook/types";

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

  // TODO implement below instead of native HTML browser click event
  // await userEvent.click(openButton);

  openButton.click();

  await sleep(2000);

  const drawerTitle = screen.getByText("Drawer Title");

  await expect(drawerTitle).toBeInTheDocument();

  const closeButton = screen.getByRole("button");
  closeButton.click();

  await sleep(2000);

  await expect(drawerTitle).not.toBeInTheDocument();

  // TODO determine if below is better practice than `screen` utility
  // const body = canvasElement.ownerDocument.body;
  // await expect(within(body).getByText("Drawer Title")).toBeInTheDocument();
};
