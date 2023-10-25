import { Text } from "components/core";
import { BlockchainProvider } from "components/providers";
import { Flex } from "generated/panda/jsx";
import { useCurrencyBalance } from "lib/hooks/web3";

import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentType } from "react";

type Story = StoryObj<typeof useCurrencyBalance>;

const NativeCurrencyExample = () => {
  const { balance, symbol } = useCurrencyBalance({
    address: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
  });

  if (!balance) return null;

  return (
    <Text mt={2}>{`Vitalik's ${symbol} balance: ${Number(balance).toFixed(
      4,
    )} ${symbol}`}</Text>
  );
};

const ERC20Example = () => {
  const { balance, symbol } = useCurrencyBalance({
    address: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
    erc20Token: "0xdd974D5C2e2928deA5F71b9825b8b646686BD200",
  });

  if (!balance) return null;

  return (
    <Text mt={2}>{`Vitalik's ${symbol} balance: ${balance} ${symbol}`}</Text>
  );
};

export const Currencies: Story = {
  render: () => (
    <Flex direction="column" gap={2}>
      <NativeCurrencyExample />
      <ERC20Example />
    </Flex>
  ),
};

const meta = {
  title: "Hooks/Web3/useCurrencyBalance",
  tags: ["autodocs"],
  // NB: type coercion here to allow `useCurrencyBalance` Storybook metadata to render (e.g. JSDoc, hook parameters)
  component: useCurrencyBalance as unknown as ComponentType,
  decorators: [
    (Story) => (
      <BlockchainProvider>
        <Story />
      </BlockchainProvider>
    ),
  ],
} satisfies Meta<typeof useCurrencyBalance>;

export default meta;
