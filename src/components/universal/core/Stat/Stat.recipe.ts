import { defineSlotRecipe } from "@pandacss/dev";

export const statRecipe = defineSlotRecipe({
  className: "stat",
  description: "The styles for the Stat component",
  slots: ["root", "title", "value", "icon"],
  base: {
    root: {
      display: "flex",
      flexDirection: "row",
      borderRadius: "md",
      boxShadow: "sm",
      bgColor: "accent.default",
      color: "fg.default",
      gap: 4,
      w: "fit",
      alignItems: "center",
      p: 4,
    },
    title: {
      color: "fg.default",
      textStyle: "md",
    },
    value: {
      color: "fg.default",
      fontWeight: "bold",
      textStyle: "xl",
    },
    icon: {
      color: "fg.default",
      h: 12,
      w: 12,
      p: 2,
      borderRadius: "md",
      backgroundColor: "bg.default",
    },
  },
  variants: {
    size: {
      sm: {
        root: { gap: 2, p: 2 },
        title: { textStyle: "sm" },
        value: { textStyle: "md" },
        icon: { h: 6, w: 6, p: 1 },
      },
      lg: {
        root: { gap: 6, p: 6 },
        title: { textStyle: "lg" },
        value: { textStyle: "2xl" },
        icon: { h: 20, w: 20, p: 4 },
      },
    },
  },
});
