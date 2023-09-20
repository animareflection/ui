import { defineTokens } from "@pandacss/dev";

const zIndex = defineTokens.zIndex({
  docked: {
    value: 10,
  },
  overlay: {
    value: 1300,
  },
  modal: {
    value: 1400,
  },
});

export default zIndex;
