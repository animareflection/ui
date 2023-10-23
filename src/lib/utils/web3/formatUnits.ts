import { formatUnits as viemFormatUnits } from "viem";

interface Options {
  value: bigint;
  decimals?: number;
  precision?: number;
}

const formatUnits = ({ value, decimals = 18, precision }: Options) =>
  Number(viemFormatUnits(value, decimals)).toFixed(precision);

export default formatUnits;
