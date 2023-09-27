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

  const labelElement = canvas.getByText("Floor Price");
  const valueElement = canvas.getByText("$10.85");
  const helpText = canvas.getByText("12.35%");
  const indicatorElement = canvas.queryByTestId("indicator");

  await step("renders the provided title and value", async () => {
    await expect(labelElement).toBeInTheDocument();
    await expect(valueElement).toBeInTheDocument();
  });

  await step("renders the helpText if provided", async () => {
    await expect(helpText).toBeInTheDocument();
  });

  await step("renders the indicator if provided", async () => {
    await expect(indicatorElement).toBeInTheDocument();
  });
};
