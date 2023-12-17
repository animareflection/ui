import { menuAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

const itemStyle = {
  alignItems: "center",
  cursor: "pointer",
  color: "fg.default",
  display: "flex",
  fontWeight: "medium",
  textStyle: "sm",
  transitionDuration: "fast",
  transitionProperty: "background",
  transitionTimingFunction: "default",
  _hover: {
    color: "fg.default",
    background: "accent.subtle",
  },
  _highlighted: {
    color: "fg.default",
    background: "bg.subtle",
  },
} as const;

export const menuRecipe = defineSlotRecipe({
  className: "menu",
  description: "The styles for the Menu component",
  slots: menuAnatomy.keys(),
  base: {
    itemGroupLabel: {
      fontWeight: "semibold",
      textStyle: "sm",
      display: "flex",
      justifyContent: "center",
      borderBottomWidth: "1px",
      borderBottomColor: "border.default",
      color: "fg.default",
    },
    content: {
      background: "bg.default",
      borderRadius: "sm",
      borderWidth: "1px",
      borderColor: "border.default",
      boxShadow: "lg",
      _hidden: {
        display: "none",
      },
      display: "flex",
      flexDirection: "column",
      outline: "none",
      py: 1,
      gap: 1,
      zIndex: "menu",
    },
    separator: {
      color: "bg.subtle",
    },
    itemGroup: {
      display: "flex",
      flexDirection: "column",
      gap: 1,
    },
    item: itemStyle,
    optionItem: itemStyle,
    triggerItem: itemStyle,
    positioner: {
      zIndex: "menu",
    },
    trigger: {
      w: "fit-content",
    },
  },
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      sm: {
        itemGroupLabel: {
          p: 1,
        },
        content: {
          minW: 32,
        },
        item: {
          h: 9,
          px: 2,
        },
        optionItem: {
          h: 9,
          px: 2,
        },
        triggerItem: {
          h: 9,
          px: 2,
        },
      },
      md: {
        itemGroupLabel: {
          p: 1.5,
        },
        content: {
          minW: 44,
        },
        item: {
          h: 10,
          px: 2.5,
        },
        optionItem: {
          h: 10,
          px: 2.5,
        },
        triggerItem: {
          h: 10,
          px: 2.5,
        },
      },
      lg: {
        itemGroupLabel: {
          p: 2,
        },
        content: {
          minW: 56,
        },
        item: {
          h: 11,
          px: 3,
        },
        optionItem: {
          h: 11,
          px: 3,
        },
        triggerItem: {
          h: 11,
          px: 3,
        },
      },
    },
  },
});
