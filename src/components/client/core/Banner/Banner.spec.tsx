import { expect } from "@storybook/jest";
import { screen, userEvent, within } from "@storybook/testing-library";

import type { ReactRenderer } from "@storybook/react";
import type { PlayFunctionContext, Renderer } from "@storybook/types";

/**
 * Banner testing suite
 */
export const bannerState = async <R extends Renderer = ReactRenderer>({
  canvasElement,
  step,
}: PlayFunctionContext<R>) => {
  const canvas = within(canvasElement as HTMLElement);

  const button = await canvas.findByRole("button", {
    name: /banner/i,
  });

  await expect(button).toBeInTheDocument();

  await step("It should close banner on close button click", async () => {
    const closeButton = screen.getByRole("button", {
      name(_accessibleName, element) {
        // eslint-disable-next-line testing-library/no-node-access
        return element?.closest("div")?.getAttribute("role") === "banner";
      },
    });

    await userEvent.click(closeButton);

    const bannerTitle = screen.getByText("Banner");

    await expect(bannerTitle).not.toBeVisible();
  });
};
