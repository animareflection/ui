import {
  TbTriangleInvertedFilled as TriangleDown,
  TbTriangleFilled as TriangleUp,
} from "react-icons/tb";

import Icon from "components/core/Icon/Icon";
import { HStack, panda } from "generated/panda/jsx";

import type { StatVariantProps } from "generated/panda/recipes";

export interface Props extends StatVariantProps {
  value: string;
  label: string;
  helpText?: string;
  indicator?: "increase" | "decrease";
}

/**
 * Core Stat component.
 */
const Stat = ({ value, label, helpText, indicator, ...rest }: Props) => {
  const indicatorColor = indicator === "decrease" ? "red.500" : "green.500";

  const IndicatorIcon =
    indicator === "decrease" ? <TriangleDown /> : <TriangleUp />;

  return (
    <panda.div {...rest}>
      <panda.div>{label}</panda.div>
      <panda.div>{value}</panda.div>
      <HStack alignItems="center" gap={1}>
        {indicator && (
          <Icon data-testid="indicator" h={3} w={3} color={indicatorColor}>
            {IndicatorIcon}
          </Icon>
        )}

        {helpText && <panda.div>{helpText}</panda.div>}
      </HStack>
    </panda.div>
  );
};

export default Stat;
