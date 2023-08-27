import { expect } from "@storybook/jest";
import { within } from "@storybook/testing-library";

import { sleep } from "lib/utils";

import type { ReactRenderer } from "@storybook/react";
import type { PlayFunctionContext, Renderer } from "@storybook/types";

// TODO implement `userEvent` simulation package from `@storybook/testing-library` instead of native HTML browser click event (e.g. `await userEvent.click(openButton);` instead of `openButton.click();`); https://trello.com/c/Ez0nSBmA/152-implement-userevent-in-story-play-tests

/**
 * Test accordion opening and closing.
 */
export const openState = async <R extends Renderer = ReactRenderer>({
  canvasElement,
}: PlayFunctionContext<R>) => {
  const canvas = within(canvasElement as HTMLElement);

  const panelOneButton = canvas.getByRole("button", {
    name: /panel 1/i,
  });

  const panelTwoButton = canvas.getByRole("button", {
    name: /panel 2/i,
  });

  panelOneButton.click();

  await sleep(2000);

  const accordionPanelOneContent = canvas.getByText(/Panel 1 content/i);

  await expect(accordionPanelOneContent).toBeInTheDocument();

  panelTwoButton.click();

  await sleep(2000);

  const accordionPanelTwoContent = canvas.getByText(/Panel 2 content/i);

  await expect(accordionPanelOneContent).toBeInTheDocument();

  await expect(accordionPanelTwoContent).toBeInTheDocument();

  panelOneButton.click();

  await sleep(2000);

  await expect(accordionPanelOneContent).not.toBeInTheDocument();

  panelTwoButton.click();

  await sleep(2000);

  await expect(accordionPanelTwoContent).not.toBeInTheDocument();
};
