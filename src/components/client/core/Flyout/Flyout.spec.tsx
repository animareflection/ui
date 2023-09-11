import { expect } from "@storybook/jest";
import { screen, userEvent, within } from "@storybook/testing-library";

import { sleep } from "lib/utils";

import type { ReactRenderer } from "@storybook/react";
import type { PlayFunctionContext, Renderer } from "@storybook/types";

/**
 * Flyout testing suite.
 */
export const flyoutState = async <R extends Renderer = ReactRenderer>({
  canvasElement,
  step,
}: PlayFunctionContext<R>) => {
  const canvas = within(canvasElement as HTMLElement);

  const openButton = canvas.getByRole("button", {
    name: /open flyout/i,
  });

  await step("It should open flyout on trigger click", async () => {
    await userEvent.click(openButton);

    await sleep(1000);

    const flyoutTitle = screen.getByText("Flyout Title");

    await expect(flyoutTitle).toBeVisible();
  });

  await step("It should close flyout on close button click", async () => {
    const closeButton = screen.getByLabelText("close");
    const flyoutTitle = screen.getByText("Flyout Title");

    await userEvent.click(closeButton);

    await sleep(1000);

    await expect(flyoutTitle).not.toBeVisible();
  });
};
