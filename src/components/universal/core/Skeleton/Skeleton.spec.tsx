import { expect } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";

import type { ReactRenderer } from "@storybook/react";
import type { PlayFunctionContext, Renderer } from "@storybook/types";

/**
 * Skeleton testing suite.
 */
export const skeletonState = async <R extends Renderer = ReactRenderer>({
  canvasElement,
  step,
}: PlayFunctionContext<R>) => {
  const canvas = within(canvasElement as HTMLElement);

  const skeleton = canvas.getByTestId("skeleton");
  const toggleButton = canvas.getByTestId("toggle");

  await step("Skeleton should be visible when not loaded", async () => {
    await expect(skeleton).toBeVisible();
  });

  await step("Skeleton should be hidden when loaded", async () => {
    await userEvent.click(toggleButton);

    await expect(skeleton).not.toBeVisible();
  });
};
