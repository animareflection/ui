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
      transitionProperty: "grid-template-rows, padding-bottom",
      transitionDuration: "500ms",
      _open: {
        bgColor: "colorPalette.500",
        color: "accent.fg",
        borderTopRadius: "md",
        borderBottomRadius: 0,
      },
      _closed: {
        bgColor: "bg.subtle",
        color: "fg.default",
        borderRadius: "md",
        transitionDelay: "300ms",
        transitionProperty: "border-radius",
      },
    },
    itemIndicator: {
      transformOrigin: "center",
      transitionDuration: "normal",
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
      backgroundColor: "bg.subtle",
      color: "fg.default",
      px: 4,
      borderBottomRadius: "md",
      display: "grid",
      gridTemplateRows: "0fr",
      transitionProperty: "all",
      transitionDuration: "500ms",
      transitionTimingFunction: "default",
      _open: {
        gridTemplateRows: "1fr",
        bgColor: "bg.subtle",
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
