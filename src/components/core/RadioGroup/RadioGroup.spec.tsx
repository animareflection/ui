import { expect } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";

import { sleep } from "lib/util";

import type { ReactRenderer } from "@storybook/react";
import type { PlayFunctionContext, Renderer } from "@storybook/types";

/**
 * RadioGroup testing suite.
 */
export const radioGroupState = async <R extends Renderer = ReactRenderer>({
  canvasElement,
  step,
}: PlayFunctionContext<R>) => {
  const canvas = within(canvasElement as HTMLElement);

  await sleep(100);

  const firstRadio = canvas.getByText("React");
  const secondRadio = canvas.getByText("Solid");
  const thirdRadio = canvas.getByText("Vue");

  const radioInput1 = canvas.getByRole("radio", {
    name: "React",
  });
  const radioInput2 = canvas.getByRole("radio", {
    name: "Solid",
  });
  const radioInput3 = canvas.getByRole("radio", {
    name: "Vue",
  });

  await step("It should select the radio button when clicked", async () => {
    await userEvent.click(firstRadio);
    await expect(radioInput1).toBeChecked();

    await userEvent.click(secondRadio);
    await expect(radioInput2).toBeChecked();

    await userEvent.click(thirdRadio);
    await expect(radioInput3).toBeChecked();
  });
};
