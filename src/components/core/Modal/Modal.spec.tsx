import { expect } from "@storybook/jest";
import { screen, userEvent, within } from "@storybook/testing-library";

import { sleep } from "lib/utils";

import type { ReactRenderer } from "@storybook/react";
import type { PlayFunctionContext, Renderer } from "@storybook/types";

/**
 * Modal testing suite.
 */
export const modalState = async <R extends Renderer = ReactRenderer>({
  canvasElement,
  step,
}: PlayFunctionContext<R>) => {
  const canvas = within(canvasElement as HTMLElement);

  const openButton = canvas.getByRole("button", {
    name: /open modal/i,
  });

  await step("It should open modal on trigger click", async () => {
    await userEvent.click(openButton);

    await sleep(1000);

    const modalTitle = screen.getByText("Modal Title");

    await expect(modalTitle).toBeVisible();
  });

  await step("It should close modal on close button click", async () => {
    const closeButton = screen.getByRole("button", {
      name(_accessibleName, element) {
        // eslint-disable-next-line testing-library/no-node-access
        return element?.closest("div")?.getAttribute("role") === "dialog";
      },
    });

    await userEvent.click(closeButton);

    const modalTitle = screen.getByText("Modal Title");

    await expect(modalTitle).not.toBeVisible();
  });
};
