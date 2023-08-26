import { defineSlotRecipe } from "@pandacss/dev";

export const tabsRecipe = defineSlotRecipe({
  className: "tabs",
  description: "A tabs style",
  slots: ["root", "list", "trigger", "indicator", "content"],
  base: {
    list: {
      display: "flex",
      flexDirection: {
        _horizontal: "row",
        _vertical: "column",
      },
      gap: {
        _horizontal: 4,
        _vertical: 1,
      },
      borderBottomWidth: {
        _horizontal: "1px",
      },
      borderBottomColor: {
        _horizontal: "border.default",
      },
      borderLeftWidth: {
        _vertical: "1px",
      },
      borderLeftColor: {
        _vertical: "border.default",
      },
      position: "relative",
      w: "full",
    },
    trigger: {
      transitionDuration: "normal",
      transitionProperty: "color",
      transitionTimingFunction: "default",
      cursor: "pointer",
      color: "fg.subtle",
      fontWeight: "semibold",
      textStyle: "md",
      px: {
        _horizontal: 1,
        _vertical: 3,
      },
      pb: {
        _horizontal: 3,
      },
      py: {
        _vertical: 1.5,
      },
      _hover: {
        color: "fg.muted",
      },
      _selected: {
        color: "fg.default",
        _hover: {
          color: "fg.default",
        },
      },
    },
    indicator: {
      background: "accent.default",
      height: {
        _horizontal: "2px",
      },
      bottom: {
        _horizontal: "-1px",
      },
      width: {
        _vertical: "2px",
      },
      left: {
        _vertical: "-1px",
      },
    },
    content: {
      mt: 5,
      color: "fg.default",
    },
  },
  variants: {
    size: {
      sm: {
        trigger: {
          textStyle: "sm",
        },
      },
    },
  },
});