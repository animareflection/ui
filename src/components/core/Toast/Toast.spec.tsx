import { expect } from "@storybook/jest";
import { screen, within, userEvent } from "@storybook/testing-library";

import { sleep } from "lib/utils";

import type { ReactRenderer } from "@storybook/react";
import type { PlayFunctionContext, Renderer } from "@storybook/types";

/**
 * Toast testing suite.
 */
export const toastState = async <R extends Renderer = ReactRenderer>({
  canvasElement,
  step,
}: PlayFunctionContext<R>) => {
  const canvas = within(canvasElement as HTMLElement);

  const trigger = await canvas.findByRole("button", { name: "Make a Toast" });

  await step("It should open and close toast", async () => {
    await userEvent.click(trigger);

    const toast = await screen.findByText("Hello!");

    await expect(toast).toBeInTheDocument();

    const closeTrigger = screen.getByLabelText("Close Toast");

    await sleep(1000);

    await userEvent.click(closeTrigger);

    await sleep(2000);

    await expect(toast).not.toBeInTheDocument();
  });
};

export default toastState;
