import { expect } from "@storybook/jest";
import { screen, within, userEvent } from "@storybook/testing-library";

import { sleep } from "lib/utils";

import type { ReactRenderer } from "@storybook/react";
import type { PlayFunctionContext, Renderer } from "@storybook/types";

/**
 * Wallet connection testing suite.
 */
export const walletConnectionState = async <
  R extends Renderer = ReactRenderer,
>({
  canvasElement,
  step,
}: PlayFunctionContext<R>) => {
  const canvas = within(canvasElement as HTMLElement);

  await step("It should open connect wallet modal", async () => {
    const connectButton = await canvas.findByRole("button", {
      name: "Connect",
    });

    await userEvent.click(connectButton);

    await sleep(1000);

    const mockConnector = screen.getByLabelText("Connect with Mock Connector");

    await expect(mockConnector).toBeInTheDocument();
  });

  await step("It should connect wallet", async () => {
    const mockConnector = screen.getByLabelText("Connect with Mock Connector");

    await userEvent.click(mockConnector);

    await sleep(1000);

    const disconnectButton = canvas.getByLabelText("Open Disconnect Modal");
    const networkMenu = canvas.getByLabelText("Open Network Menu");

    await expect(disconnectButton).toBeInTheDocument();
    await expect(networkMenu).toBeInTheDocument();
  });

  await step("It should open switch network menu", async () => {
    const networkMenu = canvas.getByLabelText("Open Network Menu");

    await userEvent.click(networkMenu);

    await sleep(1000);

    const arbitrumNetworkItem = screen.getByText("Arbitrum");

    await expect(arbitrumNetworkItem).toBeInTheDocument();
  });

  await step("It should switch network", async () => {
    const arbitrumNetworkItem = screen.getByText("Arbitrum");

    await userEvent.click(arbitrumNetworkItem);

    await sleep(1000);

    const currentChainImage = canvas.getByLabelText("Arbitrum One icon");

    await expect(currentChainImage).toBeInTheDocument();
  });

  await step("It should open disconnect wallet modal", async () => {
    const disconnectModalTrigger = canvas.getByLabelText(
      "Open Disconnect Modal",
    );

    await userEvent.click(disconnectModalTrigger);

    await sleep(1000);

    const disconnectButton = screen.getByLabelText("Disconnect Wallet");

    await expect(disconnectButton).toBeInTheDocument();
  });

  await step("It should disconnect wallet", async () => {
    const disconnectButton = screen.getByLabelText("Disconnect Wallet");

    await userEvent.click(disconnectButton);

    await sleep(2000);

    await expect(disconnectButton).not.toBeVisible();

    const connectButton = await canvas.findByRole("button", {
      name: "Connect",
    });

    await expect(connectButton).toBeVisible();
  });
};

export default walletConnectionState;
