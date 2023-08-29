import { expect } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";

import type { ReactRenderer } from "@storybook/react";
import type { PlayFunctionContext, Renderer } from "@storybook/types";

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

  await userEvent.click(panelOneButton);

  const accordionPanelOneContent = canvas.getByText(/Panel 1 content/i);

  await expect(accordionPanelOneContent).toBeInTheDocument();

  await userEvent.click(panelTwoButton);

  const accordionPanelTwoContent = canvas.getByText(/Panel 2 content/i);

  await expect(accordionPanelOneContent).toBeInTheDocument();

  await expect(accordionPanelTwoContent).toBeInTheDocument();

  await userEvent.click(panelOneButton);

  await expect(accordionPanelOneContent).not.toBeInTheDocument();

  await userEvent.click(panelTwoButton);

  await expect(accordionPanelTwoContent).not.toBeInTheDocument();
};
