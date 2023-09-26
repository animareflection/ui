import {
  TbTriangleInvertedFilled as TriangleDown,
  TbTriangleFilled as TriangleUp,
} from "react-icons/tb";

import Icon from "components/client/core/Icon/Icon";
import { HStack, panda } from "generated/panda/jsx";
import { stat } from "generated/panda/recipes";

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
const Stat = ({
  value,
  label,
  helpText,
  variant,
  size,
  indicator,
  orientation,
  ...rest
}: Props) => {
  const classNames = stat({ variant, size, orientation });

  const indicatorColor = indicator === "decrease" ? "red.500" : "green.500";

  const IndicatorIcon =
    indicator === "decrease" ? <TriangleDown /> : <TriangleUp />;

  return (
    <panda.div className={classNames.root} {...rest}>
      <panda.div className={classNames.label}>{label}</panda.div>
      <panda.div className={classNames.value}>{value}</panda.div>
      <HStack alignItems="center" gap={1}>
        {indicator && (
          <Icon data-testid="indicator" h={3} w={3} color={indicatorColor}>
            {IndicatorIcon}
          </Icon>
        )}

        {helpText && (
          <panda.div className={classNames.helpText}>{helpText}</panda.div>
        )}
      </HStack>
    </panda.div>
  );
};

export default Stat;
