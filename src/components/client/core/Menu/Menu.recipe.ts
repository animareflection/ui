import { sva } from "generated/panda/css";

const itemStyle = {
  alignItems: "center",
  borderRadius: "xs",
  cursor: "pointer",
  display: "flex",
  fontWeight: "medium",
  textStyle: "sm",
  transitionDuration: "fast",
  transitionProperty: "background",
  transitionTimingFunction: "default",
  _hover: {
    background: "#f5f5f5",
  },
  _highlighted: {
    background: "#f5f5f5",
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
      bgColor: "brand.primary.50",
      borderRadius: "sm",
    },
    content: {
      background: "white",
      borderRadius: "sm",
      borderWidth: "1px",
      borderColor: "gray.200",
      boxShadow: "lg",
      _hidden: {
        display: "none",
      },
      display: "flex",
      flexDirection: "column",
      outline: "none",
    },
    separator: {
      color: "gray.200",
    },
    trigger: {
      _focus: {
        outline: "none",
      },
    },
    itemGroup: {
      display: "flex",
      flexDirection: "column",
    },
    item: itemStyle,
    optionItem: itemStyle,
    triggerItem: itemStyle,
  },
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      xs: {
        itemGroup: {
          gap: 1,
        },
        itemGroupLabel: {
          py: 1.5,
          px: 1.5,
          mx: 1,
        },
        content: {
          py: 1,
          gap: 1,
          minW: 24,
        },
        item: {
          h: 8,
          px: 1.5,
          mx: 1,
        },
        optionItem: {
          h: 8,
          px: 1.5,
          mx: 1,
        },
        triggerItem: {
          h: 8,
          px: 1.5,
          mx: 1.5,
        },
      },
      sm: {
        itemGroup: {
          gap: 1,
        },
        itemGroupLabel: {
          py: 2,
          px: 2,
          mx: 1,
        },
        content: {
          py: 1,
          gap: 1,
          minW: 32,
        },
        item: {
          h: 9,
          px: 2,
          mx: 1,
        },
        optionItem: {
          h: 9,
          px: 2,
          mx: 1,
        },
        triggerItem: {
          h: 9,
          px: 2,
          mx: 1.5,
        },
      },
      md: {
        itemGroup: {
          gap: 1,
        },
        itemGroupLabel: {
          py: 2.5,
          px: 2.5,
          mx: 1,
        },
        content: {
          py: 1,
          gap: 1,
          minW: 44,
        },
        item: {
          h: 10,
          px: 2.5,
          mx: 1,
        },
        optionItem: {
          h: 10,
          px: 2.5,
          mx: 1,
        },
        triggerItem: {
          h: 10,
          px: 2.5,
          mx: 1.5,
        },
      },
    },
  },
});
