import { accordionAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

export const accordionRecipe = defineSlotRecipe({
  className: "accordion",
  description: "The styles for the Accordion component",
  slots: accordionAnatomy.keys(),
  base: {
    root: {
      colorPalette: "brand.primary",
      width: "full",
      py: 1,
      borderRadius: "md",
      display: "flex",
      flexDirection: "column",
      gap: 2,
    },
    itemTrigger: {
      alignItems: "center",
      cursor: "pointer",
      display: "flex",
      px: 4,
      py: 3,
      justifyContent: "space-between",
      width: "full",
      transitionProperty: "background-color, color",
      transitionDuration: "slowest",
      _open: {
        bgColor: "colorPalette.500",
        color: "accent.fg",
        borderTopRadius: "md",
        borderBottomRadius: 0,
      },
      _closed: {
        bgColor: "bg.muted",
        color: "fg.default",
        borderRadius: "md",
        transitionDelay: "slower",
        transitionProperty: "border-radius",
      },
    },
    itemIndicator: {
      display: "flex",
      transformOrigin: "center",
      transitionDuration: "slowest",
      transitionProperty: "transform",
      transitionTimingFunction: "default",
      _open: {
        transform: "rotate(-180deg)",
        color: "accent.fg",
      },
      _closed: {
        color: "fg.default",
      },
    },
    itemContent: {
      backgroundColor: "bg.muted",
      color: "fg.default",
      px: 4,
      borderBottomRadius: "md",
      display: "grid",
      gridTemplateRows: "0fr",
      transitionProperty: "all",
      transitionDuration: "slowest",
      transitionTimingFunction: "default",
      _open: {
        gridTemplateRows: "1fr",
        bgColor: "bg.muted",
        py: 4,
      },
      _closed: {
        gridTemplateRows: "0fr",
        py: 0,
      },
      "& > div": {
        overflow: "hidden",
      },
    },
  },
});
