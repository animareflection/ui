import { expect } from "@storybook/jest";
import { screen, within } from "@storybook/testing-library";

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

  const baseUrl = await canvas.findByText("🏝️");
  await expect(baseUrl).toBeInTheDocument();

  await step(
    "It should display each address segment separated by the SeparatorIcon",
    async () => {
      const segment1 = screen.getByText("ethereum");
      const segment2 = screen.getByText("collections");
      const segment3 = screen.getByText(
        "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
      );

      await expect(segment1).toBeInTheDocument();
      await expect(segment2).toBeInTheDocument();
      await expect(segment3).toBeInTheDocument();
    },
  );

  await step(
    "It should display each address segment separated by the SeparatorIcon",
    async () => {
      const separatorIcons = screen.getAllByLabelText("separator-icon");
      void expect(separatorIcons).toHaveLength(3);
    },
  );
};
