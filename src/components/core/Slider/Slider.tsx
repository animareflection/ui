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
import { useIsClient } from "lib/hooks";

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
 * Slider.
 */
const Slider = ({ label, markers, maxW, ...rest }: Props) => {
  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <PrimitiveSlider {...rest}>
      {label && <PrimitiveSliderLabel>{label}</PrimitiveSliderLabel>}
      <PrimitiveSliderControl maxW={maxW}>
        <PrimitiveSliderTrack maxW={maxW}>
          <PrimitiveSliderRange />
        </PrimitiveSliderTrack>

        <PrimitiveSliderThumb index={0} />
      </PrimitiveSliderControl>
      {markers && (
        <PrimitiveSliderMarkerGroup maxW={maxW}>
          {markers.map(({ id, value, label }) => (
            <PrimitiveSliderMarker key={id} value={value}>
              {label}
            </PrimitiveSliderMarker>
          ))}
        </PrimitiveSliderMarkerGroup>
      )}
    </PrimitiveSlider>
  );
};

export default Slider;
