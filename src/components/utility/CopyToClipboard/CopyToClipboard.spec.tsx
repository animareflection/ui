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

  const user = userEvent.setup();

  const trigger = await canvas.findByRole("button");
  //   const input = await canvas.findByRole("textbox");

  await step("It should show copy text on hover", async () => {
    await user.hover(trigger);

    const copyText = screen.getByText("Copy");

    await expect(copyText).toBeVisible();
  });

  await step("It shouldn't show copy text when not hovered", async () => {
    await user.unhover(trigger);

    const copyText = screen.queryByText("Copy");

    await expect(copyText).not.toBeInTheDocument();
  });

  await step("It should show copied text on click", async () => {
    await user.hover(trigger);

    await user.click(trigger);

    await sleep(1000);

    const copiedText = screen.getByText("Copied to clipboard!");

    await expect(copiedText).toBeVisible();
  });

  // TODO: Fix this test. (Clipboard API not supported)
  //   await step("It should copy text to clipboard", async () => {
  //     await user.hover(trigger);

  //     await user.click(trigger);

  //     input.focus();

  //     await user.paste();

  //     await expect(input).toHaveValue("Text to Copy");
  //   });
};
