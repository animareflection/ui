import { defineSlotRecipe } from "@pandacss/dev";

export const carouselRecipe = defineSlotRecipe({
  className: "carousel",
  description: "The styles for the Carousel component",
  slots: [
    "root",
    "control",
    "viewport",
    "trigger",
    "slide",
    "slideGroup",
    "indicatorGroup",
    "indicator",
  ],
  base: {
    viewport: {
      overflowX: "hidden",
      position: "relative",
      borderRadius: "md",
    },
    control: {
      alignItems: "center",
      background: "bg.default",
      borderRadius: "md",
      bottom: 4,
      display: "flex",
      left: "50%",
      opacity: 0.9,
      position: "absolute",
      transform: "translateX(-50%)",
      zIndex: "docked",
      gap: 2,
      p: 2.5,
    },
    indicatorGroup: {
      display: "flex",
      gap: 3,
    },
    indicator: {
      borderRadius: "full",
      background: "bg.emphasized",
      cursor: "pointer",
      width: 2.5,
      height: 2.5,
      _current: {
        background: "accent.default",
      },
      _focusVisible: {
        outlineOffset: "2px",
        outline: "2px solid",
        outlineColor: "border.outline",
      },
    },
    trigger: {
      color: "fg.muted",
      verticalAlign: "baseline",
      cursor: "pointer",
      _hover: {
        color: "fg.default",
      },
      _disabled: {
        color: "fg.disabled",
        cursor: "not-allowed",
        _hover: {
          color: "fg.disabled",
        },
      },
      height: "auto!",
      px: "0!",
      pb: 1,
      minW: "0!",
    },
  },
  variants: {
    size: {
      sm: {
        control: {
          gap: 1,
          p: 1,
        },
        indicatorGroup: {
          gap: 2,
        },
        indicator: {
          width: 2,
          height: 2,
        },
      },
    },
  },
});
