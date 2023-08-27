import { expect } from "@storybook/jest";
import { within, userEvent } from "@storybook/testing-library";

import type { ReactRenderer } from "@storybook/react";
import type { PlayFunctionContext, Renderer } from "@storybook/types";

/**
 * Test tab content is displayed correctly.
 */
export const tabState = async <R extends Renderer = ReactRenderer>({
  canvasElement,
}: PlayFunctionContext<R>) => {
  const canvas = within(canvasElement as HTMLElement);

  const tab1 = await canvas.findByRole("tab", {
    name: /tab 1/i,
  });
  const tab2 = await canvas.findByRole("tab", {
    name: /tab 2/i,
  });
  const tab3 = await canvas.findByRole("tab", {
    name: /tab 3/i,
  });

  await userEvent.click(tab1);
  await expect(canvas.getByText(/tab 1 content/i)).toBeVisible();

  await userEvent.click(tab2);
  await expect(canvas.getByText(/tab 2 content/i)).toBeVisible();

  await userEvent.click(tab3);
  await expect(canvas.getByText(/tab 3 content/i)).toBeVisible();
};
