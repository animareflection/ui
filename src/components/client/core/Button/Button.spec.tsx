import { expect } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";

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

  await userEvent.click(button);

  await expect(button).toHaveTextContent(/clicks: 1/i);
};
