import {
  PrimitiveSlider,
  PrimitiveSliderControl,
  PrimitiveSliderLabel,
  PrimitiveSliderMarker,
  PrimitiveSliderMarkerGroup,
  PrimitiveSliderRange,
  PrimitiveSliderThumb,
  PrimitiveSliderTrack,
} from "components/primitives";
import { slider } from "generated/panda/recipes";
import { useIsMounted } from "lib/hooks";

import type { PrimitiveSliderProps } from "components/primitives";
import type { JsxStyleProps } from "generated/panda/types";

export interface SliderMarkerRecord {
  id: string;
  value: number;
  label: string;
}

export interface Props extends PrimitiveSliderProps {
  label?: string;
  markers?: SliderMarkerRecord[];
  maxW?: JsxStyleProps["maxW"];
}

/**
 * Core UI slider.
 */
const Slider = ({ label, markers, maxW, ...rest }: Props) => {
  const classNames = slider();

  const isMounted = useIsMounted();

  if (!isMounted) return null;

  return (
    <PrimitiveSlider className={classNames.root} {...rest}>
      {label && (
        <PrimitiveSliderLabel className={classNames.label}>
          {label}
        </PrimitiveSliderLabel>
      )}
      <PrimitiveSliderControl className={classNames.control} maxW={maxW}>
        <PrimitiveSliderTrack className={classNames.track} maxW={maxW}>
          <PrimitiveSliderRange className={classNames.range} />
        </PrimitiveSliderTrack>

        <PrimitiveSliderThumb className={classNames.thumb} />
      </PrimitiveSliderControl>
      {markers && (
        <PrimitiveSliderMarkerGroup
          className={classNames.markerGroup}
          maxW={maxW}
        >
          {markers.map(({ id, value, label }) => (
            <PrimitiveSliderMarker
              key={id}
              value={value}
              className={classNames.marker}
            >
              {label}
            </PrimitiveSliderMarker>
          ))}
        </PrimitiveSliderMarkerGroup>
      )}
    </PrimitiveSlider>
  );
};

export default Slider;
