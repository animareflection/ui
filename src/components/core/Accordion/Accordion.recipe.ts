import { accordionAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

export const accordionRecipe = defineSlotRecipe({
  className: "accordion",
  description: "The styles for the Accordion component",
  slots: accordionAnatomy.keys(),
  base: {
    root: {
      width: "full",
      py: 1,
      borderRadius: "md",
      display: "flex",
      flexDirection: "column",
      gap: 2,
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
      color: "fg.default",
      borderBottomLeftRadius: "md",
      borderBottomRightRadius: "md",
      p: 4,
      display: "grid",
      gridTemplateRows: "0fr",
      transitionProperty: "grid-template-rows, padding",
      transitionDuration: "normal",
      transitionTimingFunction: "default",
      _open: {
        gridTemplateRows: "1fr",
      },
      _closed: {
        p: 0,
      },
      "& > div": {
        overflow: "hidden",
      },
    },
  },
});
