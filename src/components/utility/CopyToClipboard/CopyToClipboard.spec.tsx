import { expect } from "@storybook/jest";
import { screen, userEvent, within } from "@storybook/testing-library";

import { sleep } from "lib/utils";

import type { ReactRenderer } from "@storybook/react";
import type { PlayFunctionContext, Renderer } from "@storybook/types";

/**
 * CopyToClipboard testing suite.
 */
export const copyState = async <R extends Renderer = ReactRenderer>({
  canvasElement,
  step,
}: PlayFunctionContext<R>) => {
  const canvas = within(canvasElement as HTMLElement);

  await sleep(100);

  const trigger = await canvas.findByRole("button");

  await step("It should show tooltip on hover", async () => {
    await userEvent.hover(trigger);

    const copyText = screen.getByText("Copy");

    await expect(copyText).toBeVisible();
  });

  await step("It shouldn't show tooltip when not hovered", async () => {
    await userEvent.unhover(trigger);

    const copyText = screen.queryByText("Copy");

    await expect(copyText).not.toBeInTheDocument();
  });

  // TODO: add more interaction tests when Clipboard API is mocked and accessible
};
