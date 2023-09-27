import { expect } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";

import { sleep } from "lib/utils";

import type { ReactRenderer } from "@storybook/react";
import type { PlayFunctionContext, Renderer } from "@storybook/types";

/**
 * DatePicker testing suite.
 */
export const datePickerState = async <R extends Renderer = ReactRenderer>({
  canvasElement,
  step,
}: PlayFunctionContext<R>) => {
  const canvas = within(canvasElement as HTMLElement);

  const triggerButton = await canvas.findByRole("button", {
    name: /calendar icon/i,
  });

  const input = await canvas.findByRole("textbox");

  await step("Opens the date picker on trigger click", async () => {
    await userEvent.click(triggerButton);

    const chevronLeftButton = await within(document.body).findByRole("button", {
      name: /chevron left icon/i,
    });

    const viewTrigger = await within(document.body).findByRole("button", {
      name: /view trigger/i,
    });

    const chevronRightButton = await within(document.body).findByRole(
      "button",
      {
        name: /chevron right icon/i,
      },
    );

    await expect(chevronLeftButton).toBeInTheDocument();
    await expect(viewTrigger).toBeInTheDocument();
    await expect(chevronRightButton).toBeInTheDocument();
  });

  await step("Navigates to month view", async () => {
    const viewTrigger = await within(document.body).findByRole("button", {
      name: /view trigger/i,
    });

    await userEvent.click(viewTrigger);

    const monthCell = await within(document.body).findByRole("button", {
      name: /Jan/,
    });

    await expect(monthCell).toBeInTheDocument();
  });

  await step("Navigates to year view", async () => {
    const viewTrigger = await within(document.body).findByRole("button", {
      name: /view trigger/i,
    });

    await userEvent.click(viewTrigger);

    await userEvent.click(viewTrigger);

    const yearCells = await within(document.body).findAllByRole("button", {
      name: /2023/,
    });

    await expect(yearCells.length).toBeGreaterThan(0);
  });

  await step("Selects a date", async () => {
    const yearTriggers = await within(document.body).findAllByRole("button", {
      name: /2023/,
    });

    await userEvent.click(yearTriggers[0]);

    const monthCell = await within(document.body).findByRole("button", {
      name: /Sep/,
    });

    await userEvent.click(monthCell);

    const someDateCell = await within(document.body).findAllByRole("button", {
      name: /4/,
    });

    await userEvent.click(someDateCell[0]);
    await sleep(1000);
    await userEvent.click(someDateCell[0]);

    await expect(input).toHaveValue("09/04/2023 - 09/04/2023"); // Adjust based on your date format
  });

  await step("Selects a date range", async () => {
    await userEvent.click(triggerButton);

    const someDateCell = await within(document.body).findAllByRole("button", {
      name: /4/,
    });

    await userEvent.click(someDateCell[0]);
    await sleep(1000);
    await userEvent.click(someDateCell[1]);

    await expect(input).toHaveValue("09/04/2023 - 09/14/2023"); // Adjust based on your date format
  });
};
