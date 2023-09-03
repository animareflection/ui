import { defineSlotRecipe } from "@pandacss/dev";

export const toggleRecipe = defineSlotRecipe({
  className: "toggle",
  description: "The styles for the Toggle component",
  slots: ["root", "control", "label", "thumb"],
  base: {
    root: {
      alignItems: "center",
      display: "flex",
      position: "relative",
      gap: 3,
    },
    control: {
      alignItems: "center",
      background: "bg.emphasized",
      borderRadius: "full",
      cursor: "pointer",
      display: "inline-flex",
      flexShrink: 0,
      width: 9,
      p: 0.5,
      transitionDuration: "normal",
      transitionProperty: "background",
      transitionTimingFunction: "default",
      _checked: {
        background: "accent.default",
      },
    },
    label: {
      userSelect: "none",
      textStyle: "md",
      fontWeight: "medium",
      color: "fg.default",
    },
    thumb: {
      background: "bg.default",
      borderRadius: "full",
      boxShadow: "xs",
      height: 4,
      width: 4,
      transitionDuration: "normal",
      transitionProperty: "transform, background",
      transitionTimingFunction: "default",
      zIndex: 1,
      _checked: {
        transform: "translateX(100%)",
        background: "bg.default",
      },
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          gap: 2,
        },
        control: {
          width: 7,
          p: 0.5,
        },
        thumb: {
          width: 3,
          height: 3,
        },
        label: {
          textStyle: "sm",
        },
      },
      lg: {
        root: {
          gap: 4,
        },
        control: {
          width: 11,
          p: 0.5,
        },
        thumb: {
          width: 5,
          height: 5,
        },
        label: {
          textStyle: "lg",
        },
      },
    },
  },
});
