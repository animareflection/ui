import { Slider } from "@animareflection/ui/client";

import { Wrapper } from "components";

import type { SliderMarkerRecord } from "@animareflection/ui/client";

const MARKERS: SliderMarkerRecord[] = [
  { id: "marker-1", value: 25, label: "25%" },
  { id: "marker-2", value: 50, label: "50%" },
  { id: "marker-3", value: 75, label: "75%" },
];

const SliderDemo = () => (
  <Wrapper title="Slider">
    <Slider min={0} max={100} label="Slider Label" markers={MARKERS} />
  </Wrapper>
);

export default SliderDemo;
