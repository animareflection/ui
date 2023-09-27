import { expect } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";

import { sleep } from "lib/utils";

import type { ReactRenderer } from "@storybook/react";
import type { PlayFunctionContext, Renderer } from "@storybook/types";

/**
 * Collapse testing suite.
 */
export const collapseState = async <R extends Renderer = ReactRenderer>({
  canvasElement,
}: PlayFunctionContext<R>) => {
  const canvas = within(canvasElement as HTMLElement);

  const trigger = await canvas.findByRole("button");

  await expect(trigger).toBeInTheDocument();

  await userEvent.click(trigger);

  const image = await canvas.findByRole("img");

  await sleep(1000);

  await expect(image).toBeVisible();

  await userEvent.click(trigger);

  await sleep(1000);

  await expect(image).not.toBeVisible();
};
