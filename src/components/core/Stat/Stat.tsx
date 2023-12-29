import { ark } from "@ark-ui/react";
import {
  TbTriangleInvertedFilled as TriangleDown,
  TbTriangleFilled as TriangleUp,
} from "react-icons/tb";

import Icon from "components/core/Icon/Icon";
import { HStack, panda } from "generated/panda/jsx";
import { stat, type StatVariantProps } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

export interface Props extends StatVariantProps {
  value: string;
  label: string;
  helpText?: string;
  indicator?: "increase" | "decrease";
}

const { withProvider, withContext } = createStyleContext(stat);

// TODO extract primitives, add prop interfaces, and export both

const StatRoot = withProvider(panda(ark.div), "root");

const StatLabel = withContext(panda.div, "label");

const StatValue = withContext(panda.div, "value");

const StatHelpText = withContext(panda.div, "helpText");

/**
 * Core Stat component.
 */
const Stat = ({ value, label, helpText, indicator, ...rest }: Props) => {
  const indicatorColor = indicator === "decrease" ? "red.500" : "green.500";

  const IndicatorIcon =
    indicator === "decrease" ? <TriangleDown /> : <TriangleUp />;

  return (
    <StatRoot {...rest}>
      <StatLabel>{label}</StatLabel>

      <StatValue>{value}</StatValue>

      <HStack alignItems="center" gap={1}>
        {indicator && (
          <Icon data-testid="indicator" h={3} w={3} color={indicatorColor}>
            {IndicatorIcon}
          </Icon>
        )}

        {helpText && <StatHelpText>{helpText}</StatHelpText>}
      </HStack>
    </StatRoot>
  );
};

export default Stat;
