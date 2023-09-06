import { defineSlotRecipe } from "@pandacss/dev";

export const bannerRecipe = defineSlotRecipe({
  className: "banner",
  description: "The styles for the Banner component",
  slots: ["root", "icon"],
  base: {
    root: {
      fontWeight: "medium",
      justifyContent: "space-between",
      display: "inline-flex",
      alignItems: "center",
      userSelect: "none",
      whiteSpace: "nowrap",
      textStyle: "sm",
      w: "full",
      px: 2.5,
      h: 14,
      background: "accent.default",
      color: "accent.fg",
    },
    icon: {
      color: "accent.fg",
    },
  },
  variants: {
    variant: {
      subtle: {
        root: {
          background: "accent.subtle",
          borderColor: "border.accent",
          borderWidth: "1px",
          color: "fg.emphasized",
        },
        icon: { color: "fg.emphasized" },
      },
      outline: {
        root: {
          background: "bg.subtle",
          borderWidth: "1px",
          borderColor: "border.emphasized",
          color: "fg.emphasized",
        },
        icon: {
          color: "fg.emphasized",
        },
      },
    },
    size: {
      sm: {
        root: { textStyle: "xs", px: 2, h: 7, gap: 1 },
      },
      lg: { root: { textStyle: "sm", px: 3, h: 10, gap: 1.5 } },
    },
  },
});
