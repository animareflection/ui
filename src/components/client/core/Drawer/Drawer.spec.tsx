import { expect } from "@storybook/jest";
import { screen, userEvent, within } from "@storybook/testing-library";

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

  await userEvent.click(openButton);

  await sleep(1000);

  const drawerTitle = screen.getByText("Drawer Title");

  await expect(drawerTitle).toBeVisible();

  const closeButton = screen.getByRole("button", {
    name(_accessibleName, element) {
      // eslint-disable-next-line testing-library/no-node-access
      return element?.closest("div")?.getAttribute("role") === "dialog";
    },
  });

  await userEvent.click(closeButton);

  await expect(drawerTitle).not.toBeVisible();
};
