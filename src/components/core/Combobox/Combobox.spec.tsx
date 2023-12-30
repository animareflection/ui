import { expect } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";

import { sleep } from "lib/util";

import type { ReactRenderer } from "@storybook/react";
import type { PlayFunctionContext, Renderer } from "@storybook/types";

/**
 * Combobox testing suite.
 */
export const comboboxState = async <R extends Renderer = ReactRenderer>({
  canvasElement,
  step,
}: PlayFunctionContext<R>) => {
  const canvas = within(canvasElement as HTMLElement);

  const input = canvas.getByRole("combobox");

  const trigger = canvas.getByLabelText("open options");

  const bananaOption = canvas.getByText("Banana");
  const vegetableGroup = canvas.getByText("Vegetables");

  await step("It should display options on trigger click", async () => {
    await expect(trigger).toBeVisible();

    await userEvent.click(trigger);

    await sleep(100);

    await expect(canvas.getByText("Apple")).toBeVisible();

    await userEvent.click(trigger);
  });

  await step("It should change input value on input change", async () => {
    await userEvent.click(input);

    await userEvent.type(input, "ap", {
      delay: 500,
    });

    await expect(input).toHaveValue("ap");
  });

  await step("It should filter options on input change", async () => {
    await expect(bananaOption).not.toBeVisible();
    await expect(vegetableGroup).not.toBeVisible();
  });
};
