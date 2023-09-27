import { expect } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";

import { sleep } from "lib/utils";

import type { ReactRenderer } from "@storybook/react";
import type { PlayFunctionContext, Renderer } from "@storybook/types";

/**
 * Accordion testing suite.
 */
export const accordionState = async <R extends Renderer = ReactRenderer>({
  canvasElement,
  step,
}: PlayFunctionContext<R>) => {
  const canvas = within(canvasElement as HTMLElement);

  await sleep(100);

  const triggerOne = canvas.getByRole("button", {
    name: /panel 1/i,
  });

  const triggerTwo = canvas.getByRole("button", {
    name: /panel 2/i,
  });

  const triggerThree = canvas.getByRole("button", {
    name: /panel 3/i,
  });

  await step("It should open accordion item on click", async () => {
    await userEvent.click(triggerOne);

    const itemOne = canvas.getByText(/Panel 1 content/i);

    await expect(itemOne).toBeInTheDocument();
  });

  await step("It should close accordion item on click", async () => {
    await userEvent.click(triggerOne);

    await expect(triggerOne).toHaveAttribute("aria-expanded", "false");
  });

  await step("It should open multiple accordion items", async () => {
    await userEvent.click(triggerOne);
    await userEvent.click(triggerTwo);

    const itemOne = canvas.getByText(/Panel 1 content/i);
    const itemTwo = canvas.getByText(/Panel 2 content/i);

    await expect(itemOne).toBeInTheDocument();
    await expect(itemTwo).toBeInTheDocument();
  });

  await step(
    "It should focus the next/previous triggers on arrow down/up",
    async () => {
      triggerOne.focus();

      await userEvent.keyboard("[ArrowDown]");
      await expect(triggerTwo).toHaveFocus();

      await userEvent.keyboard("[ArrowUp]");
      await expect(triggerOne).toHaveFocus();
    },
  );

  await step(
    "It should focus the first/last triggers on home/end",
    async () => {
      triggerOne.focus();

      await userEvent.keyboard("[End]");
      await expect(triggerThree).toHaveFocus();

      await userEvent.keyboard("[Home]");
      await expect(triggerOne).toHaveFocus();
    },
  );

  await step("It should focus the next trigger on tab", async () => {
    triggerOne.focus();

    await userEvent.keyboard("[Tab]");
    await expect(triggerTwo).toHaveFocus();

    await userEvent.keyboard("[Tab]");
    await expect(triggerThree).toHaveFocus();
  });
};
