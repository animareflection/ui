import { expect } from "@storybook/jest";
import { screen, userEvent, within } from "@storybook/testing-library";

import { sleep } from "lib/util";

import type { ReactRenderer } from "@storybook/react";
import type { PlayFunctionContext, Renderer } from "@storybook/types";

/**
 * Menu testing suite.
 */
export const menuState = async <R extends Renderer = ReactRenderer>({
  canvasElement,
  step,
}: PlayFunctionContext<R>) => {
  const canvas = within(canvasElement as HTMLElement);

  await sleep(100);

  const openButton = canvas.getByRole("button", {
    name: /open menu/i,
  });

  await step("It should open the menu on click", async () => {
    await userEvent.click(openButton);

    const closeButton = screen.getByRole("button", {
      name: /close/i,
    });

    await expect(closeButton).toBeVisible();
  });

  await step("It should close the menu on click", async () => {
    const closeButton = screen.getByRole("button", {
      name: /close/i,
    });

    await userEvent.click(closeButton);

    await expect(closeButton).not.toBeVisible();
  });
};
