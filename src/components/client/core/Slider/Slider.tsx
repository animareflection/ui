import {
  Slider as PrimitiveSlider,
  SliderControl,
  SliderLabel,
  SliderMarker,
  SliderMarkerGroup,
  SliderRange,
  SliderThumb,
  SliderTrack,
} from "components/primitives";
import { slider } from "generated/panda/recipes";

import type { SliderProps } from "components/primitives";

export interface SliderMarkerRecord {
  id: string;
  value: number;
  label: string;
}

export interface Props extends SliderProps {
  label?: string;
  markers?: SliderMarkerRecord[];
}

const Slider = ({ label, markers, ...rest }: Props) => {
  const classNames = slider();

  return (
    <PrimitiveSlider {...rest}>
      {label && <SliderLabel className={classNames.label}>{label}</SliderLabel>}
      <SliderControl className={classNames.control}>
        <SliderTrack className={classNames.track}>
          <SliderRange className={classNames.range} />
        </SliderTrack>

        <SliderThumb className={classNames.thumb} />
      </SliderControl>
      {markers && (
        <SliderMarkerGroup className={classNames.markerGroup}>
          {markers.map(({ id, value, label }) => (
            <SliderMarker key={id} value={value} className={classNames.marker}>
              {label}
            </SliderMarker>
          ))}
        </SliderMarkerGroup>
      )}
    </PrimitiveSlider>
  );
};

export default Slider;
