import { erc20Abi } from "viem";
import { useBalance, useReadContracts } from "wagmi";

import { formatUnits } from "lib/utils/web3";

export interface Options {
  address: `0x${string}`;
  erc20Token?: `0x${string}`;
}

/**
 * Hook used to determine a given address' ERC20 or Native Currency balance.
 */
const useCurrencyBalance = ({ address, erc20Token }: Options) => {
  const erc20Contract = {
    address: erc20Token,
    abi: erc20Abi,
  } as const;

  const { data: nativeCurrencyBalance } = useBalance({
      address,
      query: {
        select: (data) => {
          return {
            balance: data.value
              ? formatUnits({
                  value: data.value,
                  decimals: data.decimals,
                })
              : undefined,
            symbol: data.symbol,
          };
        },
      },
    }),
    { data: erc20TokenBalance } = useReadContracts({
      contracts: [
        {
          ...erc20Contract,
          functionName: "balanceOf",
          args: [address],
        },
        {
          ...erc20Contract,
          functionName: "decimals",
        },
        {
          ...erc20Contract,
          functionName: "symbol",
        },
      ],
      query: {
        select: (data) => {
          const [balance, decimals, symbol] = data;

          return {
            balance:
              balance.result && decimals.result
                ? formatUnits({
                    value: balance.result,
                    decimals: decimals.result,
                  })
                : undefined,
            symbol: symbol.result,
          };
        },
      },
    });

  const balance = erc20TokenBalance?.balance ?? nativeCurrencyBalance?.balance,
    symbol = erc20TokenBalance?.symbol ?? nativeCurrencyBalance?.symbol;

  return { balance, symbol };
};

export default useCurrencyBalance;
