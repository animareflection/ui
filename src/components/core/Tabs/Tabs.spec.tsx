import { expect } from "@storybook/jest";
import { within, userEvent } from "@storybook/testing-library";

import type { ReactRenderer } from "@storybook/react";
import type { PlayFunctionContext, Renderer } from "@storybook/types";

/**
 * Tabs testing suite.
 */
export const tabState = async <R extends Renderer = ReactRenderer>({
  canvasElement,
  step,
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

  await step("It should show tab 1 content by default", async () => {
    const tab1Content = await canvas.findByText(/Tab 1 content/i);

    await expect(tab1Content).toBeVisible();
  });

  await step(
    "It should show the active panel and hide the other panels",
    async () => {
      await userEvent.click(tab2);

      const tab2Content = await canvas.findByText(/Tab 2 content/i);
      await expect(tab2Content).toBeVisible();

      await userEvent.click(tab1);

      const tab1Content = await canvas.findByText(/Tab 1 content/i);
      await expect(tab1Content).toBeVisible();
      await expect(tab2Content).not.toBeVisible();
    },
  );

  await step("It should not show the tab panel when disabled", async () => {
    await userEvent.click(tab3);

    const tab3Content = canvas.queryByText(/Tab 3 content/i);
    await expect(tab3Content).toBeNull();
  });

  // TODO: Fix this test (flaky).
  // await step(
  //   "It should appropriately focus the tab on arrow left/right",
  //   async () => {
  //     await userEvent.click(tab1);

  //     await userEvent.keyboard("[ArrowRight]");
  //     await expect(tab2).toHaveFocus();

  //     await userEvent.keyboard("[ArrowRight]");
  //     await expect(tab3).not.toHaveFocus();
  //     await expect(tab1).toHaveFocus();

  //     await userEvent.keyboard("[ArrowLeft]");
  //     await expect(tab2).toHaveFocus();
  //   },
  // );
};
