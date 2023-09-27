import { expect } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";

import type { ReactRenderer } from "@storybook/react";
import type { PlayFunctionContext, Renderer } from "@storybook/types";

/**
 * Avatar testing suite.
 */

export const avatarState = async <R extends Renderer = ReactRenderer>({
  canvasElement,
  step,
}: PlayFunctionContext<R>) => {
  const canvas = within(canvasElement as HTMLElement);

  const fallbackAvatar = canvas.getByText("AR");
  const toggleButton = await canvas.findByTestId("toggle");

  await step("renders fallback avatar when image is not provided", async () => {
    await expect(fallbackAvatar).toBeInTheDocument();
  });

  await step("renders fallback avatar when image fails to load", async () => {
    await expect(fallbackAvatar).toBeInTheDocument();
  });

  await step("It should render avatar correctly", async () => {
    await userEvent.click(toggleButton);
    const avatarImage = await canvas.findByRole("img");
    await expect(avatarImage).toHaveAttribute("src", "/img/logo.png");
    await expect(avatarImage).toHaveAttribute("alt", "avatar");
  });
};
