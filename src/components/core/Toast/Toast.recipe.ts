import { defineSlotRecipe } from "@pandacss/dev";

export const toastRecipe = defineSlotRecipe({
  className: "toast",
  description: "The styles for the Toast component",
  slots: ["root", "closeTrigger", "title", "description"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      borderRadius: "md",
      borderWidth: "1px",
      boxShadow: "sm",
      minW: "300px",
      px: 5,
      py: 2,
    },
    closeTrigger: {
      display: "flex",
      position: "absolute",
      cursor: "pointer",
      top: 3,
      right: 3,
      _hover: {
        opacity: 0.8,
      },
    },
    title: {
      fontWeight: "semibold",
    },
    description: {
      fontSize: "sm",
    },
  },
  defaultVariants: {
    variant: "unstyled",
  },
  variants: {
    variant: {
      unstyled: {
        root: {
          bgColor: "bg.default",
          borderColor: "border.default",
        },
        closeTrigger: {
          color: "fg.muted",
        },
        description: {
          color: "fg.muted",
        },
        title: {
          color: "fg.default",
        },
      },
      success: {
        root: {
          bgColor: { base: "green.50", _dark: "green.950" },
          borderColor: { base: "green.200", _dark: "green.800" },
        },
        closeTrigger: {
          color: "green.500",
        },
        description: {
          color: "green.500",
        },
        title: {
          color: { base: "green.950", _dark: "green.50" },
        },
      },
      error: {
        root: {
          bgColor: { base: "red.50", _dark: "red.950" },
          borderColor: { base: "red.200", _dark: "red.800" },
        },
        closeTrigger: {
          color: "red.500",
        },
        description: {
          color: "red.500",
        },
        title: {
          color: { base: "red.950", _dark: "red.50" },
        },
      },
      loading: {
        root: {
          bgColor: { base: "brand.primary.50", _dark: "brand.primary.950" },
          borderColor: {
            base: "brand.primary.200",
            _dark: "brand.primary.800",
          },
        },
        closeTrigger: {
          color: "brand.primary.500",
        },
        description: {
          color: "brand.primary.500",
        },
        title: {
          color: { base: "brand.primary.950", _dark: "brand.primary.50" },
        },
      },
    },
  },
});
