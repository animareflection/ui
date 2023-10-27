import { erc20Abi } from "viem";
import { useBalance as useWagmiBalance, useReadContracts } from "wagmi";

import { formatUnits } from "lib/utils/web3";

import type { UseBalanceParameters } from "wagmi";

export interface Options extends UseBalanceParameters {
  token?: `0x${string}`;
  precision?: number;
}

/**
 * Hook used to determine a given address' ERC20 or Native Currency balance.
 */
const useBalance = ({ address, token, precision, ...rest }: Options) => {
  const erc20Contract = {
    address: token,
    abi: erc20Abi,
    ...rest,
  } as const;

  const nativeCurrencyBalance = useWagmiBalance({
      address,
      ...rest,
      query: {
        select: (data) => {
          return {
            ...data,
            formatted: formatUnits({
              value: data.value,
              decimals: data.decimals,
              precision,
            }),
          };
        },
      },
    }),
    erc20TokenBalance = useReadContracts({
      contracts: [
        {
          ...erc20Contract,
          functionName: "balanceOf",
          args: [address!],
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
            decimals: decimals.result ?? 18,
            formatted: formatUnits({
              value: balance.result ?? 0n,
              decimals: decimals.result,
              precision,
            }),
            symbol: symbol.result ?? "ETH",
            value: balance.result ?? 0n,
          };
        },
      },
    });

  const balance = token ? erc20TokenBalance : nativeCurrencyBalance;

  return { ...balance };
};

export default useBalance;
