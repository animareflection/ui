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

  const baseUrl = await canvas.findByText("🏝️");
  await expect(baseUrl).toBeInTheDocument();

  await step(
    "It should display each address segment separated by the SeparatorIcon",
    async () => {
      const segment1 = canvas.getByText("ethereum");
      const segment2 = canvas.getByText("collections");
      const segment3 = canvas.getByText(
        "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
      );
      canvas;

      await expect(segment1).toBeInTheDocument();
      await expect(segment2).toBeInTheDocument();
      await expect(segment3).toBeInTheDocument();
    },
  );

  await step(
    "It should display each address segment separated by the SeparatorIcon",
    async () => {
      const separatorIcons = canvas.getAllByLabelText("separator-icon");
      void expect(separatorIcons).toHaveLength(3);
    },
  );
};
