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
  menu: {
    value: 1500,
  },
});

export default zIndex;
