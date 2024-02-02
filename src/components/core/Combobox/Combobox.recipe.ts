import { comboboxAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Combobox recipe.
 */
export const comboboxRecipe = defineSlotRecipe({
  className: "combobox",
  description: "The styles for the Combobox component",
  slots: comboboxAnatomy.keys(),
  base: {
    root: {
      colorPalette: "brand.primary",
      display: "flex",
      flexDirection: "column",
      gap: 1.5,
      width: "full",
    },
    control: {
      position: "relative",
    },
    label: {
      color: "fg.default",
      fontWeight: "medium",
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
      _open: {
        animation: "fade-in",
      },
      _closed: {
        animation: "fade-out",
      },
      _focusVisible: {
        outlineOffset: "2px",
        outline: "2px solid",
        outlineColor: {
          base: "colorPalette.600",
          _dark: "colorPalette.400",
        },
      },
    },
    item: {
      color: "fg.default",
      alignItems: "center",
      borderRadius: "xs",
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      transitionDuration: "fast",
      transitionProperty: "background, color",
      transitionTimingFunction: "default",
      _hover: {
        bgColor: "bg.muted",
      },
      _highlighted: {
        bgColor: "bg.muted",
      },
      _disabled: {
        color: "fg.disabled",
        cursor: "not-allowed",
        _hover: {
          bgColor: "transparent",
        },
      },
    },
    itemGroupLabel: {
      fontWeight: "semibold",
      textStyle: "sm",
      display: "flex",
      justifyContent: "center",
      borderBottomWidth: "1px",
      borderBottomColor: "border.default",
      color: "fg.default",
    },
    itemIndicator: {
      color: "colorPalette.500",
    },
  },
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      sm: {
        content: { p: 0.5, gap: 1 },
        item: { textStyle: "sm", px: 2, height: 9 },
        itemIndicator: {
          "& :where(svg)": {
            width: 4,
            height: 4,
          },
        },
        itemGroupLabel: {
          px: 2,
          py: 1.5,
          mb: 0.5,
        },
        label: { textStyle: "sm" },
      },
      md: {
        content: { p: 1, gap: 1 },
        item: { textStyle: "md", px: 2, height: 10 },
        itemIndicator: {
          "& :where(svg)": {
            width: 4,
            height: 4,
          },
        },
        itemGroupLabel: {
          px: 2,
          py: 1.5,
          mb: 1,
        },
        label: { textStyle: "sm" },
      },
      lg: {
        content: { p: 1.5, gap: 1 },
        item: { textStyle: "md", px: 2, height: 11 },
        itemIndicator: {
          "& :where(svg)": {
            width: 5,
            height: 5,
          },
        },
        itemGroupLabel: {
          px: 2,
          py: 1.5,
          mb: 1.5,
        },
        label: { textStyle: "sm" },
      },
    },
  },
});
