import { expect } from "@storybook/jest";
import { within } from "@storybook/testing-library";

import { sleep } from "lib/utils";

import type { ReactRenderer } from "@storybook/react";
import type { PlayFunctionContext, Renderer } from "@storybook/types";

/**
 * Test button onClick event fires correctly.
 */
export const onClickEvent = async <R extends Renderer = ReactRenderer>({
  canvasElement,
}: PlayFunctionContext<R>) => {
  const canvas = within(canvasElement as HTMLElement);

  const button = await canvas.findByRole("button", {
    name: /clicks:/i,
  });

  await expect(button).toBeInTheDocument();

  await sleep(1000);

  button.click();

  await sleep(1000);

  await expect(button).toHaveTextContent(/clicks: 1/i);
};
