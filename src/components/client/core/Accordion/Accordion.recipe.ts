import { defineSlotRecipe } from "@pandacss/dev";

export const recipe = defineSlotRecipe({
  className: "accordion",
  description: "The styles for the Accordion component",
  slots: ["root", "trigger", "content"],
  base: {
    root: {
      width: "full",
      py: 1,
      borderRadius: "md",
    },
    trigger: {
      alignItems: "center",
      cursor: "pointer",
      display: "flex",
      px: 4,
      fontWeight: "medium",
      justifyContent: "space-between",
      width: "full",
    },
    content: {
      backgroundColor: "bg.muted",
      borderRadius: "md",
      mt: 2,
      px: 4,
      py: 2,
      "& > div": {
        overflow: "hidden",
      },
    },
  },
});
