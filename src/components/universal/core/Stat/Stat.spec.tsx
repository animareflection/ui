import { expect } from "@storybook/jest";
import { within } from "@storybook/testing-library";

import type { ReactRenderer } from "@storybook/react";
import type { PlayFunctionContext, Renderer } from "@storybook/types";

/**
 * Stat testing suite.
 */
export const statState = async <R extends Renderer = ReactRenderer>({
  canvasElement,
  step,
}: PlayFunctionContext<R>) => {
  const canvas = within(canvasElement as HTMLElement);

  const labelElement = canvas.getByText("Likes");
  const valueElement = canvas.getByText("49");
  const iconElement = canvas.queryByTestId("icon");

  await step("renders the provided title and value", async () => {
    await expect(labelElement).toBeInTheDocument();
    await expect(valueElement).toBeInTheDocument();
  });

  await step("renders the icon if provided", async () => {
    await expect(iconElement).toBeInTheDocument();
  });
};
