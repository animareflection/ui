import { defineSlotRecipe } from "@pandacss/dev";

export const sliderRecipe = defineSlotRecipe({
  className: "slider",
  description: "The styles for the Slider component",
  slots: [
    "root",
    "control",
    "label",
    "marker",
    "markerGroup",
    "output",
    "range",
    "thumb",
    "track",
  ],
  base: {
    root: {
      width: "full",
    },
    control: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      py: 2,
    },
    track: {
      backgroundColor: "bg.muted",
      borderRadius: "sm",
      flex: 1,
      height: 2,
      _hover: {
        cursor: "pointer",
      },
    },
    range: {
      background: "accent.default",
      borderRadius: "sm",
      height: 2,
    },
    thumb: {
      background: "bg.default",
      borderColor: "border.accent",
      borderRadius: "full",
      borderWidth: "2px",
      boxShadow: "sm",
      outline: "none",
      height: 5,
      width: 5,
      _hover: {
        cursor: "pointer",
      },
    },
    label: {
      color: "fg.emphasized",
      fontWeight: "semibold",
      textStyle: "sm",
    },
    marker: {
      mt: 2,
      textStyle: "sm",
      color: "fg.default",
    },
  },
});
