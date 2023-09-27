import { expect } from "@storybook/jest";
import { within } from "@storybook/testing-library";

import type { ReactRenderer } from "@storybook/react";
import type { PlayFunctionContext, Renderer } from "@storybook/types";

/**
 * Breadcrumb testing suite
 */
export const breadcrumbState = async <R extends Renderer = ReactRenderer>({
  canvasElement,
  step,
}: PlayFunctionContext<R>) => {
  const canvas = within(canvasElement as HTMLElement);

  const rootSegment = canvas.getByText("🏝️");
  const segment1 = canvas.getByText(/ethereum/i);
  const segment2 = canvas.getByText(/collections/i);
  const segment3 = canvas.getByText(
    "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
  );

  const separatorIcons = canvas.getAllByLabelText("separator-icon");

  await step("It should display each pathname segment", async () => {
    await expect(rootSegment).toBeInTheDocument();
    await expect(segment1).toBeInTheDocument();
    await expect(segment2).toBeInTheDocument();
    await expect(segment3).toBeInTheDocument();
  });

  await step("It should display correct number of SeparatorIcons", async () => {
    await expect(separatorIcons).toHaveLength(3);
  });
};
