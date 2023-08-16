import { sva } from "generated/panda/css";

const itemStyle = {
  alignItems: "center",
  borderRadius: "xs",
  cursor: "pointer",
  color: "fg.default",
  display: "flex",
  mx: 1,
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

export const recipe = sva({
  slots: [
    "root",
    "arrow",
    "arrowTip",
    "content",
    "contextTrigger",
    "item",
    "itemGroup",
    "itemGroupLabel",
    "optionItem",
    "positioner",
    "separator",
    "trigger",
    "triggerItem",
  ],
  base: {
    itemGroupLabel: {
      fontWeight: "semibold",
      textStyle: "sm",
      display: "flex",
      justifyContent: "center",
      bgColor: "bg.subtle",
      color: "fg.default",
    },
    content: {
      background: "bg.default",
      borderRadius: "sm",
      boxShadow: "lg",
      _hidden: {
        display: "none",
      },
      display: "flex",
      flexDirection: "column",
      outline: "none",
      py: 1,
      gap: 1,
    },
    separator: {
      color: "bg.subtle",
    },
    trigger: {
      _focus: {
        outline: "none",
      },
    },
    itemGroup: {
      display: "flex",
      flexDirection: "column",
      gap: 1,
    },
    item: itemStyle,
    optionItem: itemStyle,
    triggerItem: itemStyle,
  },
  defaultVariants: {
    size: "sm",
  },
  variants: {
    size: {
      xs: {
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
      sm: {
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
      md: {
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
